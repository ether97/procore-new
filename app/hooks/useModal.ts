import { create } from "zustand";

interface ModalStore {
  isOpen: boolean;
  onClose: () => void;
  onOpen: (title: string) => void;
  title: string;
}

const useModal = create<ModalStore>((set) => ({
  title: "",
  isOpen: true,
  onClose: () => set({ isOpen: false }),
  onOpen: (title) => set({ title: title, isOpen: true }),
}));

export default useModal;
