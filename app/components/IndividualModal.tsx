"use client";

import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

import Image from "next/image";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { EFrame, ESize } from "../types/types";

const frames = Object.values(EFrame) as (keyof typeof EFrame)[];

const sizes = Object.values(ESize) as (keyof typeof ESize)[];

type FormInputs = {
  frame: string;
  size: number;
  finish: string;
};

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const TestModal = () => {
  const { register, getValues } = useForm<FormInputs>();

  const size = getValues("size");
  const currentDisplate = useSelector(
    (state: RootState) => state.displate.currentDisplate
  );
  return (
    <>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal p-0">
        <div className="modal-box relative p-[20px] w-auto">
          <div className="font-bold text-xl text-center">
            {currentDisplate.category}
          </div>
          <p className="py-4 text-center text-zinc-400">
            {currentDisplate.title}
          </p>
          <div className="modal-action absolute top-[0px] right-[30px]">
            <label htmlFor="my-modal">
              <IoMdCloseCircleOutline
                size={24}
                className="hover:scale-110 transition duration-200 hover:text-rose-400 cursor-pointer"
              />
            </label>
          </div>
          <div className="flex flex-row items-start gap-5">
            <Image
              height={size | 300}
              width={250}
              className="rounded-md "
              alt={currentDisplate.title || ""}
              src={`/images/${currentDisplate.category}/${currentDisplate.img}.jpg`}
              style={{ objectFit: "cover" }}
            />
            <div className="flex flex-row items-start">
              <div className="flex flex-col items-start">
                <h2 className="mx-auto text-md font-semibold">Frame</h2>
                {frames.map((frame) => (
                  <div className="form-control">
                    <label className="label cursor-pointer w-[200px] flex justify-between">
                      <span className="label-text text-zinc-400">{frame}</span>
                      <input
                        type="radio"
                        name="radio-10"
                        className={`radio checked:bg-red-500`}
                        checked
                      />
                    </label>
                  </div>
                ))}
                <input
                  type="range"
                  id="size"
                  min="100"
                  max="300"
                  className="range"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestModal;
