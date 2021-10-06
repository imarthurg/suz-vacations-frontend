import create from 'zustand';
import { menuItems } from '../config/constants';

const INITIAL_STATE = {
  menuItems: menuItems,
  selectedModule: null,
};

const useDashboardConfigStore = create((set, get) => ({
  ...INITIAL_STATE,
  navigateToModule: (modulePath: string) => {
    const { menuItems }: any = get();
    const moduleToGo = menuItems.find(({ path }: any) => path === modulePath);
    set({ selectedModule: { ...moduleToGo } });
  },
  reset: () => {
    set({ ...INITIAL_STATE });
  },
}));

export default useDashboardConfigStore;
