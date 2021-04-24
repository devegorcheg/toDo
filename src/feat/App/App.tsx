// components
import Typography from "@material-ui/core/Typography";
import { ThemeProvider } from "@material-ui/core/styles";

// utils
import theme from "./theme";

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Typography variant="h2">Hello Ferrum</Typography>
  </ThemeProvider>
);
export default App;
