import { createBrowserRouter } from "react-router-dom";
import LogIn from "../components/LogIn/LogIn";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import Dashboard from "../components/Dashboard/Dashboard";

const routes = new createBrowserRouter([
  { index: true, element: <LogIn /> },
  { path: "/logIn", element: <LogIn /> },
  {
    path: "/dashboard",
    element: <ProtectedRoute />,
    children: [{ index: true, element: <Dashboard /> }],
  },
]);

export default routes;
