"use client";

import useModal from "../hooks/useModal";
import { IoMdClose } from "react-icons/io";

import Image from "next/image";

import axios from "axios";
import { useEffect, useState } from "react";
import { DisplateInfo } from "@prisma/client";
import { toast } from "react-hot-toast";

interface ModalProps {
  title: string;
  subtitle: string;
  isOpen: boolean;
}

const Modal: React.FC<ModalProps> = ({ title, subtitle, isOpen }) => {
  const [data, setData] = useState<DisplateInfo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const modal = useModal();

  useEffect(() => {
    async function getDisplates() {
      setIsLoading(true);
      await axios
        .get<DisplateInfo[]>(`/api/displate/${title}`)
        .then((res) => {
          setData(res.data);
          console.log("fetched again!");
        })
        .catch(() => {
          toast.error("something happened!");
        })
        .finally(() => {
          setIsLoading(false);
        });
    }

    if (isOpen) {
      getDisplates();
    }
  }, [title, isOpen]);

  let content = [];

  if (isLoading) {
    content.push(<div>Loading...</div>);
  } else {
    {
      data.map((displate) => {
        content.push(
          <Image
            height={300}
            width={250}
            alt={displate.title}
            src={`/images/${displate.category}/${displate.img}.jpg`}
            style={{ objectFit: "cover" }}
          />
        );
      });
    }
  }

  if (!isOpen) return null;

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
            <div className="grid grid-cols-4 gap-2 p-5">{content}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
