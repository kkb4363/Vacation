import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { isDarkAtom } from "../atom";
import { BiBrightnessHalf } from "react-icons/bi";

const Navbar = styled.div`
top:0;
background-color: tomato;
width:100%;
height:70px;
display:flex;
align-items:center;
justify-content:center;
font-size:30px;
font-weight:bold;
position:relative;
div{
    position:absolute;
    font-size:15px;
    right:0;
    margin-right:30px;
}
`


function Header(){
    const setisDark = useSetRecoilState(isDarkAtom);
    const OnDark = () => {
    setisDark(prev => !prev)
}   
    
return(
    <>
    <Navbar>My Todolist
        <div onClick={OnDark}>Dark/light</div>
        <BiBrightnessHalf style={{position:'absolute', right:0}} onClick={OnDark}/>
    </Navbar>

    </> 
    )
    
}

export default Header;