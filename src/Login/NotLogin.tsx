import styled from "styled-components";
import {useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { loginUser } from './Reducer/UserSlice';
import { Link } from "react-router-dom";

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
    width:60px;
    height:30px;
    border-radius:30px;
    border:0px;
    background-color:#cc9900;
    position:relative;
}
span:nth-child(2){
    position:absolute;
    margin-top:300px;
    font-size:13px;
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
        .then(
            (res)=>(res.data.filter((uu:{ID:string}) => uu.ID == body.ID) != '') ? 
            (
            (
                res.data.filter((u:{ID:string,Password:string}) => u.ID == body.ID)[0].Password === body.Password) ?
                (
                    axios.post('http://localhost:3000/users',body)
                    .then(res2 => {dispatch(loginUser(res2.data));})
                ) 

                :setmsg('비밀번호를 확인해주세요')
            ):
            setmsg('ID 또는 비밀번호를 확인해주세요'))
    };
    

    
    return(
        <LoginWrapper>
            <LoginForm onSubmit={onSubmitHandler}>
                    <span>Just Do It에 로그인 하세요</span>
                    <span>Just Do It 아이디가 없습니까?</span>
                    <Link style={{position:'absolute', marginTop:'340px',fontSize:'13px'}} to='/signup'>그럼 지금 만드세요!</Link>
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