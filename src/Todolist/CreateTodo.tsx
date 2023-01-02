import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import {PathMatch, useMatch} from 'react-router-dom';
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { Iform, todoState } from "../atom";

const Writebtn = styled.button`
width:250px;
height:50px;
border-radius:20px;
margin:0 auto;
left:0;
right:0;
margin-top:20px;
display:flex;
justify-content:center;
align-items:center;
font-size:18px;
font-weight:600;
border:1px solid green;
`
const WriteInput = styled.input`
width:500px;
height:70px;
margin:0 auto;
display:flex;
left:0;
right:0;
margin-top:150px;
border-radius:20px;
font-size:16px;
`

function CreateTodo(){
    const  Navigate = useNavigate();
    const [todo,settodo] = useRecoilState(todoState);
    
    console.log(todo)
    const TodoPathMatch: PathMatch<string> | null = useMatch("/todolist:boardId");
    

    const {register, handleSubmit, setValue} = useForm<Iform>();
    const onCreateTodo = ([text]:IForm) => {
        settodo((prev) => prev)
    }

    return(
        <form onSubmit={handleSubmit(onCreateTodo)}>
        <WriteInput {...register('text')} placeholder='새로운 todo를 작성해보세요!'/>
        <Writebtn type='submit' onSubmit={onCreateTodo}>추가하기</Writebtn>
        </form>
    )
}

export default CreateTodo;