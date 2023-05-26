"use client";

import { DisplateInfo } from "@prisma/client";
import axios from "axios";
import Image from "next/image";

import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

import { AiOutlineHeart } from "react-icons/ai";
import useModal from "../../hooks/useModal";
import useDisplateModal from "../../hooks/useDisplateModal";

const DisplateDisplay = () => {
  const displateModal = useDisplateModal();
  const [isLoading, setIsLoading] = useState(false);

  const [data, setData] = useState<DisplateInfo[]>([]);

  useEffect(() => {
    async function getDisplates() {
      setIsLoading(true);

      await axios
        .get<DisplateInfo[]>("/api/displate")
        .then((res) => {
          setIsLoading(false);
          setData(res.data);
          toast.success("get items!");
          console.log(res.data);
        })
        .catch((err) => {
          toast.error("something happened.");
        })
        .finally(() => {
          setIsLoading(false);
        });
    }

    getDisplates();
  }, []);

  let content = [];
  if (isLoading) {
    content.push(<div>Loading...</div>);
  } else if (data) {
    data.map((displate) => {
      content.push(
        <Image
          height={300}
          width={250}
          className="rounded-md hover:scale-105 duration-300 transition cursor-pointer "
          alt={displate.title}
          src={`/images/${displate.category}/${displate.img}.jpg`}
          style={{ objectFit: "cover" }}
          onClick={() => displateModal.onOpen(displate.title)}
        />
      );
    });
  }

  return (
    <div className="w-full lg:max-w-[1200px] xl:max-w-[1500px] md:max-w-[900px] sm:max-w-[700px] h-full grid grid-cols-4 gap-10 ">
      {content}
    </div>
  );
};

export default DisplateDisplay;
