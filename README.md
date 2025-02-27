# Ollama Chatbot API

This is an API for the Ollama Chatbot, which provides chat completions using a specified model. The API is built with Express and TypeScript.

## Installation

1. Clone the repository:

  ```sh
  git clone https://github.com/yourusername/ollama-chatbot-api.git
  cd ollama-chatbot-api
  ```

2. Install the dependencies:

  ```sh
  npm install
  ```

3. Create a `.env` file in the root directory and add the following environment variables:

  ```env
  OLLAMA_HOST=http://127.0.0.1:11434
  DEFAULT_MODEL=llama3.2
  DEFAULT_TEMPERATURE=0.7
  DEFAULT_SYSTEM_PROMPT="You are a helpful cooking assistant. You provide accurate, clear advice about cooking, recipes, and food preparation."
  ```

4. Build the project:

  ```sh
  npm run build
  ```

5. Start the server:

  ```sh
  npm start
  ```

  The server will run on [http://localhost:3000](http://localhost:3000).

## API Endpoints

### Generate Chat Completion

- **URL:** `/api/chat/generate`
- **Method:** `POST`
- **Body Parameters:**
  - `prompt` (string): The prompt to generate a response for.
  - `model` (string, optional): The model to use for generating the response. Defaults to `DEFAULT_MODEL`.
  - `systemPrompt` (string, optional): The system prompt to use. Defaults to `DEFAULT_SYSTEM_PROMPT`.
  - `temperature` (number, optional): The temperature to use for generating the response. Defaults to `DEFAULT_TEMPERATURE`.
- **Response:**
  - `response` (string): The generated response.

**Example request:**

```sh
curl -X POST http://localhost:3000/api/chat/generate \
  -H "Content-Type: application/json" \
  -d '{
   "prompt": "How do I make a chocolate cake?",
   "model": "llama3.2",
   "systemPrompt": "You are a helpful cooking assistant.",
   "temperature": 0.7
  }'
```

**Example response:**

```json
{
  "response": "To make a chocolate cake, you will need..."
}
```

### Welcome Message

- **URL:** `/api/chat/`
- **Method:** `GET`
- **Response:**
  - `message` (string): Welcome message.

**Example request:**

```sh
curl http://localhost:3000/api/chat/
```

**Example response:**

```json
{
  "message": "Welcome to the Ollama Chatbot API"
}
```

## Using the API in Your Chatbot Project

To use this API in your chatbot project, you can make HTTP requests to the endpoints described above. Here is an example of how to integrate it with a simple chatbot interface using JavaScript:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Chatbot</title>
</head>
<body>
  <div id="chatbox">
   <div id="messages"></div>
   <input type="text" id="prompt" placeholder="Type your message here...">
   <button onclick="sendMessage()">Send</button>
  </div>

  <script>
   async function sendMessage() {
    const prompt = document.getElementById('prompt').value;
    const response = await fetch('http://localhost:3000/api/chat/generate', {
      method: 'POST',
      headers: {
       'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });
    const data = await response.json();
    document.getElementById('messages').innerHTML += `<p><strong>You:</strong> ${prompt}</p>`;
    document.getElementById('messages').innerHTML += `<p><strong>Bot:</strong> ${data.response}</p>`;
    document.getElementById('prompt').value = '';
   }
  </script>
</body>
</html>
```

## License

This project is licensed under the ISC License.
