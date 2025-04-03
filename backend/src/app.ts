import express from 'express';
import userRouter from './routes/userRoutes';
import cors from 'cors';

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());

app.get('/', (_req, res) => {
  res.json({ response: 'API is running...' });
})
app.use('/api/users', userRouter);

export { app };