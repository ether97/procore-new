"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";

import { useState } from "react";

import Image from "next/image";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { BsFillCartPlusFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { EFrame, ESize } from "../types/types";

const frames = Object.values(EFrame) as (keyof typeof EFrame)[];

const sizes = Object.values(ESize) as (keyof typeof ESize)[];

type FormInputs = {
  frame: string;
  size: number;
  finish: string;
};

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { setSpecs } from "../redux/features/displate/displateSlice";

const IndividualModal = () => {
  const dispatch = useDispatch();
  const [size, setSize] = useState<any>(250);
  const { register, getValues } = useForm<FormInputs>();
  const currentSize = useSelector(
    (state: RootState) => state.displate.specs.size
  );
  const currentPrice = useSelector(
    (state: RootState) => state.displate.specs.price
  );
  const currentDisplate = useSelector(
    (state: RootState) => state.displate.currentDisplate
  );
  return (
    <>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal p-0">
        <div className="modal-box relative p-[20px] w-[800px] h-[600px]">
          <div className="font-bold text-xl text-center">
            {currentDisplate.category}
          </div>
          <p className="pb-3 text-center text-zinc-400">
            {currentDisplate.title}
          </p>
          <div className="modal-action absolute top-[0px] right-[24px]">
            <label htmlFor="my-modal">
              <IoMdCloseCircleOutline
                size={24}
                className="hover:scale-125 transition text-zinc-400 duration-200 hover:text-rose-600 cursor-pointer"
              />
            </label>
          </div>
          <div className="modal-action absolute top-[0px] left-[24px]">
            <label htmlFor="my-modal">
              <AiFillHeart
                size={24}
                className="hover:scale-125 transition text-rose-600 duration-200 cursor-pointer"
              />
            </label>
          </div>
          <div className="flex flex-row items-start gap-7">
            <div className="w-[250px]">
              <Image
                height={currentSize}
                width={currentSize}
                className="rounded-md"
                alt={currentDisplate.title || ""}
                src={`/images/${currentDisplate.category}/${currentDisplate.img}.jpg`}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="flex flex-col items-start w-[180px]">
              <h2 className="mx-auto text-md font-bold">Frame</h2>
              {frames.map((frame) => (
                <div className="form-control w-full">
                  <label className="label cursor-pointer w-full flex justify-between">
                    <span className="label-text text-zinc-600">{frame}</span>
                    <input
                      type="radio"
                      name={frame}
                      className={`radio checked:bg-red-500`}
                      checked
                      onChange={(e) =>
                        dispatch(setSpecs({ frame: e.target.name }))
                      }
                    />
                  </label>
                </div>
              ))}
              <div className="my-[10px] flex flex-col items-center justify-center w-full ">
                <h2 className="mx-auto text-md font-bold">Size</h2>

                <input
                  type="range"
                  min="150"
                  max="250"
                  name="size"
                  className="range my-[10px]"
                  onChange={(e) =>
                    dispatch(setSpecs({ size: e.target.valueAsNumber }))
                  }
                />
              </div>
              <div className="flex flex-row w-full justify-between mb-[20px]">
                <h2 className="text-md font-bold">Finish</h2>
                <div className="flex flex-row items-center w-1/2 justify-between">
                  <input
                    type="radio"
                    name="radio-10"
                    className={`radio checked:bg-gradient-to-r from-white`}
                    checked
                    onChange={(e) => dispatch(setSpecs({ frame: "Gloss" }))}
                  />
                  <input
                    type="radio"
                    name="radio-10"
                    className={`radio checked:black`}
                    checked
                    onChange={(e) => dispatch(setSpecs({ frame: "Matte" }))}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center mt-[10px]">
            <button className="rounded-md w-[100px] border-black flex flex-row items-center justify-between">
              Add to Cart ${currentPrice}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndividualModal;
