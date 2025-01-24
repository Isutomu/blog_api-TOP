import { createBrowserRouter } from "react-router-dom";
import LogIn from "../components/LogIn/LogIn";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import Dashboard from "../pages/Dashboard/Dashboard";
import DashboardHome from "../components/DashboardHome/DashboardHome";
import CreatePost from "../components/CreatePost/CreatePost";

const routes = new createBrowserRouter([
  { index: true, element: <LogIn /> },
  { path: "/logIn", element: <LogIn /> },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          { index: true, element: <DashboardHome /> },
          { path: "/dashboard/createPost", element: <CreatePost /> },
          { path: "/dashboard/updatePost", element: <CreatePost /> },
        ],
      },
    ],
  },
]);

export default routes;
