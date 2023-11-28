export const query = {
  registerUserPlainTextPassword: {
    text: 'INSERT INTO Users (username, email, password, firstName, lastName) VALUES ($1, $2, $3, $4, $5) RETURNING *;',
  },
  loginUser: {
    text: 'SELECT * FROM Users WHERE Users.username = $1 AND Users.password = $2;',
  },
};
