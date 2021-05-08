import classnames from "classnames";

// styles
import { makeStyles } from "@material-ui/core/styles";

import { Grid, CircularProgress } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  container: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: "100%",
    zIndex: 100,
  },
}));

interface IProps {
  styles?: string;
}

export const Loading: React.FC<IProps> = ({ styles }) => {
  const classes = useStyles();

  return (
    <Grid
      classes={{ container: classnames(classes.container, styles) }}
      container
      justify="center"
      alignItems="center"
    >
      <CircularProgress size={80} />
    </Grid>
  );
};
