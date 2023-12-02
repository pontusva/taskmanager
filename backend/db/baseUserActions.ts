import { client } from '../index';
import express, { Router } from 'express';
import { LoginUser, RegisterUser, User } from '../types/UserActionTypes';
import { query } from '../queries';
import { QueryResult, QueryResultRow } from 'pg';

const router: Router = express.Router();

router.post('/plain-text-password-register', async (req, res) => {
  const { username, email, password, firstName, lastName }: RegisterUser =
    req.body;

  const values = [username, email, password, firstName, lastName];
  try {
    const response: QueryResult<QueryResultRow> = await client.query(
      query.registerUserPlainTextPassword.text,
      values
    );
    res.json(response.rows);
  } catch (err) {
    res.json(err);
  }
});

router.post('/login', async (req, res) => {
  const { username, password }: LoginUser = req.body;

  const values = [username, password];
  try {
    const response = await client.query(query.loginUser.text, values);
    const userResponseRow: User<QueryResult<QueryResultRow>> = response.rows[0];

    if (response.rows.length > 0 && userResponseRow.password === password) {
      res.status(200).json({
        userResponseRow: {
          userid: userResponseRow.userid,
          username: userResponseRow.username,
          email: userResponseRow.email,
          firstname: userResponseRow.firstname,
          lastname: userResponseRow.lastname,
        },
        success: 'Login successful',
      });
    } else {
      res.status(401).json({ error: 'Invalid password' });
    }
  } catch (err) {
    res.json(err);
  }
});

router.post('/edit-profile', async (req, res) => {});

export default router;
