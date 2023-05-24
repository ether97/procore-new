"use client";

import Button from "./Button";

import { AiFillGithub, AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

import { signIn } from "next-auth/react";
import Register from "./Register";

export const socials = [
  {
    label: "Github",
    icon: AiFillGithub,
  },
  {
    label: "Google",
    icon: FcGoogle,
  },
  {
    label: "Facebook",
    icon: AiFillFacebook,
  },
  {
    label: "Instagram",
    icon: AiFillInstagram,
  },
];

const Socials = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 p-10 w-1/2">
      {socials.map((social) => (
        <Button
          key={social.label}
          label={social.label}
          icon={social.icon}
          onClick={() => signIn(`github`)}
        />
      ))}
    </div>
  );
};

export default Socials;
