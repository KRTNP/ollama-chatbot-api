import { Router } from 'express';
import { generateChatCompletion } from '../controllers/chatController';

const router = Router();

router.post('/generate', generateChatCompletion);

router.get('/', (req, res) => {
  res.send('Welcome to the Ollama Chatbot API');
});

export default router;