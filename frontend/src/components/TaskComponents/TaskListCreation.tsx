import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import Select from 'react-select';

type taskPriority = 'normal' | 'high' | 'urgent';
type category = 'bug' | 'update' | 'feature';
interface Inputs {
  taskName: string;
  taskPriority: taskPriority;
  assign: string;
  category: category;
  description: string;
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

  const onSubmit: SubmitHandler<Inputs> = async data => {
    console.log(data);
    reset();
  };
  return (
    <div className="mt-40">
      <div className="lg:max-w-lg w-screen lg:ms-auto mx-auto text-center ">
        <div className="py-8 px-7  rounded-md bg-white">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
              <div className="flex flex-col">
                <label
                  className="text-left  font-normal text-gray-400 text-lg"
                  htmlFor="">
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
                        options={
                          [
                            { value: 'normal', label: 'Normal' },
                            { value: 'high', label: 'High' },
                            { value: 'urgent', label: 'Urgent' },
                          ] as any
                        }
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
                        options={
                          [
                            { value: 'bug', label: 'Bug' },
                            { value: 'update', label: 'Update' },
                            { value: 'feature', label: 'Feature' },
                          ] as any
                        }
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
                  {...register('description', { required: true })}
                  name="description"
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
    </div>
  );
};

export default TaskListCreation;
