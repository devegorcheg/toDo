import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

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

// icons
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";

// actions
import { logout } from "../../Auth/actions";

// utils
import { useTheme } from "@mui/material/styles";

export const drawerWidth = 240;

interface IProps {
  open: boolean;
  handleClose: () => void;
}

export const Drawer: React.FC<IProps> = ({ open, handleClose }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const theme = useTheme();

  return (
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
        <ListItemButton
          key="boards"
          onClick={() => {
            history.push("/boards");
          }}
        >
          <ListItemIcon>
            <AutoAwesomeMotionIcon />
          </ListItemIcon>
          <ListItemText primary="Boards" />
        </ListItemButton>
        <ListItemButton
          key="home"
          onClick={() => {
            history.push("/");
          }}
        >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
      </List>
      <Divider />
      <List>
        <ListItemButton
          key="settings"
          onClick={() => {
            history.push("/settings");
          }}
        >
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>
        <ListItemButton
          key="logout"
          onClick={() => {
            dispatch(logout());
          }}
        >
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>
      </List>
    </MUIDrawer>
  );
};
