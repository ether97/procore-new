"use client";

import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

import Image from "next/image";
import { IoMdCloseCircleOutline } from "react-icons/io";

const TestModal = () => {
  const currentDisplate = useSelector(
    (state: RootState) => state.displate.currentDisplate
  );
  return (
    <>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal p-0">
        <div className="modal-box relative p-[20px]">
          <h3 className="font-bold text-lg">{currentDisplate.category}</h3>
          <p className="py-4">{currentDisplate.title}</p>
          <div className="modal-action absolute top-[0px] right-[30px]">
            <label htmlFor="my-modal">
              <IoMdCloseCircleOutline
                size={24}
                className="hover:scale-110 transition duration-200 hover:text-rose-400 cursor-pointer"
              />
            </label>
          </div>
          <Image
            height={300}
            width={250}
            className="rounded-md "
            alt={currentDisplate.title || ""}
            src={`/images/${currentDisplate.category}/${currentDisplate.img}.jpg`}
            style={{ objectFit: "cover" }}
          />
          <div className="flex flex-col"></div>
        </div>
      </div>
    </>
  );
};

export default TestModal;
