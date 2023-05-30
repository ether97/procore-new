"use client";

import { FaUserCircle } from "react-icons/fa";

import Image from "next/image";

interface AvatarProps {
  currentUser?: any | null | undefined;
}

const Avatar: React.FC<AvatarProps> = ({ currentUser }) => {
  let content;
  if (currentUser) {
    content = (
      <Image
        className="rounded-full cursor-pointer peer dropdown-hover"
        src={currentUser?.image}
        alt="user avatar"
        width="35"
        height="35"
      />
    );
  } else {
    content = <FaUserCircle size={35} />;
  }

  return <>{content}</>;
};

export default Avatar;
