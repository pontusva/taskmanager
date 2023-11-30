import { Dispatch, SetStateAction } from 'react';
import ReactLogo from '../../../assets/task-svgrepo-com.svg';
interface Props {
  setActiveTaskTab: Dispatch<SetStateAction<boolean>>;
  setActiveTaskCreation: () => void;
  activeTaskCreation: boolean;
}

const TaskListNavigation = ({
  setActiveTaskTab,
  setActiveTaskCreation,
  activeTaskCreation,
}: Props) => {
  return (
    <>
      <div className="flex space-x-2 items-center">
        <div className="text-center">
          <h1 className="text-3xl font-medium">Tasks list</h1>
          <div className="absolute">
            {activeTaskCreation ? (
              <p className="text-slate-500">create a new task</p>
            ) : (
              <p className="text-slate-500">
                Hello, here are your latest tasks
              </p>
            )}
          </div>
        </div>
        <div className="inline-flex space-x-2 justify-center items-center">
          {activeTaskCreation ? (
            <img
              onClick={() => setActiveTaskCreation()}
              className="w-12 h-12  "
              src={ReactLogo}
            />
          ) : (
            <a
              href="#"
              onClick={() => setActiveTaskCreation()}
              className="p-2  rounded-md inline-flex space-x-1 items-center hover:bg-slate-200">
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

          <a
            href="#"
            onClick={() => setActiveTaskTab(false)}
            className="p-2 border border-slate-200 rounded-md inline-flex space-x-1 items-center hover:bg-slate-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              className="w-8 h-8"
              width="100"
              height="100"
              viewBox="0 0 30 30">
              <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
            </svg>
            <span className="text-sm hidden md:block">Latest</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default TaskListNavigation;
