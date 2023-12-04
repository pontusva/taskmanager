import { useEffect } from 'react';
import { taskListArrayStore } from '../../zustand/CustomHooks';
import clsx from 'clsx';
import { useShallow } from 'zustand/react/shallow';

const TaskList = () => {
  const taskListArray = taskListArrayStore(state => state.updateTaskListArray);

  const taskListComplete = taskListArrayStore(
    useShallow(task => task.tasks.filter(task => task.taskstatus === 'true'))
  );

  const taskListNotComplete = taskListArrayStore(
    useShallow(task => task.tasks.filter(task => task.taskstatus !== 'true'))
  );

  const handleGetTasks = async () => {
    const response = await fetch('http://localhost:8000/tasks/get-tasks');
    const result = await response.json();

    taskListArray(result);
  };

  const handleTaskDone = async (taskid?: number, done?: string) => {
    const response = await fetch('http://localhost:8000/tasks/update-task', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        taskId: taskid,
        taskStatus: done === 'true' ? false : true,
      }),
    });
    await response.json();
    handleGetTasks();
  };

  const handleTaskDelete = async (taskid?: number) => {
    console.log(taskid);
    const response = await fetch('http://localhost:8000/tasks/delete-task', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        taskId: taskid,
      }),
    });
    const result = await response.json();
    console.log(result);
    handleGetTasks();
  };

  useEffect(() => {
    handleGetTasks();
  }, []);

  return (
    <div className="antialiased relative   bg-slate-200 text-slate-700 ">
      <div className=" px-10 bg-slate-50  rounded-xl shadow shadow-slate-300">
        <div id="tasks" className="my-5">
          Complete
          <div
            id="task"
            className="flex items-center border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent">
            <div className="flex flex-col ">
              {taskListComplete.map(task => {
                const taskId = task.taskid;
                return (
                  <div key={task.taskid}>
                    <div className="flex ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 text-slate-500">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      {/* } */}

                      <div className="flex w-72 justify-between">
                        <div
                          className={clsx(
                            task.taskstatus === 'true' && 'line-through',
                            'text-slate-500 '
                          )}>
                          <p
                            className="cursor-pointer"
                            onClick={() => {
                              handleTaskDone(taskId, task.taskstatus);
                            }}>
                            {task.taskname}
                          </p>
                        </div>
                        <div
                          className="cursor-pointer"
                          onClick={() => handleTaskDelete(taskId)}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-4 h-4 text-slate-500 hover:text-slate-700 hover:cursor-pointer">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div id="tasks" className="my-5">
          In Progress
          <div
            id="task"
            className="flex  border items-center border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent">
            <div className="flex flex-col">
              {taskListNotComplete.map(task => {
                const taskId = task.taskid;
                return (
                  <div key={task.taskid}>
                    <div className="flex w-full">
                      {/* {task.taskstatus !== 'true' && ( */}
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          onClick={() => handleTaskDone(task.taskid)}
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6 text-slate-500 hover:text-indigo-600 hover:cursor-pointer">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <div className="flex  w-72 justify-between">
                          <div
                            className={clsx(
                              task.taskstatus === 'true' && 'line-through',
                              'text-slate-500 '
                            )}>
                            <p
                              className="cursor-pointer"
                              onClick={() => {
                                // setTaskIsDone(!taskIsDone),
                                handleTaskDone(taskId);
                              }}>
                              {task.taskname}
                            </p>
                          </div>
                          <div
                            className=""
                            onClick={() => handleTaskDelete(taskId)}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-4 h-4 cursor-pointer text-slate-500 hover:text-slate-700 hover:cursor-pointer">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                              />
                            </svg>
                          </div>
                        </div>
                      </>
                      {/* )} */}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
