// components
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import { AppLayout } from "./AppLayout";
import { Routes } from "./Routes";
import { Auth } from "features/Auth/components/Auth";
import ErrorBoundary from "common/components/ErrorBoundary";

// utils
import theme from "lib/mui";

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Auth>
        <ErrorBoundary>
          <AppLayout>
            <Routes />
          </AppLayout>
        </ErrorBoundary>
      </Auth>
    </ThemeProvider>
  );
};
