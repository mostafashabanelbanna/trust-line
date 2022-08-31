import * as React from "react";
import { Routes, Route } from "react-router-dom";

const Home = React.lazy(() => import("../view/home"));
const PostsList = React.lazy(() => import("../view/posts/postsList"));
const router = ({ section1Ref }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <React.Suspense fallback={<>...</>}>
            <Home section1Ref={section1Ref} />
          </React.Suspense>
        }
      />
      <Route
        path="/posts"
        element={
          <React.Suspense fallback={<>...</>}>
            <PostsList section1Ref={section1Ref} />
          </React.Suspense>
        }
      />
    </Routes>
  );
};

export default router;
