"use client";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

const Page = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const apiResponse = await fetch("http://localhost:3000/api/chat", {
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
      setResponse(data.text);

      setPrompt("");
      toast.success("Data fetched successfully");
    } catch (error) {
      toast.error(`Error fetching data: ${error.message}`);
      setResponse("Error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center bg-gray-100">
      <h1 className="text-4xl font-semibold underline text-indigo-800 my-4">
        SastA CHATGPT
      </h1>

      <div className="flex justify-center items-center mt-8">
        <div className="w-full max-w-md">
          <label
            htmlFor="prompt"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Enter your prompt
          </label>
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="border border-gray-300 p-2 rounded w-full text-black"
          />

          <button
            className={`flex ${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-indigo-500 hover:to-purple-500 hover:shadow-lg"
            } p-3 md:w-full rounded-lg`}
            onClick={handleSubmit}
            disabled={loading}
          >
            <svg
              height="24"
              width="24"
              fill="#FFFFFF"
              viewBox="0 0 24 24"
              data-name="Layer 1"
              id="Layer_1"
              className={`sparkle ${loading ? "animate-spin" : ""} `}
            >
              <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
            </svg>

            <span className={`text ${loading ? "opacity-50" : ""}`}>
              {loading ? "Sending..." : "Send"}
            </span>
          </button>
        </div>
      </div>

      {response && (
        <div className="mt-4 p-4 bg-white shadow-md rounded-md">
          <p className="text-gray-700 font-bold">{prompt}</p>
          <p className="text-gray-800">{response}</p>
        </div>
      )}
    </div>
  );
};

export default Page;
