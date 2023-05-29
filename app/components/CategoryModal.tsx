"use client";

import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

import Image from "next/image";
import { IoMdCloseCircleOutline } from "react-icons/io";

const CategoryModal = () => {
  const displatePerCategory = useSelector(
    (state: RootState) => state.displate.displateCategories
  );
  const category = useSelector((state: RootState) => state.displate.category);
  return (
    <>
      <input type="checkbox" id="category-modal" className="modal-toggle" />
      <div className="modal p-0">
        <div className="modal-box relative p-[20px]">
          <h3 className="font-bold text-lg text-center">{category}</h3>
          <p className="text-sm text-zinc-500 text-center">Collect them all!</p>
          <div className="modal-action absolute top-[0px] right-[30px]">
            <label htmlFor="category-modal">
              <IoMdCloseCircleOutline
                size={24}
                className="hover:scale-110 transition duration-200 hover:text-rose-400 cursor-pointer"
              />
            </label>
          </div>
          <div className="flex flex-row gap-5 items-center justify-center mt-[20px]">
            {displatePerCategory.map((displate) => (
              <Image
                height={150}
                width={100}
                className="rounded-md "
                alt={displate.category || ""}
                src={`/images/${displate.category}/${displate.img}.jpg`}
                style={{ objectFit: "cover" }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryModal;
