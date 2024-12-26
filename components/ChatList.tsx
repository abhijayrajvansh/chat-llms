"use client";

import { Separator } from "@/components/ui/separator";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import Markdown from "markdown-to-jsx";
import Image from "next/image";

interface Session {
  user: {
    id: string;
    email: string;
  };
}

export type UIState = {
  id: string;
  content: string;
  role: "function" | "data" | "user" | "system" | "assistant" | "tool";
}[];

export interface ChatList {
  messages: UIState;
  session?: Session;
}

export function ChatList({ messages, session }: ChatList) {
  if (!messages.length) {
    return null;
  }

  return (
    <div className="relative mx-auto sm:w-1/2 px-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex flex-col px-2 py-2 ${
            message.role === "user" ? "items-end" : "items-start"
          }`}
        >
          <div>
            <div className="flex items-start gap-2 sm:gap-3">
              <div
                className={`${message.role === "user" ? "hidden" : "block"}`}
              >
                <Image
                  className="max-w-16 rounded-md"
                  height={35}
                  width={35}
                  src={`/meta.webp`}
                  alt="uptut-logo"
                />
              </div>
              <div
                className={` p-1 px-2 sm:px-3 rounded-md ${
                  message.role === "user"
                    ? "bg-gray-200/50"
                    : "bg-blue-200/50"
                }`}
              >
                <Markdown>{message.content}</Markdown>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
