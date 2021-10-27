import { Link as RouterLink } from "react-router-dom";

// style
import { styled, Theme } from "@mui/material/styles";

export const Link = styled(RouterLink)(
  ({ theme: { palette } }: { theme: Theme }) => ({
    color: palette.primary.main,
    textDecoration: "none",
  }),
);
