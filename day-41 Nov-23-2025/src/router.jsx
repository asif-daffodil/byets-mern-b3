import { createBrowserRouter } from "react-router";
import MainLayouts from "./Layouts/MainLayouts";
import Home from "./pages/Home";
import UserDetails from "./pages/UserDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/single-user/:id",
        element: <UserDetails />,
      }
    ],
  },
]);

export default router;