import { create } from "zustand";

interface DisplateModalStore {
  isOpen: boolean;
  onClose: () => void;
  onOpen: (title: string) => void;
  title: string;
}

const useDisplateModal = create<DisplateModalStore>((set) => ({
  title: "",
  isOpen: false,
  onClose: () => set({ isOpen: false }),
  onOpen: (title) => set({ title: title, isOpen: true }),
}));

export default useDisplateModal;
