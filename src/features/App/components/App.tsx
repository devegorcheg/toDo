import { StrictMode } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

// components
import { ThemeProvider } from "@material-ui/core/styles";
import Routes from "./Routes";

// utils
import theme from "lib/material-ui";
import { store } from "app/store";

const App: React.FC = () => (
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

export default App;
