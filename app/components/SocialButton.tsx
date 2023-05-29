"use client";

import { IconType } from "react-icons";

interface SocialButtonProps {
  label: string;
  icon?: IconType;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  color: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({
  label,
  icon: Icon,
  onClick,
  color,
}) => {
  return (
    <button
      className={`bg-gray-700 rounded-full p-2 text-white hover:bg-white transition duration-300 ${
        label !== "Google" ? "hover:text-black" : ""
      }`}
      onClick={onClick}
    >
      {Icon && <Icon size={24} />}
    </button>
  );
};

export default SocialButton;
