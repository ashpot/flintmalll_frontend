import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { cn } from "../../lib/Utils";
import useChat from "./useChat";
// Message Bubble Component
const MessageBubble = ({ message, userId }) => {
  const isSender = message.sender?.id === userId;

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
        <p className="text-sm">{message.message || message.text}</p>
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



const Chat = () => {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const CURRENT_USER_ID = currentUser.user.id;

  const {
    conversations,
    activeConversation,
    messages,
    input,
    setInput,
    loadMessages,
    sendMessage,
    isSending,
  } = useChat(CURRENT_USER_ID);

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
            ${activeConversation ? "hidden md:flex" : "flex"}`}
          >
            <div className="flex-1 overflow-y-auto">
              {conversations.map((conv) => (
                <button
                  key={conv.id}
                  onClick={() => loadMessages(conv)}
                  className="w-full p-4 hover:bg-gray-50 flex items-center gap-3"
                >
                  <div className="w-12 h-12 bg-gray-300 rounded-full" />
                  <div className="text-left">
                    <p className="font-semibold">
                      {conv.user_one.first_name} {conv.user_one.last_name}
                    </p>
                    <p className="text-xs text-gray-500 truncate">
                      {conv.last_message || "No messages yet"}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </aside>

          {/* Chat Window */}
          <main
            className={`flex-1 flex flex-col bg-white rounded-lg md:shadow-lg
            ${!activeConversation ? "hidden md:flex" : "flex"}`}
          >
            <header className="p-4 border-b flex md:hidden">
              <button
                onClick={() => loadMessages(null)}
                className="md:hidden text-blue-600 font-medium"
              >
                ← Back
              </button>
            </header>

            {/* Messages */}
            <div className="flex h-full flex-col overflow-y-auto p-4 bg-gray-50 rounded-lg">
              <div className="flex-1">
                {/* reverse the data gotten from the backend to old-new instead of new-old */}
                {[...messages].reverse().map((msg) => (
                  <MessageBubble key={msg.id} message={msg} userId={CURRENT_USER_ID} />
                ))}
              </div>

              <footer>
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
                    disabled={isSending}
                    className={`bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 
                    ${!input.trim() && "hidden"}`}
                  >
                    Send
                  </button>
                </div>
              </footer>
            </div>
          </main>
        </div>
      </main>
    </div>
  );
};

export default Chat;
