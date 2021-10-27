import { useState } from "react";
import { useSelector } from "react-redux";

// components
import { Box, Toolbar, Typography, IconButton } from "@mui/material";

import { DrawerHeader } from "./DrawerHeader";
import { Drawer } from "./Drawer";
import { AppBar } from "./AppBar";
import { Main } from "./Main";

// icons
import MenuIcon from "@mui/icons-material/Menu";

// types
import { RootState } from "app/store";

export const AppLayout: React.FC = ({ children }) => {
  const [open, setOpen] = useState(false);
  const loggedUser = useSelector((state: RootState) => state.auth.loggedUser);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  if (!loggedUser) {
    return <>{children}</>;
  }

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Name of page
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer open={open} handleClose={handleDrawerClose} />
      <Main open={open}>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  );
};
