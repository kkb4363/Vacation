import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { isDarkAtom } from "../atom";
import { BiBrightnessHalf } from "react-icons/bi";
import { Link } from "react-router-dom";
import '../Style.css';

const Navbar = styled.div`
top:0;
background-color: #313131;
width:100%;
height:60px;
display:flex;
align-items:center;
justify-content:center;
font-size:30px;
font-weight:bold;
color:#bababa;
position:relative;
`

function Header(){
    const setisDark = useSetRecoilState(isDarkAtom);
    const OnDark = () => {
    setisDark(prev => !prev)
}   
    
return(
    <>
    <Navbar>
        <Link className="HeaderComponents" style={{marginLeft:'120px',left:0}} to='/'>
            Just Do it
        </Link>
        <Link className="HeaderComponents" style={{marginRight:'630px'}} to='/calander'>
            Calander
        </Link>
        <Link className="HeaderComponents" style={{marginRight:'240px'}} to='/third'>
            Go To Third
        </Link>
        <Link className="HeaderComponents" style={{marginRight:'-180px'}} to='/four'>
            Go To Four
        </Link>
        <Link className="HeaderComponents" style={{marginRight:'-600px'}} to='/five'>
            Go To Five
        </Link>
        <BiBrightnessHalf style={{position:'absolute', right:0 ,marginRight:'180px',cursor:'pointer'}} onClick={OnDark}/>
    </Navbar>

    </> 
    )
    
}

export default Header;