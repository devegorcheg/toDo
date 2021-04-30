// types
import { IAppDispatch } from "app/store";
import { IAccountsPassword } from "lib/accounts";

export type Maybe<T> = T | null;
export type ThunkAPI = {
  dispatch: IAppDispatch;
  extra: {
    accountsPassword: IAccountsPassword;
  };
  rejectValue: string;
};
