import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { isDarkAtom } from "../atom";
import { BiBrightnessHalf } from "react-icons/bi";
import { Link } from "react-router-dom";
import '../Style.css';
import { FaGrinHearts } from "react-icons/fa";
import { useSelector } from "react-redux/es/exports";

const Navbar = styled.div`
top:0;
background-color: #313131;
width:100%;
height:60px;
display:flex;
align-items:center;
justify-content:space-around;
font-size:30px;
font-weight:bold;
color:#bababa;
z-index:1;
position:fixed;
`

function Header(){
    const setisDark = useSetRecoilState(isDarkAtom);
    const OnDark = () => {
    setisDark(prev => !prev)
}   
let user = useSelector((state:any) => state.UserSlice);
console.log(user.ID)
return(
    <>
    <Navbar>
        {user?.isLogin? (
            <span style={{fontSize:'15px',marginLeft:'-35px'}}>
            <FaGrinHearts style={{position:'fixed',left:0}}/>
            {`${user.ID}님 안녕하세요!`}
            </span>  
            ) : null}
        <Link className="HeaderComponents" to='/'>
            Just Do it
        </Link>
        <Link className="HeaderComponents" to='/calander'>
            Calander
        </Link>
        <Link className="HeaderComponents" to='/checklist'>
            Checklist
        </Link>
        <Link className="HeaderComponents" to='/four'>
            Go To Four
        </Link>
        <Link className="HeaderComponents" to='/login'>
            User
        </Link>
        <BiBrightnessHalf style={{right:0 ,cursor:'pointer'}} onClick={OnDark}/>
    </Navbar>

    </> 
    )
    
}

export default Header;