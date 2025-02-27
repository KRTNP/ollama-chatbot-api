import { Request, Response } from 'express';
import { generateChatCompletion as generateChatCompletionService } from '../services/ollamaService';

export const generateChatCompletion = async (req: Request, res: Response) => {
  const { prompt, model, systemPrompt, temperature } = req.body;

  try {
    const response = await generateChatCompletionService(prompt, model, systemPrompt, temperature);
    res.json({ response });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};