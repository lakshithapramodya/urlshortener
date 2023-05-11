import React, { useState } from "react";
import {
  PresentationChartBarIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import DropDownMenu from "./DropDownMenu";
import { Link } from "react-router-dom";

export default function NavBar({ user }) {
  return (
    <div className="flex items-center justify-center space-x-6 text-[#424242] text-xl">
      <Link to="/">
        <HomeIcon className="navBtn" />
      </Link>
      <Link to="/statistics">
        <PresentationChartBarIcon className="navBtn" />
      </Link>
      <DropDownMenu user={user} />
    </div>
  );
}
