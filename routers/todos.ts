import { Router } from 'express';
import CreateTodoDto from '../dtos/create-todo';

const router = Router();

router.get('/', (req, res) => {
  res.send('todos');
})

router.post('/', (req, res) => {
  const { title } = req.body as CreateTodoDto;
  res.json(title);
})

export default router;
