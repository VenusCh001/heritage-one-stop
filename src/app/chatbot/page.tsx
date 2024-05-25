"use client";
import React, { useState, useEffect } from "react";
import { textTotext } from "../../utils/gemini";
import { MessageSquareReply, MicIcon } from "lucide-react";
import Header from "@/components/Header/Header";

type ChatHistoryType = { userMessage: string; llmMessage: string };

export default function AI() {
  const [data, setData] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const handleChatResponse = async () => {
    const llmResponse = await textTotext(data);
    setChatHistory((prevHistory) => [...prevHistory, { userMessage: data, llmMessage: llmResponse }]);
    // setData(""); // Clear input after sending
  };

  return (
    <>
      <Header />
      <div className="container relative h-[130vh] flex justify-center items-center">
        <div className="h-[75%] w-[80%] bg-[#464545] rounded-lg text-black text-2xl pt-[rem] font-sans flex justify-center bottom-[18%] right-[3%]">
          <div className="flex flex-col gap-2 font-sans w-[90%]">
            <div className="ml-1.5 h-[90%] w-[100%] rounded-md text-white text-2xl">
              {chatHistory.map((message, index) => (
                <div key={index} className="mb-2 pt-4">
                  <span className="text-blue-500">User:</span> {message.userMessage}
                </div>
              ))}
              <div className="text-white float-right">
                <span className="text-blue-500">Chatbot:</span>{" "}
                {chatHistory.length > 0 ? chatHistory[chatHistory.length - 1].llmMessage.slice(0, 350) : ""}
              </div>
            </div>
            <div className="flex flex-row gap-2 w-[100%] ml-1.5">
              <input
                className="w-[100%] rounded-md text-white pl-1 text-sm"
                placeholder="Type your message..."
                type="text"
                value={data}
                onChange={(e) => setData(e.target.value)}
              />
              <button className="bg-cyan-500 w-[3%] rounded-md text-sm p-1" onClick={handleChatResponse}>
                <MessageSquareReply />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
