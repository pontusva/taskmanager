import { Client } from 'pg';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import router from './db/baseUserActions';
import taskRouter from './db/tasks';

const PORT: number = 8000;

dotenv.config();

const app = express();
app.use(express.json());

export const client = new Client({
  connectionString: process.env.PGURI,
});

client.connect();

app.use(cors());
app.use(express.json());
app.use('/user', router);
app.use('/tasks', taskRouter);
app.listen(PORT, () => {
  console.log(`Webbtjänsten kan nu ta emot anrop @ localhost:${PORT}.`);
});
