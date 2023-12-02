import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface TaskListState {
  activeTaskCreation: boolean;
  activeTaskCreationChange: () => any;
}

type UserId = {
  userid: number | null;
  updateUserId: (userid: number | null) => void;
  removeUserId: () => void;
};

type TaskList = {
  taskList: boolean;
  updateTaskListState: () => void;
};

export const useTaskListStore = create<TaskListState>()(
  persist(
    set => ({
      activeTaskCreation: false,
      activeTaskCreationChange: () =>
        set(state => ({
          activeTaskCreation: !state.activeTaskCreation,
        })),
    }),
    {
      name: 'bear-storage',
    }
  )
);

export const userIdStore = create<UserId>()(
  persist(
    set => ({
      userid: null,
      updateUserId: userid => set(() => ({ userid })),
      removeUserId: () => set(() => ({ userid: null })),
    }),
    {
      name: 'userid-storage',
    }
  )
);

export const taskListStore = create<TaskList>()(set => ({
  taskList: false,
  updateTaskListState: () =>
    set(state => ({
      taskList: !state.taskList,
    })),
}));
