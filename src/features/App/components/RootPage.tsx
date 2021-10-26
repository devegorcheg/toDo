import { useDispatch } from "react-redux";

// components
import { Button, Typography } from "@material-ui/core";

// utils
import { logout } from "../../Auth/actions";

export const RootPage: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Button
        variant="contained"
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </Button>
      <Typography variant="h1">Hello Wotld</Typography>
    </>
  );
};
