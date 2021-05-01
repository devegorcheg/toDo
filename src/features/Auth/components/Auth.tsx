import { useEffect } from "react";
import { useDispatch } from "react-redux";

// utils
import { getUser } from "../../Auth/actions";

export const Auth: React.FC = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return <>{children}</>;
};
