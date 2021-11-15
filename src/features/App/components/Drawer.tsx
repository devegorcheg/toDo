import { useState } from "react";

// components
import {
  List,
  Drawer as MUIDrawer,
  Divider,
  Typography,
  IconButton,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from "@mui/material";

import { DrawerHeader } from "./DrawerHeader";
import { LogOutDialog } from "./LogOutDialog";

// icons
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";

// utils
import { useTheme } from "@mui/material/styles";

export const drawerWidth = 240;

interface IProps {
  open: boolean;
  handleClose: () => void;
}

export const Drawer: React.FC<IProps> = ({ open, handleClose }) => {
  const theme = useTheme();
  const [openExitDialog, setOpenExitDialog] = useState(false);

  const handleOpenExitDialog = () => {
    setOpenExitDialog(true);
  };
  const handleCloseExitDialog = () => {
    setOpenExitDialog(false);
  };

  return (
    <>
      <MUIDrawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <Typography variant="body1">There is User Avatar</Typography>
          <IconButton onClick={handleClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItemButton key="boards">
            <ListItemIcon>
              <AutoAwesomeMotionIcon />
            </ListItemIcon>
            <ListItemText primary="Boards" />
          </ListItemButton>
          <ListItemButton key="home">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </List>
        <Divider />
        <List>
          <ListItemButton key="settings">
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
          <ListItemButton key="logout" onClick={handleOpenExitDialog}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </List>
      </MUIDrawer>
      <LogOutDialog open={openExitDialog} handleClose={handleCloseExitDialog} />
    </>
  );
};
