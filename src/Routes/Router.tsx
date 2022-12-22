import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Four from "../components/Four";
import Main from "../components/Main";
import Calander from "../components/Calander";
import Checklist from "../components/Checklist";
import Login from "../components/Login";

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
                element:<Calander/>,
                children:[
                    {
                        path:'/calander/:day',
                        element:<Calander/>,
                    }
                ]
            },
            {
                path:'/checklist',
                element:<Checklist/>
            },
            {
                path:'/four',
                element:<Four/>
            },
            {
                path:'/login',
                element:<Login/>
            }
        ]
    }
])

export default Router;