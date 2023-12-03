import ReactLogo from '../../../assets/task-svgrepo-com.svg';
import { taskListStore } from '../../zustand/CustomHooks';
interface Props {
  setActiveTaskCreation: () => void;
  activeTaskCreation: boolean;
}

const TaskListNavigation = ({
  setActiveTaskCreation,
  activeTaskCreation,
}: Props) => {
  const toggleTaskList = taskListStore(state => state.updateTaskListState);
  return (
    <>
      <div className="flex space-x-2 items-center">
        <div className="">
          <h1 className="text-3xl font-medium">Tasks list</h1>
          <div className="">
            {activeTaskCreation ? (
              <p className="text-slate-500 ">create a new task</p>
            ) : (
              <p className="text-slate-500 ">See tasks</p>
            )}
          </div>
        </div>
        <div className="inline-flex space-x-2 justify-center items-center">
          {activeTaskCreation ? (
            <img
              onClick={() => setActiveTaskCreation()}
              className="w-12 h-12 hover:cursor-pointer"
              src={ReactLogo}
            />
          ) : (
            <a
              href="#"
              onClick={() => {
                setActiveTaskCreation();
                toggleTaskList();
              }}
              className="p-2 rounded-md inline-flex space-x-1 items-center hover:bg-slate-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                className="w-8 h-8"
                viewBox="0 0 50 50">
                <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z"></path>
              </svg>
              <span className="text-sm hidden md:block">Latest</span>
            </a>
          )}
        </div>
      </div>
    </>
  );
};

export default TaskListNavigation;
