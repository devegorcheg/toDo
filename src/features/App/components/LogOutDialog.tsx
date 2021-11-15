import { useDispatch } from "react-redux";

// components
import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";

// actions
import { logout } from "features/Auth/actions";

interface IProps {
  open: boolean;
  handleClose: () => void;
}

export const LogOutDialog: React.FC<IProps> = ({ open, handleClose }) => {
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logout());
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="logout-dialog-title"
    >
      <DialogTitle id="logout-dialog-title">
        Are you sure you want to quit the application?
      </DialogTitle>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={logOut} autoFocus>
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};
