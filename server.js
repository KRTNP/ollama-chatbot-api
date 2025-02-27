import express from 'express';
import cors from 'cors';
import chatRoutes from './routes/chatRoutes';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api/chat', chatRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});