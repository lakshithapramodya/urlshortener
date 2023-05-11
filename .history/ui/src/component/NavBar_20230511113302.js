import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PollIcon from "@mui/icons-material/Poll";
import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

export default function NavBar() {
  const [value, setValue] = useState(0);

  const navTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#00FF00'
        },
        text: {
            secondary: '#FF0000'
        }
    }
})

  return (
    <ThemeProvider theme={navTheme}>
<Box sx={{ width: 300 }}>
      <BottomNavigation
        classes={root: {
    color: "green"
  }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          classes="color:red;"
          icon={<HomeIcon className="" />}
        />
        <BottomNavigationAction icon={<PollIcon />} />
        <BottomNavigationAction icon={<AccountCircleIcon />} />
      </BottomNavigation>
    </Box>
    </ThemeProvider>
    
  );
}
