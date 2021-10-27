import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useFormik, FormikProvider } from "formik";
import { object, string } from "yup";
import { useDispatch, useSelector } from "react-redux";

// components
import { Box, Typography, Button } from "@mui/material";

import { TextField } from "ui/TextField";
import { Link } from "ui/Link";
import { Wrapper } from "./Wrapper";

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
    validateOnBlur: false,
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

  const { handleSubmit, isSubmitting } = formikCtx;

  return (
    <Wrapper>
      <FormikProvider value={formikCtx}>
        <form onSubmit={handleSubmit}>
          <Box mb={5}>
            <Typography align="center" variant="h4">
              SIGN UP
            </Typography>
          </Box>
          <Box mb={3}>
            <TextField label="First name" fullWidth name="firstName" />
          </Box>
          <Box mb={3}>
            <TextField label="Last name" fullWidth name="lastName" />
          </Box>
          <Box mb={3}>
            <TextField label="E-mail" fullWidth name="email" />
          </Box>
          <Box mb={6}>
            <TextField
              label="Password"
              fullWidth
              type="password"
              name="password"
            />
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Button
              disabled={isSubmitting}
              color="primary"
              variant="contained"
              type="submit"
              size="large"
              sx={{ paddingLeft: 5, paddingRight: 5 }}
            >
              SIGN UP
            </Button>
            <Typography variant="body1">
              Have an account? <Link to="/login">Log In</Link>
            </Typography>
          </Box>
        </form>
      </FormikProvider>
    </Wrapper>
  );
};
