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

const useStyle = makeStyles({
  root: {
    backgroundColor: "#ed3f4a",
  },
});

export default function NavBar() {
  const [value, setValue] = useState(0);

  const classes = useStyle();

  return (
    <Box sx={{ width: 300 }}>
      <BottomNavigation
        classes={classes.root}
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
  );
}
