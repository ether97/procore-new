"use client";

import Modal from "./Modal";

import useModal from "../hooks/useModal";

const DisplateModal = () => {
  const modal = useModal();
  return (
    <Modal
      title={modal.title}
      subtitle="Collect them all!"
      isOpen={modal.isOpen}
    />
  );
};

export default DisplateModal;
