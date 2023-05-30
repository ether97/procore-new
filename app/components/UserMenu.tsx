"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Avatar from "./Avatar";

interface UserMenuProps {
  currentUser?: any | null | undefined;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
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
    <div className="dropdown dropdown-hover">
      <label tabIndex={0} className="m-1">
        <Avatar currentUser={currentUser} />
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-transparent rounded-box w-[130px] absolute top-[70px] right-[0px]"
      >
        {userMenuItems.map((item) => (
          <li
            className="text-center hover:bg-gray-700 p-2 cursor-pointer transition duration-300 hover:text-white"
            onClick={item.onClick}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserMenu;
