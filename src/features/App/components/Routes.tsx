import { Switch, Route, Redirect } from "react-router-dom";

// components
import { Signup } from "features/Auth/components/Signup";
import { Login } from "features/Auth/components/Login";
import { PrivateRoute } from "common/components/PrivateRoute";
import { BoardsPage } from "features/Boards/components/BoardsPage";
import { SettingsPage } from "features/Settings/components/SettingsPage";
import { HomePage } from "features/Home/components/HomePage";

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />

      <PrivateRoute exact path="/boards" component={BoardsPage} />
      <PrivateRoute exact path="/settings" component={SettingsPage} />
      <PrivateRoute exact path="/" component={HomePage} />

      <Redirect to="/boards" />
    </Switch>
  );
};
