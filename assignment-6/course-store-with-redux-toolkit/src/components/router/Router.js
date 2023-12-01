import Main from "../../layout/main";
import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
