import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import PageNotFound from "../pages/PageNotFound/PageNotFound";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <PageNotFound />,
  },
]);

export default routes;
