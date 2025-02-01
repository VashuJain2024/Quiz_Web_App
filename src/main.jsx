import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router-dom"; // Use createHashRouter
import App from "./App.jsx";
import "./index.css";
import StartQuiz from "./components/StartQuiz.jsx";
import Quiz from "./components/Quiz.jsx";
import Rules from "./components/Rules.jsx";
import ShowScore from "./components/ShowScore.jsx";

const router = createHashRouter([ // Use HashRouter here
  {
    path: "/",
    element: <App />,
    children: [
      { index: "/", element: <StartQuiz /> },
      { path: "/rules", element: <Rules /> },
      { path: "/quiz", element: <Quiz /> },
      // { path: "/score", element: <ShowScore /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
