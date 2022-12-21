import styled from "styled-components";
import {useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { loginUser } from './Reducer/UserSlice';

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


function NotLogin(){
    const dispatch = useDispatch();
    const [msg, setmsg] = useState('');
    const [ID,setID] = useState('');
    const [Password, setPassword] = useState('');

    const onSubmitHandler = (event:any) => {
        event.preventDefault();
        let body:any= {
            ID,
            Password
        }
        axios.post('http://localhost:3000/users',body)
        .then((res)=>{
            console.log(res)
            switch(res.status){
                case 201:
                    console.log('login');
                    dispatch(loginUser(res.data));
                    setmsg('');
                    break;
                case 400:
                    setmsg('ID, Password가 비어있습니다');
                    break;
                case 401:
                    setmsg('존재하지 않는 ID입니다');
                    break;
                case 402:
                    setmsg('Password가 틀립니다.');
                    break;
                default:
                    break;
            }
        })
        .catch((err) => console.log(err));
    };
    

    
    return(
        <LoginWrapper>
            <LoginForm onSubmit={onSubmitHandler}>
                    <label htmlFor="id">ID</label>
                    <input required 
                            placeholder="ID" 
                            type='text' 
                            value={ID} 
                            id='id'
                            onChange={(e) => setID(e.target.value)} />

                    <label htmlFor="password">Password</label>
                    <input required
                            placeholder="Password" 
                            type='password' 
                            value={Password} 
                            id='password'
                            onChange={(e) => setPassword(e.target.value)}/>
                            
                <button type="submit">
                    Login
                </button>
            {msg}
            </LoginForm>
        </LoginWrapper>
    )
}

export default NotLogin;