import { client } from '../index';
import express, { Router } from 'express';
import { query } from '../queries';
import { QueryResult, QueryResultRow } from 'pg';

const taskRouter: Router = express.Router();

taskRouter.get('/get-tasks', async (req, res) => {
  try {
    const response: QueryResult<QueryResultRow> = await client.query(
      query.tasks.getTasks.text
    );
    res.json(response.rows);
  } catch (err) {
    res.json(err);
  }
});

taskRouter.post('/create-task', async (req, res) => {
  const { taskName, taskDescription, taskPriority, taskCategory, createdBy } =
    req.body as {
      taskName: string;
      taskDescription: string;
      taskPriority: string;
      taskCategory: string;
      createdBy: string;
    };

  const values = [
    taskName,
    taskDescription,
    taskPriority,
    taskCategory,
    createdBy,
  ];
  try {
    const response: QueryResult<QueryResultRow> = await client.query(
      query.tasks.createTask.text,
      values
    );
    res.json(response.rows);
  } catch (err) {
    res.json(err);
  }
});

taskRouter.put('/update-task', async (req, res) => {
  const { taskStatus, taskId } = req.body as {
    taskStatus: string;
    taskId: string;
  };

  const values = [taskStatus, taskId];
  try {
    const response: QueryResult<QueryResultRow> = await client.query(
      query.tasks.updateTaskStatus.text,
      values
    );
    res.json(response.rows);
  } catch (err) {
    res.json(err);
  }
});

taskRouter.delete('/delete-task', async (req, res) => {
  const { taskId } = req.body as { taskId: string };

  const values = [taskId];
  try {
    const response: QueryResult<QueryResultRow> = await client.query(
      query.tasks.deleteTask.text,
      values
    );
    res.json(response.rows);
  } catch (err) {
    res.json(err);
  }
});

export default taskRouter;
