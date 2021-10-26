import { createSlice } from "@reduxjs/toolkit";

// actions
import { signup, login, getUser } from "./actions";

// types
import { Maybe } from "models/types";
import { User as IUser } from "@accounts/types";

interface IInitialState {
  loading: boolean;
  error: Maybe<string>;
  loggedUser: Maybe<IUser>;
}

const initialState: IInitialState = {
  loading: false,
  error: null,
  loggedUser: null,
};

export const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: builder => {
    // signup
    builder.addCase(signup.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(signup.fulfilled, state => {
      state.loading = false;
    });
    builder.addCase(signup.rejected, state => {
      state.loading = false;
      state.error = "Ошибка регистрации";
    });

    // login
    builder.addCase(login.pending, state => {
      state.loading = true;
      state.error = null;
      state.loggedUser = null;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.loggedUser = action.payload;
    });
    builder.addCase(login.rejected, state => {
      state.loading = false;
      state.error = "Ошибка авторизации";
    });

    // getUser
    builder.addCase(getUser.pending, state => {
      state.loading = true;
      state.error = null;
      state.loggedUser = null;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.loading = false;
      state.loggedUser = action.payload;
    });
    builder.addCase(getUser.rejected, state => {
      state.loading = false;
      state.error = "Ошибка авторизации";
    });
  },
});
