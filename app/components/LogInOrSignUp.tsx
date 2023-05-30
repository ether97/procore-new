"use client";

import Button from "./Button";
import { BsPencilSquare } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { BsArrowBarRight } from "react-icons/bs";

import { useEffect } from "react";

import { fetchDisplates } from "../redux/features/displate/displateSlice";
import { AppDispatch } from "../redux/store";

import { useDispatch } from "react-redux";

const LogInOrSignUp = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  useEffect(() => {
    dispatch(fetchDisplates());
  }, [dispatch]);
  return (
    <div className="w-[600px] border-2 rounded-md flex flex-col items-center justify-center gap-4 p-4">
      <Button
        label="Log in"
        icon={AiFillHome}
        onClick={() => {
          router.push("pages/login");
        }}
      />
      <Button
        label="Register"
        icon={BsPencilSquare}
        onClick={() => {
          router.push("pages/register");
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
