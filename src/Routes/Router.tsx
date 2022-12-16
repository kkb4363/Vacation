import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Five from "../components/Five";
import Four from "../components/Four";
import Main from "../components/Main";
import Calander from "../components/Calander";
import Third from "../components/Third";



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
                path:'/calander',
                element:<Calander/>
            },
            {
                path:'/third',
                element:<Third/>
            },
            {
                path:'/four',
                element:<Four/>
            },
            {
                path:'/five',
                element:<Five/>
            }
        ]
    }
])

export default Router;