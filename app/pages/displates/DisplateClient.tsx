"use client";

import Modal from "../../components/Modal";
import useModal from "../../hooks/useModal";

const DisplateClient = () => {
  const modal = useModal();
  return (
    <div className="w-full h-full ">
      <Modal title="Title" subtitle="Subtitle" isOpen={modal.isOpen} />
    </div>
  );
};

export default DisplateClient;
