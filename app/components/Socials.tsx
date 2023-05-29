"use client";

import SocialButton from "./SocialButton";

import {
  AiOutlineGithub,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

import { signIn } from "next-auth/react";

export const socials = [
  {
    label: "Github",
    icon: AiOutlineGithub,
    color: "white",
  },
  {
    label: "Google",
    icon: FcGoogle,
    color: "",
  },
  {
    label: "Facebook",
    icon: AiFillFacebook,
    color: "white",
  },
  {
    label: "Instagram",
    icon: AiFillInstagram,
    color: "white",
  },
];

const Socials = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-3">
      {socials.map((social) => (
        <SocialButton
          key={social.label}
          label={social.label}
          icon={social.icon}
          onClick={() => signIn(`github`)}
          color={social.color}
        />
      ))}
    </div>
  );
};

export default Socials;
