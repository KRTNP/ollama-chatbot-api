import fetch from 'node-fetch';

const OLLAMA_HOST = process.env.OLLAMA_HOST || 'http://127.0.0.1:11434';
const DEFAULT_MODEL = process.env.DEFAULT_MODEL || 'llama3.2';
const DEFAULT_TEMPERATURE = parseFloat(process.env.DEFAULT_TEMPERATURE || '0.7');
const DEFAULT_SYSTEM_PROMPT = process.env.DEFAULT_SYSTEM_PROMPT || 'You are a helpful cooking assistant. You provide accurate, clear advice about cooking, recipes, and food preparation.';

export const generateChatCompletion = async (
  prompt: string,
  model: string = DEFAULT_MODEL,
  systemPrompt: string = DEFAULT_SYSTEM_PROMPT,
  temperature: number = DEFAULT_TEMPERATURE
): Promise<string> => {
  try {
    const response = await fetch(`${OLLAMA_HOST}/api/generate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model,
        prompt,
        system: systemPrompt,
        temperature,
        stream: false,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error('Error calling Ollama:', error);
    throw error;
  }
};