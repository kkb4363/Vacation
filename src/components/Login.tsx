
import { useSelector } from "react-redux/es/exports";
import NotLogin from "../Login/NotLogin";
import NowLogin from "../Login/NowLogin";


function Login(){
    let user = useSelector((state:any) => state.UserSlice);
    
    return(
        <>
        {user.isLogin? <NowLogin/> : <NotLogin/>}
        </>
    )
}

export default Login;