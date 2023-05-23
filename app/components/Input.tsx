"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  label: string;
  placeholder: string;
  id: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  type: string;
  required: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  id,
  register,
  errors,
  type = "text",
  required,
}) => {
  return (
    <div className="w-full relative">
      <input
        type={type}
        placeholder={placeholder}
        {...register(id, { required })}
        id={id}
        className={`peer w-full p-4 pt-6 outline-none border-[1px] border-zinc-400 rounded-md cursor-pointer transition font-light bg-yellow ${
          errors[id] ? "border-rose-500" : "border-black"
        }  ${errors[id] ? "focus:border-rose-500" : "focus:border-black"}`}
      />
      <label
        className={`
        origin-[0]
        absolute
        duration-150
        top-5
        left-5
        z-10
        bg-white
        transform
        text-md
        -translate-y-3
        px-2
        peer-placeholder-shown:scale-100
        peer-placeholder-shown:translate-y-0
        peer-focus:scale-75
        peer-focus:-translate-y-8
        ${errors[id] ? "text-rose-500" : "text-zinc-400"}
        `}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
