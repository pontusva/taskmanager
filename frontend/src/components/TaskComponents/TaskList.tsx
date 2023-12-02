import { useEffect } from 'react';
import { taskListStore } from '../../zustand/CustomHooks';
import { useState } from 'react';

const TaskList = () => {
  const taskList = taskListStore(state => state.taskList);
  const [tasks, setTasks] = useState([]);

  const handleGetTasks = async () => {
    const response = await fetch('http://localhost:8000/tasks/get-tasks');
    const result = await response.json();

    setTasks(result);
  };

  useEffect(() => {
    taskList && handleGetTasks();
  }, [taskList]);
  console.log(tasks);
  return (
    <>
      <body className="antialiased relative w-screen   bg-slate-200 text-slate-700 ">
        <div className="   p-10 bg-slate-50 w-full  rounded-xl shadow shadow-slate-300">
          <div id="tasks" className="my-5">
            <div
              id="task"
              className="flex items-center border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent">
              <div className="flex flex-col">
                {tasks.map(task => {
                  return (
                    <div className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 text-slate-500">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      <div className="flex w-80 justify-between">
                        <div className="text-slate-500 line-through">
                          {task.taskname}
                        </div>
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-4 h-4 text-slate-500 hover:text-slate-700 hover:cursor-pointer">
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <p className="text-xs text-slate-500 text-center">
            Last updated 12 minutes ago
          </p>
        </div>
      </body>
    </>
  );
};

export default TaskList;
