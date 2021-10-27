// components
import { Theme } from "@mui/material";

// utils
import { drawerWidth } from "./Drawer";
import { styled } from "@mui/material/styles";

export const Main = styled("main", {
  shouldForwardProp: (prop: string) => prop !== "open",
})<{
  open?: boolean;
}>(({ theme: { transitions }, open }: { theme: Theme; open?: boolean }) => ({
  flexGrow: 1,
  transition: transitions.create("margin", {
    easing: transitions.easing.sharp,
    duration: transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: transitions.create("margin", {
      easing: transitions.easing.easeOut,
      duration: transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));
