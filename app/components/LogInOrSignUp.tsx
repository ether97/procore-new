"use client";

import Button from "./Button";
import { BsPencilSquare } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { useRouter } from "next/navigation";

const LogInOrSignUp = () => {
  const router = useRouter();
  return (
    <div className="w-[600px] border-2 rounded-md flex flex-col items-center justify-center gap-4 p-4">
      <Button
        label="Register"
        icon={BsPencilSquare}
        onClick={() => {
          router.push("/register");
        }}
      />
      <Button
        label="Log in"
        icon={AiFillHome}
        onClick={() => {
          router.push("/login");
        }}
      />
    </div>
  );
};

export default LogInOrSignUp;
