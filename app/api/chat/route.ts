import { openai } from "@ai-sdk/openai";
import { createOllama } from "ollama-ai-provider";
import { streamText, convertToCoreMessages } from "ai";

// export const runtime = "edge"; // vercel specific for longer response
// export const maxDuration = 30; // response are generated for max 30s.

const ollama = createOllama({
  baseURL: "http://192.168.29.170:11434/api",
});

export async function POST(req: Request) {
  const { messages } = await req.json();
  // debug
  console.log('Incoming request messages:', messages);

  const result = await streamText({
    // model: openai('gpt_version'),
    model: ollama('llama3.1:8b'),
    messages: convertToCoreMessages(messages),
  });

  console.log('Response:', result);
  return result.toDataStreamResponse();
}
