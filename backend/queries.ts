export const query = {
  registerUserPlainTextPassword: {
    text: 'INSERT INTO Users (username, email, password, firstName, lastName) VALUES ($1, $2, $3, $4, $5) RETURNING *;',
  },
  loginUser: {
    text: 'SELECT * FROM Users WHERE Users.username = $1 AND Users.password = $2;',
  },
  tasks: {
    createTask: {
      text: 'INSERT INTO Task (taskname, taskdescription, taskpriority, category, createdby) VALUES ($1, $2, $3, $4, $5) RETURNING *;',
    },
    getTasks: {
      text: 'SELECT * FROM Tasks WHERE Tasks.taskOwner = $1;',
    },
    updateTask: {
      text: 'UPDATE Tasks SET taskName = $1, taskDescription = $2, taskDeadline = $3, taskPriority = $4, taskStatus = $5 WHERE Tasks.taskId = $6 RETURNING *;',
    },
    deleteTask: {
      text: 'DELETE FROM Tasks WHERE Tasks.taskId = $1 RETURNING *;',
    },
  },
};
