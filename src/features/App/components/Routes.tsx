import { Switch, Route } from "react-router-dom";

// components
import Signup from "features/Auth/components/Signup";
import Login from "features/Auth/components/Login";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
    </Switch>
  );
};

export default Routes;
