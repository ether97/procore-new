import React from "react";
import ClientOnly from "../components/ClientOnly";

import Socials from "../components/Socials";

import Login from "../components/Login";

const page = () => {
  return (
    <ClientOnly>
      <div className="h-full w-full flex flex-row items-center justify-center">
        <div className="flex flex-row justify-center items-center gap-4 w-2/3 p-4">
          <Login />
          <Socials />
        </div>
      </div>
    </ClientOnly>
  );
};

export default page;
