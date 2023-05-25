"use client";

import Image from "next/image";
import useModal from "../hooks/useModal";

export const icons = [
  "Batman",
  "Gaming",
  "Mandelorian",
  "Marvel",
  "Star Wars",
  "Superman",
];

const DisplateSelection = () => {
  const modal = useModal();
  return (
    <div className="w-full bg-green-600 shadow-md fixed mt-[75px] flex items-center justify-center p-4">
      <div className="max-w-[1000px] w-full flex items-center justify-between">
        {icons.map((icon) => (
          <Image
            key={icon}
            className="cursor-pointer hover:bg-white rounded-full p-[5px]"
            height="40"
            width="40"
            alt={icon}
            src={`/images/${icon}.png`}
            onClick={() => {
              modal.onOpen(icon);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default DisplateSelection;
