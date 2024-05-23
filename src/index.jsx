import { createRoot } from "react-dom/client";
import "./global.css";
import "./i18n";
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";
import { HomePage } from "./pages/HomePage";
import Sound from "./components/Sound";
import Quiz from "./components/Quiz";
import { ErrorPage } from "./pages/ErrorPage";

// import npm install react-router-dom

export const App = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <Suspense fallback="loading">
      <nav>
        <div className="nav-bar">
          <h1 className="logo">{t("logo")}</h1>
          <ul className="menu">
            <li>
              <Link to="/">{t("navigation.home")}</Link>
            </li>
            <li>
              <Link to="/breath">{t("navigation.breath")}</Link>
            </li>
            <li>
              <Link to="/music">{t("navigation.music")}</Link>
            </li>
            <li>
              <Link to="/quiz">{t("navigation.quiz")}</Link>
            </li>
            <li>
              <button type="button" onClick={() => changeLanguage("cs")}>
                cs
              </button>
            </li>
            <li>
              {" "}
              <button type="button" onClick={() => changeLanguage("en")}>
                en
              </button>
            </li>
          </ul>
        </div>
      </nav>
      {/* <HomePage /> */}
      <Outlet />
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
        element: <Sound />,
      },
      {
        path: "/breath",
        element: <Sound />,
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
