"use client";

import { useChat } from "ai/react";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { AiOutlineEnter } from "react-icons/ai";
import Markdown from 'markdown-to-jsx';

export const runtime = "edge"; // vercel specific for longer response

export default function Chat() {
  const chatContainerRef = useRef<HTMLDivElement | null>(null);
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat",
  });

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex flex-col w-full container mx-auto py-24 h-screen">
      <div
        ref={chatContainerRef}
        className="bgreen mb-5 w-full sm:w-[70%] mx-auto overflow-auto"
      >
        {messages.map((m) => (
          <div key={m.id} className={`whitespace-pre-wrap px-4 py-2 flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-xs rounded-lg p-3 ${m.role === "user" ? "bg-blue-500 text-white" : "bg-gray-300 text-black"}`}>
              <Markdown>{m.content}</Markdown>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full mb-8 flex items-center justify-center gap-3">
          <input
            className="w-[70%] sm:w-1/2 sm:p-3 p-2  border border-gray-500 rounded shadow-xl text-black "
            value={input}
            placeholder="Say something..."
            onChange={handleInputChange}
          />
          <Button disabled={isLoading} variant={"default"} size={"icon"} className="sm:py-6 sm:w-16 py-5 w-10">
            <AiOutlineEnter size={25}/>
          </Button>
        </div>
      </form>
    </div>
  );
}
