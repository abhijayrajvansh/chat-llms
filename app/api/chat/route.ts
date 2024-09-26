import { openai } from '@ai-sdk/openai';
import { ollama } from 'ollama-ai-provider';
import { streamText, convertToCoreMessages } from 'ai';

export const runtime = "edge"; // vercel specific for longer response
export const maxDuration = 30; // response are generated for max 30s.

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    // model: openai('gpt_version'),
    model: ollama('llama3.1:8b'),
    messages: convertToCoreMessages(messages),
  });

  return result.toDataStreamResponse();
}