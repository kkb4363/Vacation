import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { isDarkAtom } from "../atom";
import { BiBrightnessHalf } from "react-icons/bi";
import { Link } from "react-router-dom";

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
div:first-child{
    position:absolute;
    font-size:18px;
    left:0;
    margin-left:180px;
`

function Header(){
    const setisDark = useSetRecoilState(isDarkAtom);
    const OnDark = () => {
    setisDark(prev => !prev)
}   
    
return(
    <>
    <Navbar>
        <div><Link style={{color:'white' , opacity:0.7}} to='/'>Just Do it</Link></div>
        <div style={{position:'absolute', marginRight:'800px', fontSize:'18px'}}><Link style={{color:'white' , opacity:0.7}} to='/Second'>Go Secondpage</Link></div>
        <BiBrightnessHalf style={{position:'absolute', right:0 ,marginRight:'180px'}} onClick={OnDark}/>
    </Navbar>

    </> 
    )
    
}

export default Header;