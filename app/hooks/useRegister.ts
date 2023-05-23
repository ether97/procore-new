import { create } from "zustand";

interface RegisterStore {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

const useRegister = create<RegisterStore>((set) => ({
  isOpen: false,
  onClose: () => set({ isOpen: false }),
  onOpen: () => set({ isOpen: true }),
}));

export default useRegister;
