import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useFormik, FormikProvider } from "formik";
import { object, string } from "yup";
import { useDispatch, useSelector } from "react-redux";

// components
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { TextField } from "ui/TextField";
import { Link } from "ui/Link";

// utils
import { signup } from "../actions";

// types
import { RootState } from "app/store";

const validationSchema = object({
  firstName: string().min(3).max(50).required(),
  lastName: string().min(3).max(50).required(),
  email: string().email().required(),
  password: string()
    .min(8, "Длина пароля должна быть не менее 8 символов")
    .max(25)
    .required(),
});

export const Signup: React.FC = () => {
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
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (data, { setSubmitting }) => {
      setSubmitting(true);

      const { firstName, lastName, email, password } = data;

      dispatch(signup({ firstName, lastName, email, password }));

      setSubmitting(false);
    },
  });

  const { handleSubmit, isValid, isSubmitting } = formikCtx;

  return (
    <Paper
      elevation={24}
      sx={{
        width: 500,
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Box p={4}>
        <FormikProvider value={formikCtx}>
          <form onSubmit={handleSubmit}>
            <Box mb={1}>
              <Typography variant="h4">Регистрация</Typography>
            </Box>
            <Box mb={1}>
              <TextField label="Имя" fullWidth required name="firstName" />
            </Box>
            <Box mb={1}>
              <TextField label="Фамилия" fullWidth required name="lastName" />
            </Box>
            <Box mb={1}>
              <TextField label="E-mail" fullWidth required name="email" />
            </Box>
            <Box mb={3}>
              <TextField
                label="Пароль"
                fullWidth
                required
                type="password"
                name="password"
              />
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mt={2}
            >
              <Button
                disabled={isSubmitting || !isValid}
                color="primary"
                variant="contained"
                type="submit"
              >
                Регистрация
              </Button>
              <Link to="/login">
                <Typography variant="body1">Войти</Typography>
              </Link>
            </Box>
          </form>
        </FormikProvider>
      </Box>
    </Paper>
  );
};
