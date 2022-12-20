import styled from "styled-components";
import {useState} from 'react';
import { useDispatch } from "react-redux";

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

const LoginForm = styled.form`
display:flex;
justify-content:center;
flex-direction:column;
font-weight:600;
`


function Login(){

    const [ID,setID] = useState('');
    const [Password, setPassword] = useState('');

    const onIDHandler = (event:any) => {
        setID(event.currentTarget.value);
    }

    const onPasswordHandler = (event:any) => {
        setPassword(event.currentTarget.value);
    }

    const onSubmitHandler = (event:any) => {
        event.preventDefault();
    }
    console.log('ID:', ID);
    console.log('Password' , Password);

    let body = {
        ID: ID,
        Password: Password,
    }
    
    return(
        <LoginWrapper>
            <LoginForm onSubmit={onSubmitHandler}>
                    <label>ID</label>
                    <input required placeholder="ID" type='text' value={ID} onChange={onIDHandler}/>
                    <label>Password</label>
                    <input required placeholder="Password" type='password' value={Password} onChange={onPasswordHandler}/>
                <button formAction="">
                    Login
                </button>
            </LoginForm>
        </LoginWrapper>
    )
}

export default Login;