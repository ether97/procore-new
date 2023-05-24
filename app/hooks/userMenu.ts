import { create } from "zustand";

interface UserMenuStore {
  isOpen: boolean;
  onToggle: () => void;
}

const useMenu = create<UserMenuStore>((set) => ({
  isOpen: false,
  onToggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useMenu;
