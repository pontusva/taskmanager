import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { useTaskListStore } from '../../zustand/CustomHooks';
import Select from 'react-select';

type taskPriority = 'normal' | 'high' | 'urgent' | 'value';
type category = 'bug' | 'update' | 'feature';
interface Inputs {
  taskName: string;
  taskPriority: {
    value: taskPriority;
    label: string;
  };
  assign: string;
  category: {
    value: category;
    label: string;
  };
  taskDescription: string;
  createdBy: string;
}

const TaskListCreation = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    mode: 'onChange',
  });
  const setActiveTaskCreation = useTaskListStore(
    state => state.activeTaskCreationChange
  );
  const onSubmit: SubmitHandler<Inputs> = async data => {
    const { taskName, taskPriority, category, taskDescription } = data;
    console.log({
      taskName,
      taskPriority: data.taskPriority.value,
      category,
      taskDescription,
    });
    const response = await fetch('http://localhost:8000/tasks/create-task', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        taskName,
        taskPriority: taskPriority.value,
        taskCategory: category.value,
        taskDescription,
        createdBy: '60f0b0b3e6b3c2a8c8f1b3b5',
      }),
    });
    await response.json();
    reset();
    setActiveTaskCreation();
  };
  return (
    <div className="lg:max-w-lg w-screen lg:ms-auto mx-auto text-center ">
      <div className="  px-7  rounded-md bg-white">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
            <div className="flex flex-col">
              <label className="text-left  font-normal text-gray-400 text-lg">
                Task name
              </label>
              <input
                {...register('taskName', { required: true })}
                type="text"
                name="taskName"
                placeholder="task name *"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700 "
              />
              {errors.taskName && (
                <span className="text-red-400 absolute right-10">
                  This field is required
                </span>
              )}
            </div>

            <div className="md:col-span-2">
              <Controller
                name="taskPriority"
                rules={{
                  required: true,
                }}
                control={control}
                render={({ field }) => (
                  <div className="flex flex-col">
                    <label className="text-left  font-normal text-gray-400 text-lg">
                      Priority
                    </label>
                    <Select
                      {...field}
                      options={[
                        { value: 'normal', label: 'Normal' },
                        { value: 'high', label: 'High' },
                        { value: 'urgent', label: 'Urgent' },
                      ]}
                    />
                    {errors.taskPriority && (
                      <span className="text-red-400 absolute right-10">
                        This field is required
                      </span>
                    )}
                  </div>
                )}
              />

              <Controller
                name="category"
                rules={{
                  required: true,
                }}
                control={control}
                render={({ field }) => (
                  <div className="flex flex-col">
                    <label className="text-left  font-normal text-gray-400 text-lg">
                      Category
                    </label>
                    <Select
                      {...field}
                      options={[
                        { value: 'bug', label: 'Bug' },
                        { value: 'update', label: 'Update' },
                        { value: 'feature', label: 'Feature' },
                      ]}
                    />
                    {errors.category && (
                      <span className="text-red-400 absolute right-10">
                        This field is required
                      </span>
                    )}
                  </div>
                )}
              />
            </div>

            <div className="md:col-span-2">
              <textarea
                {...register('taskDescription', { required: true })}
                name="taskDescription"
                rows={4}
                cols={1}
                placeholder="Enter task description"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700"></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="w-full mt-6 mb-3 bg-indigo-100 rounded-lg px-4 py-2 text-lg text-gray-800 tracking-wide font-semibold font-sans">
            add new task
          </button>
        </form>
      </div>
    </div>
  );
};

export default TaskListCreation;
