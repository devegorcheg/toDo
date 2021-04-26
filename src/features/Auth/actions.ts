import { createAsyncThunk } from "@reduxjs/toolkit";

// types
import { Maybe, ThunkAPI } from "models/types";

interface ILogin {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const signup = createAsyncThunk<Maybe<string>, ILogin, ThunkAPI>(
  "auth/signup",
  async (
    { firstName, lastName, email, password },
    { extra: { accountsPassword }, rejectWithValue }
  ) => {
    try {
      const result = await accountsPassword.createUser({
        email,
        profile: {
          firstName,
          lastName,
        },
        password,
      });

      return result?.userId ?? null;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.message);
    }
  }
);

// TODO: добавить login, logout
