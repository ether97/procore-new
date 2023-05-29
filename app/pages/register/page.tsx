import React from "react";
import ClientOnly from "../../components/ClientOnly";

import Socials from "../../components/Socials";

import Register from "../../components/Register";

const page = () => {
  return (
    <ClientOnly>
      <div className="h-full w-full flex flex-row items-center justify-center">
        <div className="flex flex-row justify-center items-center gap-4 w-2/3 p-4">
          <Register />
        </div>
      </div>
    </ClientOnly>
  );
};

export default page;
