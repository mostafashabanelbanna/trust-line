import * as React from "react";
import { Routes, Route } from "react-router-dom";

const Home = React.lazy(() => import("../view/home"));

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
    </Routes>
  );
};

export default router;
