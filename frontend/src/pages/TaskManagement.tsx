import TaskList from '../components/TaskComponents/TaskList';
import TaskListLayout from '../components/TaskComponents/TaskListLayout';
import TaskListNavigation from '../components/TaskComponents/TaskListNavigation';
import TaskListCreation from '../components/TaskComponents/TaskListCreation';
import { useTaskListStore, userIdStore } from '../zustand/CustomHooks';
import { useState } from 'react';
const TaskManagement = () => {
  const [activeTaskTab, setActiveTaskTab] = useState(false);

  const activeTaskCreation = useTaskListStore(
    state => state.activeTaskCreation
  );
  const setActiveTaskCreation = useTaskListStore(
    state => state.activeTaskCreationChange
  );

  const userid = userIdStore(state => state.userid);

  return (
    <>
      <TaskListLayout>
        <div className="px-7">
          <TaskListNavigation
            setActiveTaskCreation={setActiveTaskCreation}
            setActiveTaskTab={setActiveTaskTab}
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
