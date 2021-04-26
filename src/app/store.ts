import { combineReducers, configureStore, AnyAction } from "@reduxjs/toolkit";

// utils
import { accountsPassword } from "lib/accaunts";

const rootReducer = combineReducers({
  // auth: authReducer.reducer,
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
        extraArgument: { accountsPassword },
      },
    }),
});

export type IAppDispatch = typeof store.dispatch;
