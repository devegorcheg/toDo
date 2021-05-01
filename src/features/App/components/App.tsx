import { StrictMode, useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// components
import { ThemeProvider } from "@material-ui/core/styles";
import { Routes } from "./Routes";

// utils
import theme from "lib/material-ui";
import { store } from "app/store";
import { getUser } from "../../Auth/actions";

export const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <Routes />
          </ThemeProvider>
        </Provider>
      </BrowserRouter>
    </StrictMode>
  );
};
