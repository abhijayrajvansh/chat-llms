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
      {!session ? (
        <>
          <div className="group relative mb-4 flex items-center justify-center md:-ml-12">
            <div className="flex items-center">
              <div className="bg-yellow-300 flex size-[25px] shrink-0 select-none items-center justify-center rounded-md border shadow-sm">
                <ExclamationTriangleIcon className="text-black" />
              </div>

              <div className="ml-4 flex-1 space-y-2 overflow-hidden px-1">
                <p className="text-muted-foreground leading-normal">
                  Please{" "}
                  <Link href="/" className="underline">
                    log in
                  </Link>{" "}
                  or{" "}
                  <Link href="/" className="underline">
                    sign up
                  </Link>{" "}
                  to save and revisit your chat history!
                </p>
              </div>
            </div>
          </div>{" "}
          <Separator className="my-4" />
        </>
      ) : null}

      {messages.map((message, index) => (
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
                  className="min-w-7 p-1 bg-white rounded-md"
                  height={10}
                  width={10}
                  src="/uptut.jpeg"
                  alt="uptut-logo"
                />
              </div>
              <div
                className={` p-1 px-2 sm:px-3 rounded-md ${
                  message.role === "user"
                    ? "dark:bg-green-100/30 bg-[#5F6D5D]/20"
                    : "dark:bg-pink-100/30 bg-[#C28889]/20"
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
