import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import PostPage from "../pages/PostPage/PostPage";
import SearchResultPage from "../pages/SearchResultPage/SearchResultPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <PageNotFound />,
  },
  { path: "/posts/:postId", element: <PostPage /> },
  { path: "/tags/:tagName", element: <SearchResultPage /> },
]);

export default routes;
