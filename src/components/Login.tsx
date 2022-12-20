import styled from "styled-components";
import {useState} from 'react';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";
import axios from "axios";
import { loginUser } from '../Reducer/UserSlice';

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
    const dispatch = useDispatch();

    let user = useSelector((state:any) => {return state.user});

    const [msg, setmsg] = useState('');
    const [ID,setID] = useState('');
    const [Password, setPassword] = useState('');

    const onIDHandler = (event:any) => {
        setID(event.currentTarget.value);
    };
    const onPasswordHandler = (event:any) => {
        setPassword(event.currentTarget.value);
    };

    const onSubmitHandler = (event:any) => {
        event.preventDefault();
        let body = {
            ID,
            Password
        }
        axios.post('api주소',body)
        .then((res)=>{
            console.log(res.data)
            switch(res.data.code){
                case 200:
                    console.log('login');
                    dispatch(loginUser(res.data.userInfo));
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
    };
    

    
    return(
        <LoginWrapper>
            <LoginForm onSubmit={onSubmitHandler}>
                    <label>ID</label>
                    <input required placeholder="ID" type='text' value={ID} onChange={onIDHandler}/>
                    <label>Password</label>
                    <input required placeholder="Password" type='password' value={Password} onChange={onPasswordHandler}/>
                <button type="submit">
                    Login
                </button>
            </LoginForm>
        </LoginWrapper>
    )
}

export default Login;