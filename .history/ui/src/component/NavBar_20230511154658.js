import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PollIcon from "@mui/icons-material/Poll";
import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import styled from "@emotion/styled";

const StyledBottomNavigationAction = styled(BottomNavigationAction)(`
  color: #495e73;
  &.Mui-selected {
    color: white;
  }
`);

export default function NavBar() {
  const [value, setValue] = useState(0);

  return (
    <Box sx={{ width: 300 }}>
      <BottomNavigation
        sx={{
          bgcolor: "#ed3f4a",
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
        <StyledBottomNavigationAction icon={<HomeIcon fontSize="large" />} />
        <StyledBottomNavigationAction icon={<PollIcon fontSize="large" />} />
        <StyledBottomNavigationAction
          icon={<AccountCircleIcon fontSize="large" />}
        />
      </BottomNavigation>
    </Box>
  );
}
