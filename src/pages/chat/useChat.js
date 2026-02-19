import { useEffect, useState } from "react";
import { API_ENDPOINTS } from "../../services/api";

const useChat = (currentUserId) => {
  const [conversations, setConversations] = useState([]);
  const [activeConversation, setActiveConversation] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);

  const token = localStorage.getItem("authToken");

  // LOAD CONVERSATIONS
  useEffect(() => {
    const loadConversations = async () => {
      try {
        const res = await fetch(API_ENDPOINTS.MY_CONVERSATIONS, {
          headers: {
            Authorization: `Token ${token}`,
          },
        });

        if (res.ok) {
          const data = await res.json();
          setConversations(data.conversations);
          console.log(data)
        }
      } catch (err) {
        console.error("Failed to load conversations", err);
      }
    };

    loadConversations();
  }, [token]);

  /* ---------------- LOAD MESSAGES ---------------- */
  const loadMessages = async (conversation) => {
    setActiveConversation(conversation);

    try {
      const res = await fetch(API_ENDPOINTS.GET_ALL_MESSAGES, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify({
          user_one: currentUserId,
          user_two: conversation.user_one.id,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        setMessages([...data.messages].reverse());
        console.log(data)
      }
    } catch (err) {
      console.error("Failed to load messages", err);
    }
  };

  /* ---------------- SEND MESSAGE ---------------- */
  const sendMessage = async () => {
    if (!input.trim() || !activeConversation || isSending) return;

    const tempId = crypto.randomUUID();
    const text = input;

    const optimisticMessage = {
      id: tempId,
      sender: currentUserId,
      receiver: activeConversation.user_one.id,
      text,
      created_at: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, optimisticMessage]);
    setInput("");
    setIsSending(true);

    try {
      const res = await fetch(API_ENDPOINTS.SEND_MESSAGE, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify({
          sender: currentUserId,
          receiver: activeConversation.user_one.id,
          text,
        }),
      });

      if (!res.ok) {
        throw new Error("Send failed");
      }
    } catch (err) {
      console.error(err);
      setMessages((prev) => prev.filter((m) => m.id !== tempId));
    } finally {
      setIsSending(false);
    }
  };

  return {
    conversations,
    activeConversation,
    messages,
    input,
    setInput,
    loadMessages,
    sendMessage,
    isSending,
  };
};

export default useChat;
