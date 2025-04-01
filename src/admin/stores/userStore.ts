import { create } from 'zustand';

interface UserState {
  userId: string;
  setUserId: (userId: string) => void;
}

export const useUserStore = create<UserState>(set => ({
  // TODO: 테스트 코드 삭제
  userId: 'admin',
  setUserId: (userId: string) => set({ userId }),
}));
