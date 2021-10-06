import create from 'zustand';
import useDashboardConfigStore from './dashboard-config.store';

const INITIAL_STATE = {
  logged: false,
};

const useAuthStore = create((set) => ({
  ...INITIAL_STATE,
  login: () => {
    set({ logged: true });
  },
  logout: () => {
    set({ logged: false });
    useDashboardConfigStore.getState().reset();
  },
}));

export default useAuthStore;
