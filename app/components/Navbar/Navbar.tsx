"use client";

import Image from "next/image";

import Button from "../Button";

import { AiOutlineLogout } from "react-icons/ai";
import { TfiAndroid } from "react-icons/tfi";
import { FaUserCircle } from "react-icons/fa";
import { BsFillPostageFill } from "react-icons/bs";

import { signOut } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import useMenu from "@/app/hooks/userMenu";
import UserMenu from "../UserMenu";
import DisplateSelection from "@/app/pages/displates/DisplateSelection";
import Avatar from "../Avatar";

interface NavbarProps {
  currentUser?: any | null | undefined;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  const router = useRouter();
  const menu = useMenu();
  const pathname = usePathname();
  return (
    <div className="z-100 fixed w-full bg-gradient-to-b from-yellow-400 flex flex-col items-center justify-center">
      <div
        className="        max-w-[2520px]
        w-full

        flex flex-col items-center justify-center
        "
      >
        <div
          className="w-full flex flex-row items-center justify-between
                xl:px-10
        lg:px-5 
        md:px-5
        sm:px-5
        px-4
        "
        >
          <div
            className="flex flex-row items-center justify-center gap-3 cursor-pointer"
            onClick={() => {
              router.push("/pages/home");
            }}
          >
            <BsFillPostageFill size={24} />
            <h2>Displate</h2>
          </div>

          <div className="flex flex-row items-center gap-2 py-5">
            <div className="flex flex-col justify-end items-end ">
              <div className="font-semibold text-black">
                {currentUser?.name}
              </div>
              <div className="text-sm text-neutral-500">
                {currentUser?.email}
              </div>
            </div>
            <UserMenu currentUser={currentUser} />
          </div>
        </div>
        {pathname !== "/pages/login" &&
          pathname !== "/pages/register" &&
          pathname !== "/pages/home" && <DisplateSelection />}
      </div>
    </div>
  );
};

export default Navbar;
