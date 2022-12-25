import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Four from "../Components/Four";
import Main from "../Components/Main";
import Calander from "../Components/Calander";
import Checklist from "../Components/Checklist";
import Login from "../Components/Login";
import Signup from "../Login/Signup";

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
            },
            {  
                    path:'signup',
                    element:<Signup/> 
            }
        ]
    }
])

export default Router;