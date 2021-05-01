import { combineReducers, configureStore, AnyAction } from "@reduxjs/toolkit";

// reducers
import { authReducer } from "features/Auth/redusers";

// utils
import { accountsPassword, accountsClient } from "lib/accounts";

const rootReducer = combineReducers({
  auth: authReducer.reducer,
});

const resettableRootReducer = (state: any, action: AnyAction) => {
  if (action.type === "auth/logout") {
    return rootReducer(undefined, action);
  }

  return rootReducer(state, action);
};

export const store = configureStore({
  reducer: resettableRootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: { accountsPassword, accountsClient },
      },
    }),
});

export type IAppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
