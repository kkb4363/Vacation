import styled from "styled-components";
import {useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { loginUser } from './Reducer/UserSlice';

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
span{
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
    width:60px;
    height:30px;
    border-radius:30px;
    border:0px;
    background-color:#cc9900;
}
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
        axios.get('http://localhost:3000/users')
        .then((res)=>{
            console.log(res.data)
            if(res.data.filter((user:{ID:string, Password:string}) => (user.ID == body.ID))[0].Password == body.Password){
                axios.post('http://localhost:3000/users',body)
                .then(res2 => {dispatch(loginUser(res2.data));})
                console.log('로그인 완료');
                setmsg('');
                axios.delete('http://localhost:3000/users',{
                    data:{ID:body.ID,
                    Password:body.Password}
                });
            }
            else{
                console.log('ID 또는 비밀번호를 확인하세요');
                setmsg('ID 또는 비밀번호를 확인해주세요');
            }
        })
        .catch((err) => console.log(err));
    };
    

    
    return(
        <LoginWrapper>
            <LoginForm onSubmit={onSubmitHandler}>
                    <span>Just Do It에 로그인 하세요</span>
                    <label htmlFor="id"></label>
                    <input required 
                            placeholder="ID" 
                            type='text' 
                            value={ID} 
                            id='id'
                            onChange={(e) => setID(e.target.value)} />

                    <label htmlFor="password"></label>
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