"use client";

import Button from "./Button";
import { BsPencilSquare } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { BsArrowBarRight } from "react-icons/bs";

const LogInOrSignUp = () => {
  const router = useRouter();
  return (
    <div className="w-[600px] border-2 rounded-md flex flex-col items-center justify-center gap-4 p-4">
      <Button
        label="Register"
        icon={BsPencilSquare}
        onClick={() => {
          router.push("pages/register");
        }}
      />
      <Button
        label="Log in"
        icon={AiFillHome}
        onClick={() => {
          router.push("pages/login");
        }}
      />
      <div
        className="text-zinc-400 text-sm font-semi gap-2 flex items-center justify-center cursor-pointer"
        onClick={() => router.push("pages/displates")}
      >
        Browse Displates
        <BsArrowBarRight size={24} color="black" />
      </div>
    </div>
  );
};

export default LogInOrSignUp;
