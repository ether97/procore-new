"use client";

import Image from "next/image";
import useModal from "../../hooks/useModal";

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
    <div className="z-100 w-2/3 shadow-lg flex items-center justify-center p-4">
      <div className="w-full lg:max-w-[1200px] xl:max-w-[1500px] md:max-w-[900px] sm:max-w-[700px] flex items-center justify-between">
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
