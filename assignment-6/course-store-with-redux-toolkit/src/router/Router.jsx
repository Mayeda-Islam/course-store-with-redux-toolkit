import { createBrowserRouter } from "react-router-dom";
// import Layout from "../layout/Layout";
import Home from "../components/Home/Home";
import Layout from "../layout/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
