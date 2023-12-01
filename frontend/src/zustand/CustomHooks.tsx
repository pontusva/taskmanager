import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface TaskListState {
  activeTaskCreation: boolean;
  activeTaskCreationChange: () => any;
}

type Userid = {
  userid: number | null;
  updateUserId: (userid: number | null) => void;
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

export const userIdStore = create<Userid>()(
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
