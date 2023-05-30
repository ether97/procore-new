"use client";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";

import Image from "next/image";
import { IoMdCloseCircleOutline } from "react-icons/io";

import { setSpecs, addToCart } from "../redux/features/displate/displateSlice";

import { EFrame, EFinish } from "../types/types";

const frames = Object.keys(EFrame) as (keyof typeof EFrame)[];

const TestModal = () => {
  const dispatch = useDispatch<AppDispatch>();
  const currentDisplate = useSelector(
    (state: RootState) => state.displate.currentDisplate
  );

  const size = useSelector((state: RootState) => state.displate.specs.size);
  const price = useSelector((state: RootState) => state.displate.specs.price);
  const specs = useSelector((state: RootState) => state.displate.specs)
  return (
    <>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal p-0">
        <div className="modal-box relative p-[20px] ">
          <h3 className="font-bold text-center text-xl">
            {currentDisplate.category}
          </h3>
          <p className="pb-3 text-center text-zinc-400">
            {currentDisplate.title}
          </p>
          <div className="modal-action absolute top-[0px] right-[30px]">
            <label htmlFor="my-modal">
              <IoMdCloseCircleOutline
                size={24}
                className="hover:scale-125 transition duration-200 hover:text-rose-400 text-zinc-400 cursor-pointer"
              />
            </label>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <div className="h-[300px] w-[250px] flex items-center justify-center">
              <Image
                height={size}
                width={size - 50}
                className="rounded-md "
                alt={currentDisplate.title || ""}
                src={`/images/${currentDisplate.category}/${currentDisplate.img}.jpg`}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="flex flex-col items-center w-[200px]">
              <div className="flex flex-col w-full">
                <h3 className="font-bold text-center text-xl">Frames</h3>
                {frames.map((frame) => (
                  <div className="form-control" key={frame}>
                    <label className="label cursor-pointer">
                      <span className="label-text">{frame}</span>
                      <input
                        type="radio"
                        name="radio-10"
                        className={`
                        radio 
                        ${frame === "None" ? "checked:bg-zinc-300" : ""}
                        ${frame === "Natural" ? "checked:bg-amber-900" : ""}
                        ${frame === "Black" ? "checked:bg-black" : ""}
                        ${frame === "White" ? "checked:bg-slate-200" : ""}
                        ${frame === "Graphite" ? "checked:bg-gray-600" : ""}
                        
                        `}
                        onClick={() => dispatch(setSpecs({ frame: frame }))}
                      />
                    </label>
                  </div>
                ))}
              </div>
              <div className="flex flex-col w-full my-2 gap-2">
                <h3 className="font-bold text-center text-xl">Size</h3>

                <input
                  type="range"
                  min="200"
                  max="300"
                  className="range range-xs"
                  onChange={(e) =>
                    dispatch(setSpecs({ size: e.target.valueAsNumber }))
                  }
                />
              </div>
              <div className="flex flex-col w-full mt-3 mb-5">
                <div className="flex flex-row justify-between">
                  <h3 className="font-bold text-center text-xl">Finish</h3>
                  <div className="w-1/2 flex flex-row items-center justify-between">
                    <input
                      type="radio"
                      name="radio-11"
                      className="radio checked:bg-gradient-to-r from-white"
                      onClick={() =>
                        dispatch(
                          setSpecs({
                            finish: "Gloss",
                          })
                        )
                      }
                    />{" "}
                    <input
                      type="radio"
                      name="radio-11"
                      className="radio checked:bg-black"
                      onClick={() =>
                        dispatch(
                          setSpecs({
                            finish: "Matte",
                          })
                        )
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-5 items-center justify-center w-full">
            <div 
            onClick={() => dispatch(addToCart({specs: specs, title: currentDisplate.title}))}
            className="flex flex-row justify-between w-1/2 border-black rounded-full border-[2px] py-2 px-3 bg-zinc-400 cursor-pointer hover:bg-black hover:text-white transition duration-500 ">
              Add to cart
              <div className="font-semibold">${price}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestModal;
