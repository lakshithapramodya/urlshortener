import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PollIcon from "@mui/icons-material/Poll";
import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";

export default function NavBar() {
  const [value, setValue] = useState(0);

  return (
    <div>
      <Box sx={{ width: 500 }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="Home"
            icon={<HomeIcon className="" />}
          />
          <BottomNavigationAction label="Statistics" icon={<PollIcon />} />
          <BottomNavigationAction
            label="Account"
            icon={<AccountCircleIcon />}
          />
        </BottomNavigation>
      </Box>
    </div>
  );
}
