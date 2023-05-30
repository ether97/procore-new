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
    <button className="btn gap-5 w-full" onClick={onClick}>
      {Icon && <Icon size={24} />}
      {label}
    </button>
  );
};

export default Button;
