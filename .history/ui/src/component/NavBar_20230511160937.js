import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PollIcon from "@mui/icons-material/Poll";
import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import styled from "@emotion/styled";
import {
  Bars3Icon,
  GlobeAltIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";

export default function NavBar() {
  return (
    <div className="flex items-center justify-center space-x-2 text-[#495e73]">
      <h2 className="font-semibold">Home</h2>
      <h2>Statistics</h2>
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
