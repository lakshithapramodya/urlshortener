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

export default function NavBar() {
  const [value, setValue] = useState(0);

  return (
    <div>
      <HomeIcon className="text-gray-600" />
      <PollIcon />
      <AccountCircleIcon />
    </div>
  );
}
