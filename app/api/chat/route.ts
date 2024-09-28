import { openai } from "@ai-sdk/openai";
import { createOllama } from "ollama-ai-provider";
import { streamText, convertToCoreMessages, StreamData } from "ai";

export const runtime = "edge"; // vercel specific for longer response
export const maxDuration = 30; // response are generated for max 30s.

const ollama = createOllama({
  baseURL: process.env.OLLAMA_BASE_URL as string
});

export async function POST(req: Request) {
  const { messages } = await req.json();

  const data = new StreamData();
  data.append({ status: 'Checking your issue...' });

  const result = await streamText({
    // model: openai('gpt_version'),
    model: ollama('llama3.2:3b'),
    
    messages: convertToCoreMessages(messages),
    
    onFinish() {
      data.append({ status: 'Solution found!' });
      data.close();
    },
  });

  return result.toDataStreamResponse({ data });
} 
