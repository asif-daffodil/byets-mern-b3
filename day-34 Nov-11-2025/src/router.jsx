import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import MainLayout from "./layouts/MainLayout";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
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
                element:<Contact/>
            }
        ]
    }
]);

export default router;