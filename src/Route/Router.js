import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home";
import About from "../Pages/About"
import Skill from "../Pages/Skill";
import Contract from "../Pages/Contract";
import Project from "../Pages/Projects";
import SingleProject from "../Pages/SingleProject";
import Blogs from "../Pages/Blogs";

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
            },
            {
                path:"/project",
                element:<Project/>,
            },
            {
                path:"/contract",
                element:<Contract/>,
            },
            {
                path:"/blogs",
                element:<Blogs/>,
            },
            {
                path:"/SingleProject/:id",
                element:<SingleProject/>,
                loader:async ({params})=>
                {
                    return fetch(`https://protfolio-server-kohl.vercel.app/projects/${params.id}`)
                }
            }
        ]
    }
]);

export default route;