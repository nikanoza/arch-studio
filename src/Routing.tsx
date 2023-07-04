import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Contact = lazy(() => import("./pages/Contact"));

const Routing = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense>
            <Home />
          </Suspense>
        }
      />
      <Route
        path="/about"
        element={
          <Suspense fallback={"loading..."}>
            <About />
          </Suspense>
        }
      />
      <Route
        path="/portfolio"
        element={
          <Suspense fallback={"loading..."}>
            <Portfolio />
          </Suspense>
        }
      />
      <Route
        path="/contact"
        element={
          <Suspense fallback={"loading..."}>
            <Contact />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default Routing;
