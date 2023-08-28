import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import Posts from "./pages/Posts";
const PostDetails = lazy(() => import("./pages/PostComments"));

const router = createBrowserRouter([
  {
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Posts />
          </Suspense>
        ),
      },
      {
        path: "/:postId",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <PostDetails />
          </Suspense>
        ),
      },
    ],
  },
]);
export default router;
