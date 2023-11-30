import { client } from '../index';
import express, { Router } from 'express';
import { query } from '../queries';

const taskRouter: Router = express.Router();

taskRouter.post('/create-task', async (req, res) => {
  const { taskName, taskDescription, taskPriority, taskCategory, createdBy } =
    req.body;

  const values = [
    taskName,
    taskDescription,
    taskPriority,
    taskCategory,
    createdBy,
  ];
  try {
    const response = await client.query(query.tasks.createTask.text, values);
    res.json(response.rows);
  } catch (err) {
    res.json(err);
  }
});

export default taskRouter;
