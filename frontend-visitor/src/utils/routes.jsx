import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/Main/Main";
import PageNotFound from "../pages/PageNotFound/PageNotFound";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <PageNotFound />,
  },
]);

export default routes;
