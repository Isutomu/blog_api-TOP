import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  if (!localStorage.getItem("token")) {
    return <Navigate to="/logIn" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
