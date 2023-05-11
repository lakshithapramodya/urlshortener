import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import PollIcon from "@mui/icons-material/Poll";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";

export default function NavBar() {
  const [value, setValue] = useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Recents" icon={<HomeIcon />} />
        <BottomNavigationAction label="Favorites" icon={<PollIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Box>
  );
}
