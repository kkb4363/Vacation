import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { clearUser } from "./Reducer/UserSlice";

const LoginWrapper = styled.div`
width:500px;
height:500px;
background-color:tomato;
display:flex;
margin:0 auto;
left:0;
justify-content:center;
align-items:center;
right:0;
margin-top:200px;
`

function NowLogin(){
    const user = useSelector((state:any) => state.UserSlice);
    const dispatch = useDispatch();
    
    const LogoutFunc = () => {
        console.log('로그아웃');
        dispatch(clearUser());
    }
    return(
        <LoginWrapper>
            <p>{user.ID}님 안녕하세요!</p>
            <button onClick={() => LogoutFunc()}>로그아웃</button>
        </LoginWrapper>
    )
}

export default NowLogin;