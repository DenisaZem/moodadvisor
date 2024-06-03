import { createRoot } from "react-dom/client";
import "./global.css";
import "./i18n";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import React, { Suspense } from "react";
import { HomePage } from "./pages/HomePage";
import Sound from "./components/Sound";
import Quiz from "./components/Quiz";
import { ErrorPage } from "./pages/ErrorPage";
import { Navbar } from "./components/Navbar";
import { BreathPage } from "./pages/BreathPage";
import { SoundMenu } from "./pages/SoundPage";
import { Breath } from "./components/Breath";
import { Footer } from "./components/Footer";

// import npm install react-router-dom

export const App = () => {
  return (
    <Suspense fallback="loading">
      <Navbar />
      <Outlet />
      <Footer />
    </Suspense>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/music",
        element: <SoundMenu />,
      },
      {
        path: "/music/:id",
        element: <Sound />,
      },
      {
        path: "/breath",
        element: <BreathPage />,
      },
      {
        path: "/breath/exercise",
        element: <Breath />,
      },
      {
        path: "/quiz",
        element: <Quiz />,
      },
    ],
  },
]);

createRoot(document.querySelector("#app")).render(
  <RouterProvider router={router} />
);
