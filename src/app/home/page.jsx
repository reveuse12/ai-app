"use client";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

const Page = () => {
  const [messages, setMessages] = useState([]);
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const addMessage = (text, isUser = false) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text, isUser, timestamp: new Date().toISOString() },
    ]);
  };

  const handleSend = async () => {
    if (prompt.trim() === "") {
      toast.error("Please enter a prompt before sending.");
      return;
    }

    try {
      setLoading(true);
      addMessage(prompt, true);

      const apiResponse = await fetch(`${window.origin}/api/chat`, {
        method: "POST",
        body: JSON.stringify({
          prompt: prompt,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!apiResponse.ok) {
        throw new Error("Failed to fetch");
      }

      const data = await apiResponse.json();
      addMessage(data.text);

      setPrompt("");
      toast.success("Data fetched successfully");
    } catch (error) {
      toast.error(`Error fetching data: ${error.message}`);
      addMessage("Error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-8 text-center bg-gray-100">
      <h1 className="text-4xl underline decoration-slate-400 font-semibold text-indigo-800 ">
        GEMINI <span className="text-sky-500">GPT</span>
      </h1>

      <div className="w-full">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`${
              message.isUser ? "flex justify-end" : "flex justify-start"
            } mb-4 ${index !== messages.length - 1 ? "pb-4" : ""}`}
          >
            <div
              className={`${
                message.isUser
                  ? "bg-indigo-500 text-white"
                  : "bg-gray-200 text-black"
              } p-3 rounded-lg max-w-full break-words shadow`}
            >
              {message.text}
            </div>
          </div>
        ))}

        <div className="bg-white bottom-0 shadow-md rounded-md p-4 mb-4">
          <div className="mb-2 text-sm font-medium text-gray-900">
            User Prompt
          </div>
          <div className="flex items-center">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="border border-gray-300 p-2 rounded w-full text-black"
            />
            <button
              className="ml-2 bg-indigo-500 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              onClick={handleSend}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
