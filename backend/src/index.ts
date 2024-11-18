import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Rotas
app.get('/', (req: Request, res: Response) => {
  res.send('API Backend em TypeScript e Express');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});