import express from 'express';
import chatRoutes from './routes/chatRoutes';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/chat', chatRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});