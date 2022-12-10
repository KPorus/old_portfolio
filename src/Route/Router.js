import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home";
import About from "../Pages/About"
import Skill from "../Pages/Skill";

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
            },
            {
                path:"/skill",
                element:<Skill/>,
            }
        ]
    }
]);

export default route;