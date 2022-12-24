import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";


const LoginWrapper = styled.div`
width:500px;
height:500px;
display:flex;
margin:0 auto;
left:0;
justify-content:center;
align-items:center;
right:0;
margin-top:200px;
`

const LoginForm = styled.form`
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
font-weight:600;
span:first-child{
    font-size:25px;
    margin-bottom:20px;
}
input{
    width:250px;
    height:50px;
    border-radius:20px;
    border:1px solid rgba(0,0,0,0.5);
    margin-bottom:10px;
}
button{
    width:80px;
    height:30px;
    border-radius:30px;
    border:0px;
    background-color:#cc9900;
    position:relative;
    cursor:pointer;
}
span:nth-child(2){
    position:absolute;
    margin-top:300px;
    font-size:13px;
}
`


function Signup(){
    const [ID , SETID] = useState('');
    const [Password, SETPASSWORD] = useState('');
    const navigate = useNavigate();

    const onSubmit = (event:any) => {
        event.preventDefault();
        let body:any = {
            ID,Password
        }
        axios.post('http://localhost:3000/users', body)
        .then((res)=>{
            console.log(res)

        })
    }
    return(
        <LoginWrapper>
            <LoginForm onSubmit={onSubmit}>
                <label htmlFor="sid"/>
                <input value={ID} type="text" id='sid' onChange={e => SETID(e.target.value)} placeholder="사용하실 ID를 입력해주세요."></input>
                <label htmlFor="spassword"/>
                <input value={Password} type="password" id='spassword' onChange={e => SETPASSWORD(e.target.value)} placeholder="사용하실 Password를 입력해주세요."></input>
                <button type='submit'>회원가입</button>
            </LoginForm>
        </LoginWrapper>
    )
}

export default Signup;