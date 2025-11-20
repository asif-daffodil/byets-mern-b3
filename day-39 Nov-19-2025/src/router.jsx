import { createBrowserRouter } from "react-router";
import MainLayouts from "./layouts/MainLayouts";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

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
            path: "/about",
            element: <About />,
        },
        {
            path: "/contact",
            element: <Contact />,
        },
        {
            path: "/shop",
            element: <Shop />,
        },
        {
            path: "/signup",
            element: <SignUp />,
        },
        {
            path: "/signin",
            element: <SignIn />,
        }
    ],
  },
]);

export default router;