import { useSelector } from "react-redux/es/exports";
import { FcLike } from "react-icons/fc";
import styled from "styled-components";

const MainWrapper = styled.div`
width:2000px;
height:1000px;
`

const UserWrapper = styled.div`
width:500px;
height:500px;
margin-top:100px;
margin-left:50px;
span{
    font-weight:600;
    font-size:20px;
}
`

function Main(){
    let user = useSelector((state:any) => state.UserSlice);
    console.log(user)
    return(
        <MainWrapper>
            <UserWrapper>
                {user.isLogin? 
                <>
                <span style={{position:'relative'}}>{user.ID}님 안녕하세요</span>
                <FcLike style={{position:'absolute',fontSize:'30px',marginTop:'-7px'}}/>
                </> : null}
            </UserWrapper>
        </MainWrapper>
    )
}

export default Main;