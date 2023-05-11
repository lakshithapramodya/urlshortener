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
import styled from "@emotion/styled";

const StyledBottomNavigationAction = styled(BottomNavigationAction)(`
  color: "#ed3f4a";
  &.Mui-selected {
    color: red;
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
        <StyledBottomNavigationAction icon={<HomeIcon className="" />} />
        <StyledBottomNavigationAction icon={<PollIcon />} />
        <StyledBottomNavigationAction icon={<AccountCircleIcon />} />
      </BottomNavigation>
    </Box>
  );
}