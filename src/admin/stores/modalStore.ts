// 공통 모달
import { create } from 'zustand';

interface ModalState {
  open: boolean;
  title: string;
  description: string;
  openModal: (title: string, description: string) => void;
  closeModal: () => void;
}
export const useModalStore = create<ModalState>(set => ({
  open: false,
  title: '',
  description: '',
  openModal: (title: string, description: string) => set({ open: true, title, description }),
  closeModal: () => set({ open: false, title: '', description: '' }),
}));
