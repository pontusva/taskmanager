import TaskList from '../components/TaskComponents/TaskList';
import TaskListLayout from '../components/TaskComponents/TaskListLayout';
import TaskListNavigation from '../components/TaskComponents/TaskListNavigation';
import TaskListCreation from '../components/TaskComponents/TaskListCreation';
import { useTaskListStore } from '../zustand/CustomHooks';

const TaskManagement = () => {
  const activeTaskCreation = useTaskListStore(
    state => state.activeTaskCreation
  );
  const setActiveTaskCreation = useTaskListStore(
    state => state.activeTaskCreationChange
  );

  return (
    <>
      <TaskListLayout>
        <div className="px-7">
          <TaskListNavigation
            setActiveTaskCreation={setActiveTaskCreation}
            activeTaskCreation={activeTaskCreation}
          />
        </div>
        {!activeTaskCreation && <TaskList />}
        {activeTaskCreation && <TaskListCreation />}
      </TaskListLayout>
    </>
  );
};

export default TaskManagement;
