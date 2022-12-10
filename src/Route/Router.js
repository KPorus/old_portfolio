import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home";

let route = createBrowserRouter([
    {
        path: "/",
        element:<Main></Main>,
        children : [
            {
                path:"/",
                element:<Home></Home>,
            }
        ]
    }
]);

export default route;