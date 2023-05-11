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

const StyledBottomNavigationAction = styled(BottomNavigationAction)(`
  color: #424242;
  &.Mui-selected {
    color: #ff385c;
  }
`);

export default function NavBar() {
  const [value, setValue] = useState(0);

  return (
    <Box sx={{ width: 300 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <StyledBottomNavigationAction
          label="Home"
          icon={<HomeIcon fontSize="large" />}
        />
        <StyledBottomNavigationAction
          label="Statistics"
          icon={<PollIcon fontSize="large" />}
        />
        <div className="flex items-center space-x-4 justify-end">
          <p
            className="text-sm font-semibold cursor-pointer 
        rounded-full text-gray-600 hidden md:inline"
          >
            Become a Host
          </p>

          <GlobeAltIcon className="h-5 text-gray-600 cursor-pointer" />

          <div
            className="flex items-center border rounded-full p-1 
        space-x-2 shadow-sm px-2 hover:shadow-md"
          >
            <Bars3Icon className="h-5 text-gray-500" />
            <UserCircleIcon className="h-8 text-gray-400" />
          </div>
        </div>
      </BottomNavigation>
    </Box>
  );
}
