"use client";

import Image from "next/image";

import Button from "../Button";

import { AiOutlineLogout } from "react-icons/ai";
import { TfiAndroid } from "react-icons/tfi";
import { FaUserCircle } from "react-icons/fa";
import { BsFillPostageFill } from "react-icons/bs";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import useMenu from "@/app/hooks/userMenu";
import UserMenu from "../UserMenu";
import DisplateSelection from "@/app/pages/displates/DisplateSelection";

interface NavbarProps {
  currentUser?: any | null | undefined;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  const router = useRouter();
  const menu = useMenu();
  return (
    <div className="z-100 fixed w-full bg-gradient-to-b from-yellow-400 flex flex-col items-center justify-center">
      <div className="w-full lg:max-w-[1500px] xl:max-w-[1800px] md:max-w-[1200px] sm:max-w-[1000px] flex flex-row items-center justify-between">
        <div
          className="flex flex-row items-center justify-center gap-3 cursor-pointer"
          onClick={() => {
            router.push("/");
          }}
        >
          <BsFillPostageFill size={24} />
          <h2>Displate</h2>
        </div>

        <div className="flex flex-row items-center gap-2 py-5">
          <div className="flex flex-col justify-end items-end ">
            <div className="font-semibold text-black">{currentUser?.name}</div>
            <div className="text-sm text-neutral-500">{currentUser?.email}</div>
          </div>
          {currentUser?.image ? (
            <div className="relative" onClick={() => menu.onToggle()}>
              <Image
                className="rounded-full cursor-pointer peer"
                src={currentUser?.image}
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
      <DisplateSelection />
    </div>
  );
};

export default Navbar;
