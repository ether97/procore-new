"use client";

import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  icon?: IconType;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  small?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  icon: Icon,
  onClick,
  small,
}) => {
  return (
    <button
      onClick={onClick}
      className={`py-5 px-10 flex flex-row 
      hover:bg-black hover:text-white
      transition
      duration-300
      items-center justify-center relative border-[1px] border-md cursor-pointer ${
        small ? "max-w-[200px]" : "w-full"
      }`}
    >
      {Icon && <Icon size={24} className="top-5 left-5 absolute" />}
      {label}
    </button>
  );
};

export default Button;
