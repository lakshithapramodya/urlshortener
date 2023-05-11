import React, { useState } from "react";

import { Bars3Icon, UserCircleIcon } from "@heroicons/react/24/solid";
import {
  PresentationChartBarIcon,
  ChartBarSquareIcon,
  HomeIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

export default function NavBar() {
  return (
    <div className="flex items-center justify-center space-x-6 text-[#424242] text-xl">
      <HomeIcon className="navBtn" />
      <ChartBarIcon className="navBtn" />
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
