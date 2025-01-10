import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
]);

export default routes;
