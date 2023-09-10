import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import Posts from "./pages/Posts";
import RootLayout from "./layout/RootLayout";
const PostDetails = lazy(() => import("./pages/PostComments"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
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
