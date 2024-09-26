# Chat LLMs

Author: [Abhijay Rajvansh](https://abhijayrajvansh.com)

## Description

launchctl setenv OLLAMA_HOST 0.0.0.0:11434 (for exposing ollama on the network)

route: `'/api/chat`

#### JSON `POST` sample data:
```
{
  "model": "llama3.1:8b",
  "messages": [
    {
      "role" : "user",
      "content": "create a function in typescript for adding two numbers"
    }
  ],
  "stream": false
}
```
docs: https://github.com/ollama/ollama/blob/main/docs/api.md#generate-a-completion
