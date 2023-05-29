"use client";

import { setCurrentDisplate } from "@/app/redux/features/displate/displateSlice";
import { RootState } from "@/app/redux/store";
import Image from "next/image";

import { useDispatch, useSelector } from "react-redux";

import { AppDispatch } from "@/app/redux/store";

const DisplateDisplay = () => {
  const dispatch = useDispatch<AppDispatch>();
  const displates = useSelector((state: RootState) => state.displate.displates);

  let content = [];
  if (displates.length === 0) {
    content.push(<div>Loading...</div>);
  } else {
    displates.map((displate) => {
      content.push(
        <div
          className="flex flex-row items-center justify-center -z-50"
          key={displate.id}
        >
          <label htmlFor="my-modal">
            <Image
              height={300}
              width={250}
              className="rounded-md hover:scale-105 duration-300 transition cursor-pointer -z-50"
              alt={displate.title || ""}
              src={`/images/${displate.category}/${displate.img}.jpg`}
              style={{ objectFit: "cover" }}
              onClick={() => dispatch(setCurrentDisplate(displate))}
            />
          </label>
        </div>
      );
    });
  }

  return (
    <div className="w-full lg:max-w-[1200px] xl:max-w-[1500px] md:max-w-[900px] sm:max-w-[700px] h-full grid md:grid-cols-3 sm:grid-cols-2 grid-cols-4 gap-10 px-auto">
      {content}
    </div>
  );
};

export default DisplateDisplay;
