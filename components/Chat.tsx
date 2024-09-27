"use client";

import { useChat } from "ai/react";
import { useEffect, useRef } from "react";
import { ChatList } from "./ChatList";
import NewScreen from "./NewScreen";
import { Button } from "./ui/button";
import { IoSend } from "react-icons/io5";

export const runtime = "edge"; // vercel specific for longer response

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      api: "/api/chat",
    });

  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const exampleMessages = [
    {
      heading: "Sample template 1",
      subheading: "template structure will be added here...",
      message: `just reply with, "add embedding first.."`,
    },
    {
      heading: "Sample template 2",
      subheading: "template structure will be added here...",
      message: `just reply with, "add embedding first.."`,
    },
  ];

  return (
    <div className="flex flex-col w-full container mx-auto py-24">
      <div
        className="group w-full overflow-auto pl-0 peer-[[data-state=open]]:lg:pl-[250px] peer-[[data-state=open]]:xl:pl-[300px]"
        
      >
        <div ref={chatContainerRef}>
          {messages.length ? (
            <ChatList messages={messages} session={undefined} />
          ) : (
            <NewScreen />
          )}
        </div>

        <div className="fixed inset-x-0 bottom-0 w-full bg-gradient-to-b">
          <div className="mx-auto sm:max-w-2xl sm:px-4">
            <div className="mb-28 grid grid-cols-2 gap-2 px-4 sm:px-0">
              {messages.length === 0 &&
                exampleMessages.map((example, index) => (
                  <div
                    key={example.heading}
                    className={`cursor-pointer rounded-lg border-2 p-4 dark:bg-green-100/30 bg-[#5F6D5D]/20 text-black ${
                      index > 1 && "hidden md:block"
                    }`}
                  >
                    <div className="text-sm font-semibold">
                      {example.heading}
                    </div>
                    <div className="text-sm text-black">
                      {example.subheading}
                    </div>
                  </div>
                ))}
              <form onSubmit={handleSubmit}>
                <div className="fixed bottom-0 left-1/2 m -translate-x-1/2 transfor w-full py-8 bg-background flex items-center justify-center gap-3">
                  <input
                    className="dark:bg-transparent/30 w-[70%] sm:w-1/2 sm:p-3 p-2 border-2 rounded-xl shadow-md text-black dark:text-white "
                    value={input}
                    placeholder="Say something..."
                    onChange={handleInputChange}
                  />
                  <Button
                    type="submit"
                    disabled={isLoading}
                    variant={"default"}
                    size={"icon"}
                    className="py-5 w-10 px-2 rounded-xl"
                  >
                    <IoSend size={30} />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
