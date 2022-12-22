import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { clearUser } from "./Reducer/UserSlice";
import { FcLikePlaceholder } from "react-icons/fc";

const LoginWrapper = styled.div`
width:500px;
height:500px;
display:flex;
flex-direction:column;
margin:0 auto;
left:0;
justify-content:center;
align-items:center;
right:0;
margin-top:200px;
p{
    font-size:26px;
    margin-bottom:20px;
}
button{
    width:100px;
    height:30px;
    background-color:#99ccff;
    border-radius:30px;
    border:0px;
}
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
            <FcLikePlaceholder style={{marginTop:'-150px',fontSize:'100px'}}/>
            <p>{user.ID}님 안녕하세요!</p>
            <button onClick={() => LogoutFunc()}>로그아웃</button>
        </LoginWrapper>
    )
}

export default NowLogin;