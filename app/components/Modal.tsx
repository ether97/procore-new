"use client";

import useModal from "../hooks/useModal";
import { IoMdClose } from "react-icons/io";

interface ModalProps {
  title: string;
  subtitle: string;
  isOpen: boolean;
}

const Modal: React.FC<ModalProps> = ({ title, subtitle, isOpen }) => {
  const modal = useModal();

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="
          justify-center 
          items-center 
          flex 
          overflow-x-hidden 
          overflow-y-auto 
          fixed 
          inset-0 
          z-50 
          outline-none 
          focus:outline-none
          bg-neutral-800/70
    "
    >
      <div
        className="
          relative 
          w-full
          md:w-4/6
          lg:w-3/6
          xl:w-2/5
          my-6
          mx-auto 
          h-full 
          lg:h-auto
          md:h-auto
      "
      >
        <div
          className={`
        translate
        duration-300
        h-full
        ${isOpen ? "translate-y-0" : "translate-y-full"}
        ${isOpen ? "opacity-100" : "opacity-0"}
        `}
        >
          <div
            className="
              translate
              h-full
              lg:h-auto
              md:h-auto
              border-0 
              rounded-lg 
              shadow-lg 
              relative 
              flex 
              flex-col 
              w-full 
              bg-white 
              outline-none 
              focus:outline-none
                
            "
          >
            <div
              className="
              flex 
                items-center 
                p-6
                rounded-t
                justify-center
                relative
                border-b-[1px]"
            >
              <button
                className="absolute left-5 top-5"
                onClick={() => modal.onClose()}
              >
                <IoMdClose />
              </button>
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="text-lg text-black font-semibold">
                  {title} Displates
                </div>
                <div className="text-zinc-400 text-sm">{subtitle}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
