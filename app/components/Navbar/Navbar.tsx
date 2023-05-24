"use client";

import Image from "next/image";

import Button from "../Button";

import { AiOutlineLogout } from "react-icons/ai";
import { TfiAndroid } from "react-icons/tfi";
import { FaUserCircle } from "react-icons/fa";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import useMenu from "@/app/hooks/userMenu";
import UserMenu from "../UserMenu";

interface NavbarProps {
  currentUser?: any | null | undefined;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  const router = useRouter();
  const menu = useMenu();
  return (
    <div className="fixed w-full bg-yellow-400 flex flex-row items-center justify-center">
      <div className="w-full max-w-[1200px] flex flex-row items-center justify-between">
        <div
          className="flex flex-row items-center justify-center gap-3 cursor-pointer"
          onClick={() => {
            router.push("/");
          }}
        >
          <TfiAndroid size={24} />
          <h2>Procore</h2>
        </div>

        <div className="flex flex-row items-center gap-2 p-5">
          <div className="flex flex-col justify-end items-end ">
            <div className="font-semibold text-black">
              {currentUser?.user.name}
            </div>
            <div className="text-sm text-neutral-500">
              {currentUser?.user.email}
            </div>
          </div>
          {currentUser?.user.image ? (
            <div className="relative" onClick={() => menu.onToggle()}>
              <Image
                className="rounded-full cursor-pointer peer"
                src={currentUser?.user.image}
                alt="user avatar"
                width="35"
                height="35"
              />
              {menu.isOpen && <UserMenu />}
            </div>
          ) : (
            <FaUserCircle size={35} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
