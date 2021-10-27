// components
import { Theme, AppBarProps, AppBar as MuiAppBar } from "@mui/material";

// utils
import { styled } from "@mui/material/styles";
import { drawerWidth } from "./Drawer";

export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop: string) => prop !== "open",
})<AppBarProps>(
  ({ theme: { transitions }, open }: { theme: Theme; open?: boolean }) => ({
    transition: transitions.create(["margin", "width"], {
      easing: transitions.easing.sharp,
      duration: transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: transitions.create(["margin", "width"], {
        easing: transitions.easing.easeOut,
        duration: transitions.duration.enteringScreen,
      }),
    }),
  }),
);
