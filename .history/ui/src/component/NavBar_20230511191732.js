import React, { useState } from "react";

import { Bars3Icon } from "@heroicons/react/24/solid";
import {
  PresentationChartBarIcon,
  HomeIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import DropdownMenu from "./DropDownMenu";

export default function NavBar() {
  return (
    <div className="flex items-center justify-center space-x-6 text-[#424242] text-xl">
      <HomeIcon className="navBtn" />
      <PresentationChartBarIcon className="navBtn" />
      <DropdownMenu />
    </div>
  );
}
