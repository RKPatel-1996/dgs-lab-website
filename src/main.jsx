// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// Import your pages here
import HomePage from "./pages/HomePage";
import ResearchPage from "./pages/ResearchPage";
import TeamPage from "./pages/TeamPage";
// ... import other pages

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    // You can add an error page later: errorElement: <ErrorPage />
  },
  {
    path: "/research",
    element: <ResearchPage />,
  },
  {
    path: "/team",
    element: <TeamPage />,
  },
  // ... add routes for all your pages
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
