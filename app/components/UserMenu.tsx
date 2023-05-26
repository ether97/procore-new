"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const UserMenu = () => {
  const router = useRouter();

  const userMenuItems = [
    {
      label: "Profile",
      onClick: () => {
        router.push("/profile");
      },
    },
    {
      label: "Settings",
      onclick: () => {},
    },
    {
      label: "Log out",
      onClick: () => {
        signOut();
      },
    },
  ];
  return (
    <div className="absolute bg-black top-[59px] z-150 right-[0px] rounded-bottom-md ">
      {userMenuItems.map((item, index) => {
        if (index === 0) {
          return (
            <div
              key={item.label}
              onClick={item.onClick}
              className="z-100 py-4 px-8 flex flex-row items-center justify-start text-white transition duration-200 hover:bg-yellow-400 hover:text-black cursor-pointer bg-gradient-to-b from-yellow-400"
            >
              {item.label}
            </div>
          );
        } else {
          return (
            <div
              key={item.label}
              onClick={item.onClick}
              className="z-100 py-4 px-8 flex flex-row items-center justify-start text-white transition duration-200 hover:bg-yellow-400 hover:text-black cursor-pointer"
            >
              {item.label}
            </div>
          );
        }
      })}
    </div>
  );
};

export default UserMenu;
