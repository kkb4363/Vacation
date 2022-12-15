import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../components/Main";
import Second from "../components/Second";



const Router = createBrowserRouter([
    {
        path:'',
        element:<App/>,
        children:[
            {
                path:'/',
                element:<Main/>,
            },
            {
                path:'/second',
                element:<Second/>
            }
        ]
    }
])

export default Router;