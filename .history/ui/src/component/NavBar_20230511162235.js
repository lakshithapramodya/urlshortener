import React, { useState } from "react";

import { Bars3Icon, HomeIcon, UserCircleIcon } from "@heroicons/react/24/solid";

export default function NavBar() {
  return (
    <div className="flex items-center justify-center space-x-6 text-[#495e73] text-xl">
      <HomeIcon className="navBtn" />
      <Bars3Icon className="md:hidden h-6 cursor-pointer" />

      <div
        className="flex items-center border rounded-full p-1 
        space-x-2 shadow-sm px-2 hover:shadow-md"
      >
        <Bars3Icon className="h-5" />
        <UserCircleIcon className="h-8" />
      </div>
    </div>
  );
}
