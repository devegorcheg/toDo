import { useEffect } from "react";
import { useFormik, FormikProvider } from "formik";
import { object, string } from "yup";
import { useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// components
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import { makeStyles } from "@material-ui/core/styles";

import { TextField } from "ui/TextField";

// utils
import { login } from "../actions";

// types
import { RootState } from "app/store";

const useStyles = makeStyles(({ palette }) => ({
  form: {
    position: "absolute",
    left: "50%",
    top: "50%",
    width: 500,
    transform: "translate(-50%, -50%)",
  },
  link: {
    color: palette.primary.main,
    textDecoration: "none",
  },
}));

const validationSchema = object({
  email: string().email().required(),
  password: string()
    .min(8, "Длина пароля должна быть не менее 8 символов")
    .max(25, "Длина пароля должна быть не более 25 символов")
    .required(),
});

export const Login: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const loggedUser = useSelector((state: RootState) => state.auth.loggedUser);

  useEffect(() => {
    if (loggedUser) {
      history.push("/");
    }
  }, [loggedUser, history]);

  const formikCtx = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async ({ email, password }, { resetForm, setSubmitting }) => {
      setSubmitting(true);

      dispatch(login({ email, password }));

      setSubmitting(false);
    },
  });

  const { handleSubmit, isValid, isSubmitting } = formikCtx;

  return (
    <Paper className={classes.form} elevation={3}>
      <Box p={3}>
        <FormikProvider value={formikCtx}>
          <form onSubmit={handleSubmit}>
            <Box mb={1}>
              <Typography variant="h4">Вход на сайт</Typography>
            </Box>
            <Box mb={3}>
              <TextField
                required
                fullWidth
                name="email"
                label="Электронная почта"
              />
            </Box>
            <Box mb={3}>
              <TextField
                required
                fullWidth
                name="password"
                type="password"
                label="Пароль"
              />
            </Box>
            <Box
              mb={1}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Button
                disabled={isSubmitting || !isValid}
                variant="contained"
                color="primary"
                type="submit"
              >
                Войти
              </Button>
              <Link to="/register">
                <Typography variant="body1">Регистрация</Typography>
              </Link>
            </Box>
          </form>
        </FormikProvider>
      </Box>
    </Paper>
  );
};
