// components
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";

import { Routes } from "./Routes";
import { Auth } from "features/Auth/components/Auth";
import ErrorBoundary from "common/components/ErrorBoundary";

// utils
import theme from "lib/material-ui";

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Auth>
        <CssBaseline />
        <ErrorBoundary>
          <Routes />
        </ErrorBoundary>
      </Auth>
    </ThemeProvider>
  );
};
