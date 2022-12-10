import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home";
import About from "../Pages/About"

let route = createBrowserRouter([
    {
        path: "/",
        element:<Main></Main>,
        children : [
            {
                path:"/",
                element:<Home></Home>,
            },
            {
                path:"/about",
                element:<About></About>,
            }
        ]
    }
]);

export default route;