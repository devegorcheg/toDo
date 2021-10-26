import { createAsyncThunk } from "@reduxjs/toolkit";

// types
import { Maybe, ThunkAPI } from "models/types";
import { User as IUser } from "@accounts/types";

interface ISingup {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const signup = createAsyncThunk<Maybe<string>, ISingup, ThunkAPI>(
  "auth/signup",
  async (
    { firstName, lastName, email, password },
    { extra: { accountsPassword }, rejectWithValue },
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
    } catch (error: any) {
      console.error(error);
      return rejectWithValue(error);
    }
  },
);

interface ILogin {
  email: string;
  password: string;
}

export const login = createAsyncThunk<IUser, ILogin, ThunkAPI>(
  "auth/login",
  async (
    { email, password },
    { extra: { accountsPassword }, rejectWithValue },
  ) => {
    try {
      const { user } = await accountsPassword.login({
        user: {
          email,
        },
        password,
      });

      return user;
    } catch (error: any) {
      console.error(error);
      return rejectWithValue(error);
    }
  },
);

export const getUser = createAsyncThunk<
  Maybe<IUser>,
  Maybe<undefined>,
  ThunkAPI
>("auth/getUser", async (_, { extra: { accountsClient }, rejectWithValue }) => {
  try {
    // refresh the session to get a new accessToken if expired
    const tokens = await accountsClient.refreshSession();

    if (tokens) {
      const res = await fetch("/api/user", {
        headers: {
          Authorization: tokens ? "Bearer " + tokens.accessToken : "",
        },
      });
      const user: IUser = await res.json();

      return user;
    }

    return null;
  } catch (error: any) {
    console.error(error);
    return rejectWithValue(error);
  }
});

export const logout = createAsyncThunk<null, Maybe<undefined>, ThunkAPI>(
  "auth/logout",
  async (_, { extra: { accountsClient }, rejectWithValue }) => {
    try {
      await accountsClient.logout();
    } catch (error: any) {
      console.error(error);
      return rejectWithValue(error);
    }
    return null;
  },
);
