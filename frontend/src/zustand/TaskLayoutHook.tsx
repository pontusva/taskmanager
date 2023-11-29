import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface BearState {
  activeTaskCreation: boolean;
  activeTaskCreationChange: () => void;
}

export const useBearStore = create<BearState>()(
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
