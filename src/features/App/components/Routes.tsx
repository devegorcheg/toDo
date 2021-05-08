import { Switch, Route } from "react-router-dom";

// components
import { Signup } from "features/Auth/components/Signup";
import { Login } from "features/Auth/components/Login";
import { PrivateRoute } from "common/components/PrivateRoute";
import { RootPage } from "./RootPage";

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <PrivateRoute exact path="/" component={RootPage} />
    </Switch>
  );
};
