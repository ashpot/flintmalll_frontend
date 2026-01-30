import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { cn } from "../../lib/Utils";

// Message Bubble Component
const MessageBubble = ({ message }) => {
  const isSender = message.role === "user";

  return (
    <div
      className={`flex flex-col mb-4 ${
        isSender ? "items-end" : "items-start"
      }`}
    >
      <div
        className={`max-w-[75%] p-3 rounded-2xl shadow-sm ${
          isSender
            ? "bg-blue-600 text-white rounded-br-none"
            : "bg-gray-200 text-gray-800 rounded-bl-none"
        }`}
      >
        <p className="text-sm">{message.content}</p>
      </div>

      {/* Timestamp */}
      {isSender && (
        <span className="text-[10px] text-gray-400 mt-1">
          {message.timestamp} ·{" "}
        </span>
      )}
    </div>
  );
};

// Headless Chat Hook (backend-ready)
const useChat = () => {
  const [messages, setMessages] = useState([
    {
      id: "1",
      role: "assistant",
      content: "Hi! How's the project going?",
      timestamp: "10:30 AM",
    },
    {
      id: "2",
      role: "user",
      content: "It's coming along great, just finishing the UI and some minor tweaks.",
      timestamp: "10:32 AM",
      status: "delivered",
    },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    // data being displayed in the ui, sent and updated in the backend
    const newMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: input,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      status: "sent",
    };

    setMessages((prev) => [...prev, newMessage]);
    setInput("");
  };

  return {
    messages,
    input,
    setInput,
    sendMessage,
  };
};

const Chat = () => {
  const [activeChat, setActiveChat] = useState(null);
  const navigate = useNavigate();
  const { messages, input, setInput, sendMessage } = useChat();

  return (
    <div className="sm:bg-[#F7F7F7]">
      <title>Flintmall - Message</title>

      {/* Top Nav */}
      <nav
        className={cn(
          "flex items-center justify-between px-6 md:px-36 py-4 md:py-8 shadow-sm bg-white",
          "text-xl xs:text-2xl sm:text-3xl font-bold"
        )}
      >
        <button onClick={() => navigate(-1)}>
          <IoIosArrowBack size={25} />
        </button>
        <h1>Chats</h1>
        <div />
      </nav>

      <main className="min-h-screen md:max-w-7xl sm:max-w-xl mx-auto py-10">
         <div className="w-full md:w-72">
              <input
                type="text"
                placeholder="Search"
                className="w-full p-2.5 border rounded-lg"
              />
            </div>
        <div className="flex gap-10 h-screen bg-gray-100 overflow-hidden md:mt-3">

          {/* Sidebar */}
          <aside
            className={`w-full md:w-72 bg-white rounded-lg md:shadow-lg flex flex-col
            ${activeChat ? "hidden md:flex" : "flex"}`}
          >
            <div className="flex-1 overflow-y-auto">
              <button
                onClick={() => setActiveChat(true)}
                className="w-full p-4 hover:bg-gray-50 flex items-center gap-3"
              >
                <div className="w-12 h-12 bg-gray-300 rounded-full" />
                <div className="text-left">
                  <p className="font-semibold">User Name</p>
                  <p className="text-xs text-gray-500 truncate">
                    Last message preview...
                  </p>
                </div>
              </button>
            </div>
          </aside>

          {/* Chat Window */}
          <main
            className={`flex-1 flex flex-col bg-white rounded-lg md:shadow-lg
            ${!activeChat ? "hidden md:flex" : "flex"}`}
          >
            <header className="p-4 border-b flex md:hidden">
              <button
                onClick={() => setActiveChat(null)}
                className="md:hidden text-blue-600 font-medium"
              >
                ← Back
              </button>
            </header>

            {/* Messages */}
            <div className="flex h-full flex-col overflow-y-auto p-4 bg-gray-50 rounded-lg">
              <div className="flex-1">
              {messages.map((msg) => (
                <MessageBubble key={msg.id} message={msg} />
              ))}
            </div>

            <footer className="">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Write a message..."
                  className="flex-1 border rounded-xl px-4 py-2 pl-8 focus:ring-2 focus:ring-blue-500 outline-none"
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                />
                <button
                  onClick={sendMessage}
                  className={`bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 
                    ${!input.trim() && 'hidden'}`}
                >
                  Send
                </button>
              </div>
            </footer>
            </div>
            

            {/* Input */}
            
          </main>
        </div>
      </main>
    </div>
  );
};

export default Chat;
