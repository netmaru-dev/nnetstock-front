import { create } from 'zustand';
import { MENU_ITEMS } from '@/admin/constants/menu';

type MenuPath = (typeof MENU_ITEMS)[number]['path'];

interface MenuState {
  activeMenuPath: MenuPath | null;
  setActiveMenuPath: (path: MenuPath) => void;
  initializeFromUrl: (path: string) => void;
}

const isValidMenuPath = (path: string | null): path is MenuPath => {
  if (!path) return false;
  return MENU_ITEMS.some(item => item.path === path);
};

export const useMenuStore = create<MenuState>(set => ({
  activeMenuPath: null,
  setActiveMenuPath: path => set({ activeMenuPath: path }),
  initializeFromUrl: path => {
    try {
      const pathSegments = path.split('/').filter(Boolean);
      const currentPath = pathSegments[1] || null;

      if (isValidMenuPath(currentPath)) {
        set({ activeMenuPath: currentPath });
      } else {
        // 유효하지 않은 경로인 경우 기본값 설정
        set({ activeMenuPath: 'home' });
      }
    } catch (error) {
      console.error('Failed to initialize menu from URL:', error);
      set({ activeMenuPath: 'home' });
    }
  },
}));
