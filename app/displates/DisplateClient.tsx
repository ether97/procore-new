"use client";

import Modal from "../components/Modal";
import useModal from "../hooks/useModal";

const DisplateClient = () => {
  const modal = useModal();
  return (
    <div className="w-full h-full ">
      {modal.isOpen && <Modal title="Title" subtitle="Subtitle" />}
    </div>
  );
};

export default DisplateClient;
