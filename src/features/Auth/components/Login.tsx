import { useEffect } from "react";
import { useFormik, FormikProvider } from "formik";
import { object, string } from "yup";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// components
import { Box, Typography, Button } from "@mui/material";

import { TextField } from "ui/TextField";
import { Link } from "ui/Link";
import { Wrapper } from "./Wrapper";

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
    validateOnBlur: false,
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
    <Wrapper>
      <FormikProvider value={formikCtx}>
        <form onSubmit={handleSubmit}>
          <Box mb={5}>
            <Typography align="center" variant="h4">
              LOG IN
            </Typography>
          </Box>
          <Box mb={3}>
            <TextField
              fullWidth
              variant="outlined"
              name="email"
              label="Email"
            />
          </Box>
          <Box mb={6}>
            <TextField
              fullWidth
              name="password"
              type="password"
              label="Password"
            />
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Button
              disabled={isSubmitting || !isValid}
              variant="contained"
              color="primary"
              type="submit"
              size="large"
              sx={{ paddingLeft: 5, paddingRight: 5 }}
            >
              Log In
            </Button>
            <Typography variant="body1">
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </Typography>
          </Box>
        </form>
      </FormikProvider>
    </Wrapper>
  );
};
