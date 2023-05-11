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
  color: #495e73;
  fontSize: 2rem;
  &.Mui-selected {
    color: #ed3f4a;
    fontSize: 2rem;
  }
`);

export default function NavBar() {
  const [value, setValue] = useState(0);

  return (
    <Box sx={{ width: 300 }}>
      <BottomNavigation
        sx={{
          bgcolor: "#ecf0f3",
          borderRadius: "2rem",
          "& .Mui-selected": {
            "& .MuiBottomNavigationAction-label": {
              fontSize: (theme) => theme.typography.caption,
              transition: "none",
              fontWeight: "bold",
              lineHeight: "20px",
            },
          },
        }}
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
