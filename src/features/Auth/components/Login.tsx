import { useEffect } from "react";
import { useFormik, FormikProvider } from "formik";
import { object, string } from "yup";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// components

import { Box, Typography, Paper, Button } from "@mui/material";

import { TextField } from "ui/TextField";
import { Link } from "ui/Link";

// utils
import { login } from "../actions";

// types
import { RootState } from "app/store";

const validationSchema = object({
  email: string().email().required(),
  password: string()
    .min(8, "Длина пароля должна быть не менее 8 символов")
    .max(25, "Длина пароля должна быть не более 25 символов")
    .required(),
});

export const Login: React.FC = () => {
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
    <Paper
      elevation={24}
      sx={{
        position: "absolute",
        left: "50%",
        top: "50%",
        width: 500,
        transform: "translate(-50%, -50%)",
      }}
    >
      <Box p={3}>
        <FormikProvider value={formikCtx}>
          <form onSubmit={handleSubmit}>
            <Box mb={3}>
              <Typography variant="h4">Вход на сайт</Typography>
            </Box>
            <Box mb={3}>
              <TextField
                required
                fullWidth
                variant="outlined"
                name="email"
                label="Электронная почта"
              />
            </Box>
            <Box mb={6}>
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
              <Link to="/signup">
                <Typography variant="body1">Регистрация</Typography>
              </Link>
            </Box>
          </form>
        </FormikProvider>
      </Box>
    </Paper>
  );
};
