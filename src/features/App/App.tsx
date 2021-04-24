import { StrictMode } from "react";
import { Provider } from "react-redux";

// components
import Typography from "@material-ui/core/Typography";
import { ThemeProvider } from "@material-ui/core/styles";

// utils
import theme from "../../lib/material-ui";
import store from "../../app/store";

const App: React.FC = () => (
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Typography variant="h2">Hello Ferrum</Typography>
      </ThemeProvider>
    </Provider>
  </StrictMode>
);

export default App;
