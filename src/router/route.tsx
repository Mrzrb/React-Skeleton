import { createBrowserRouter } from "react-router-dom";
import PageNotFound from "../pages/404";
import Contact from "../pages/contact";
import Home from "../pages/home";

const routeArray = [
    {
        path: "/",
        Component: Home,
    },
];

routeArray.push({
    path: "*",
    Component: PageNotFound,
})

const router = createBrowserRouter(routeArray);

export default router;
