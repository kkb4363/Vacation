import styled from "styled-components";
import React, {useRef, useState} from 'react';
import TodoInput from './TodoInput';
import Todolist from './Todolist';

const Wrapper = styled.div`
width:100%;
height:1000px;
background-color:tomato;
`

interface Todo{
    id:number;
    text:string;
    done:boolean;
}

function Todos(){
    const num = useRef(1);
    const [todos, settodos] = useState([] as any);

    const onAdd = (text:any) => {
        settodos([
            ...todos,
            {
                id:num.current++,
                text:text,
                done:false
            }
        ])
    }

    const onDel = (id:any) => {
        settodos(todos.filter((todo: { id: any; }) => todo.id !== id));
    }

    
    return(
        <Wrapper>
            <TodoInput onAdd={onAdd}/>
            <Todolist todos={todos} onDel={onDel}/>
        </Wrapper>
    )
}

export default Todos;