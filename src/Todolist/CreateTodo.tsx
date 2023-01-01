import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { ITodo, todoState } from "../atom";

const Writetodo = styled.div`
width:250px;
height:50px;
border-radius:20px;
margin:0 auto;
left:0;
right:0;
margin-top:200px;
display:flex;
justify-content:center;
align-items:center;
font-size:18px;
font-weight:600;
border:1px solid green;
`

function CreateTodo(){
    const [cmode,setCmode] = useState(false);
    const onCreateTodo = () => {
        console.log('gg');
    }

    return(
        <>
        <Writetodo onClick={onCreateTodo}>새로운 todo를 작성하세요!!</Writetodo>
        </>
    )
}

export default CreateTodo;