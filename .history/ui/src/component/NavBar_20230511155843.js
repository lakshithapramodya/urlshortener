import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PollIcon from "@mui/icons-material/Poll";
import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import styled from "@emotion/styled";

const StyledBottomNavigationAction = styled(BottomNavigationAction)(`
  color: Black;
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
        <StyledBottomNavigationAction icon={<HomeIcon fontSize="large" />} />
        <StyledBottomNavigationAction icon={<PollIcon fontSize="large" />} />
        <StyledBottomNavigationAction
          icon={<AccountCircleIcon fontSize="large" />}
        />
      </BottomNavigation>
    </Box>
  );
}
