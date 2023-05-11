import React, { useState } from "react";
import {
  ChartBarIcon,
  HomeIcon,
  PresentationChartBarIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";

export default function NavBar() {
  const [value, setValue] = useState(0);

  return (
    <div className="">
      <HomeIcon className="text-gray-600 h-6" />
      <PresentationChartBarIcon />
      <ChartBarIcon />
      <UserCircleIcon />
    </div>
  );
}
