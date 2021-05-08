import { StrictMode } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Router } from "react-router-dom";

// components
import { ThemeProvider } from "@material-ui/core/styles";
import { Routes } from "./Routes";
import { Auth } from "features/Auth/components/Auth";

// utils
import theme from "lib/material-ui";
import { store } from "app/store";
import { history } from "utils/history";

export const App: React.FC = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <Router history={history}>
          <Provider store={store}>
            <ThemeProvider theme={theme}>
              <Auth>
                <Routes />
              </Auth>
            </ThemeProvider>
          </Provider>
        </Router>
      </BrowserRouter>
    </StrictMode>
  );
};
