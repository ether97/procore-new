"use client";
import axios from "axios";

import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import Button from "../../components/Button";

interface IFormInput {}

const addDisplate = () => {
  axios
    .post("/api/displate", {
      img: "StarWars1",
      title: "Duel of the Fates",
      category: "Star Wars",
    })
    .then(() => {
      toast.success("displate added!");
    })
    .catch((err) => {
      toast.error("something went wrong.");
    });
};

const DisplateForm = () => {
  return <Button onClick={() => addDisplate()} label="Add Displate" />;
};

export default DisplateForm;
