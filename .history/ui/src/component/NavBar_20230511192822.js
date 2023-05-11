import React, { useState } from "react";
import {
  PresentationChartBarIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import DropDownMenu from "./DropDownMenu";

export default function NavBar() {
  return (
    <div className="flex items-center justify-center space-x-6 text-[#424242] text-xl">
      <HomeIcon className="navBtn" />
      <PresentationChartBarIcon className="navBtn" />
      <DropDownMenu />
    </div>
  );
}
