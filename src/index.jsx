import { createRoot } from "react-dom/client";
import "./global.css";
import "./i18n";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import React, { Suspense } from "react";
import { HomePage } from "./pages/HomePage";
import Sound from "./components/OneSound";
import { ErrorPage } from "./pages/ErrorPage";
import { BreathPage } from "./pages/BreathPage";
import { SoundPage } from "./pages/SoundPage";
import { OneBreathExercise } from "./components/OneBreathExercise";
import { ExercisesPage } from "./pages/ExercisesPage";
import { FiveSenses } from "./components/FiveSenses";
import { Counting } from "./components/Counting";
import { AboutPage } from "./pages/AboutPage";
import { AboutUsPage } from "./pages/AboutUsPage";
import { Layout } from "./components/Layout";
import { GratitudeJournal } from "./components/GratitudeJournal";

// import npm install react-router-dom

export const App = () => {
  return (
    <Suspense fallback="loading">
      <Layout>
        <Outlet />
      </Layout>
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
        element: <SoundPage />,
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
        path: "/breath/:id",
        element: <OneBreathExercise />,
      },
      {
        path: "/exercises",
        element: <ExercisesPage />,
      },
      {
        path: "/exercises/senses",
        element: <FiveSenses />,
      },
      {
        path: "/exercises/counting",
        element: <Counting />,
      },
      {
        path: "/exercises/journal",
        element: <GratitudeJournal />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/about-us",
        element: <AboutUsPage />,
      },
    ],
  },
]);

createRoot(document.querySelector("#app")).render(
  <RouterProvider router={router} />
);
