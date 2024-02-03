import express from 'express';
import locationRouter from './routers/location';
import mongoose from 'mongoose';
import { config } from 'dotenv';
import cors from 'cors';

const app = express();
config()

mongoose.connect(process.env.URI!)
  .then(() => console.log('MongoDB connection established'))
  .catch(err => console.log(err.message))

app.use(express.json());
app.use(cors());
app.use('/api/location', locationRouter);

const port = process.env.PORT;
app.listen(port, () => console.log(`connected on port: ${port}`));
