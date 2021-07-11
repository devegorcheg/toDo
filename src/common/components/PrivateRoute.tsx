import { Redirect, Route, RouteProps } from "react-router-dom";
import { useSelector } from "react-redux";

// types
import { RootState } from "app/store";

export const PrivateRoute: React.FC<RouteProps> = props => {
  const loggedUser = useSelector((state: RootState) => state.auth.loggedUser);

  if (!loggedUser) {
    return <Redirect to="/login" />;
  }

  return <Route {...props} />;
};
