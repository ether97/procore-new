"use client";

import { useState } from "react";
import axios from "axios";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useRegister from "../hooks/useRegister";
import { toast } from "react-hot-toast";
import Input from "./Input";
import Button from "./Button";
import Socials from "./Socials";

const Register = () => {
  const registerInput = useRegister();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post("/api/register", data)
      .then(() => {
        toast.success("successfully logged in!");
        setIsLoading(true);
      })
      .catch((err) => {
        toast.error("something went wrong!");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="flex flex-col w-1/2 gap-5">
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
        label="Name"
        id="name"
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
        <Button label="Register" onClick={handleSubmit(onSubmit)} />
        <Socials />
      </div>
    </div>
  );
};

export default Register;
