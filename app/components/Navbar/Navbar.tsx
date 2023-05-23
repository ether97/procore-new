"use client";

import Image from "next/image";

import Button from "../Button";

import { AiOutlineLogout } from "react-icons/ai";

import { signOut } from "next-auth/react";

interface NavbarProps {
  currentUser?: any | null | undefined;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  return (
    <div className="fixed w-full bg-yellow-400 flex flex-row items-center justify-center">
      <div className="w-full max-w-[1200px] flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-4 p-5">
          <Image
            className="rounded-full"
            src={currentUser?.user.image || "/images/placeholder.jpg"}
            alt="user avatar"
            width="50"
            height="50"
          />
          <div className="flex flex-col gap-1 ">
            <div className="font-semibold text-black">
              {currentUser?.user.name}
            </div>
            <div className="text-sm text-neutral-500">
              {currentUser?.user.email}
            </div>
          </div>
        </div>
        {currentUser && (
          <Button label="Log out" small onClick={() => signOut()} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
