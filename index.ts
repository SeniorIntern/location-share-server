import express from 'express';
import todosRouter from './routers/todos';

const app = express();

app.use(express.json());
app.use('/todos', todosRouter);

app.listen(8000, () => console.log('Server started'));
