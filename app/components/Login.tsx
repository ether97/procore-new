"use client";

import { useState } from "react";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import Input from "./Input";
import Button from "./Button";
import Socials from "./Socials";

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
  };

  return (
    <div className="flex flex-col w-1/2 gap-5 md:mt-[200px] sm:mt-[500px]">
      <Input
        label="Email"
        id="email"
        required
        type="text"
        register={register}
        errors={errors}
        placeholder=" "
      />

      <Input
        label="Password"
        id="password"
        required
        type="password"
        register={register}
        errors={errors}
        placeholder=" "
      />
      <div className="flex flex-row justify-between items-center">
        <Button label="Login" onClick={handleSubmit(onSubmit)} />
        <Socials />
      </div>
    </div>
  );
};

export default Register;
