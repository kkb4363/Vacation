import { useSelector } from "react-redux/es/exports";
import { FcLike } from "react-icons/fc";
import styled from "styled-components";
import Clock from "../Main/Clock";


const UserWrapper = styled.div`
width:500px;
height:100px;
margin-top:100px;
display:flex;
margin-left:1700px;
span{
    position:relative;
    font-weight:600;
    font-size:20px;
}
`

function Main(){
    let user = useSelector((state:any) => state.UserSlice);
    console.log(user)
    return(
        <>
            <UserWrapper>
                {user.isLogin? 
                <>
                <span>{user.ID}님 안녕하세요</span>
                <FcLike style={{position:'absolute',
                                fontSize:'30px',
                                marginTop:'-7px',
                                marginLeft:'170px'}}/>
                </> : null}
            </UserWrapper>
            <Clock/>
        </>
    )
}

export default Main;