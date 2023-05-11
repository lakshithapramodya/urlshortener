import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PollIcon from "@mui/icons-material/Poll";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  makeStyles,
} from "@mui/material";
import { HomeModernIcon } from "@heroicons/react/24/solid";

export default function NavBar() {
  const [value, setValue] = useState(0);

  return (
    <div className="">
      <HomeModernIcon className="text-gray-600 h-6" />
      <PollIcon />
      <AccountCircleIcon />
    </div>
  );
}
