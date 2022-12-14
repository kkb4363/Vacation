import styled from "styled-components";
import {Droppable} from 'react-beautiful-dnd';
import TodoCard from "./TodoCard";
import { ITodo, todoState, Iform } from "../atom";
import { useSetRecoilState } from "recoil";
import { useForm } from "react-hook-form";
import { BsFillXCircleFill } from "react-icons/bs";
import { format } from "date-fns";


const Wrapper = styled.div`
width:600px;
min-height:500px;
padding: 20px 10px;
padding-top:10px;
background-color:gray;
opacity:0.7;
border-radius:5px;
`

const Title = styled.h2`
text-align:center;
font-weight:600;
margin-bottom:10px;
font-size:18px;
color:black;
`

const Board = styled.div`
padding: 20px 10px;
padding-top:30px;
border-radius:5px;
min-height:200px;
`

const ToInput = styled.input`
    width:250px;
    height:30px;
`

const CardWrapper = styled.div`

`

interface IBoard{
    todos:ITodo[];
    boardId:string;
}

function TodoBoard({todos, boardId} : IBoard){
    const today = format(new Date(),'dd');
    const saveday = today;
    
    const setTodos = useSetRecoilState(todoState);
    const {register, setValue, handleSubmit} = useForm<Iform>();
    const onValid = ({text}:Iform) => {
        const newTodo = {
            id:Date.now(),
            text
        };
        setTodos((all) => {
            return{
                ...all,
                [boardId] : [newTodo, ...all[boardId]],
            }
        })
        setValue('text', '');
    }

    const ondelete = (todoID:number) => {
        setTodos((all) => {
            return{
                ...all,
                [boardId] : [...all[boardId].filter((id)=> id.id != todoID)]
            }
        })
    }

    return(
    <Wrapper>
        <Title>{boardId}</Title>
        <form style={{display:'flex', justifyContent:'center'}} onSubmit={handleSubmit(onValid)}>
            <ToInput 
                    {...register('text')}
                    type='text'
                    placeholder="새로운 TODO를 작성해보세요!"/>
        </form>
        <Droppable droppableId={boardId}>
                    {(magic) => (
                        <Board ref={magic.innerRef} {...magic.droppableProps}>
                            {todos.map((todo,index)=>(
                                <CardWrapper>
                                    <TodoCard 
                                    key={todo.id} 
                                    index={index} 
                                    todoID={todo.id} 
                                    todoText={todo.text}/>
                                    <BsFillXCircleFill
                                    onClick={() => ondelete(todo.id)}
                                    style={{position:'absolute',marginTop:'-32px',marginLeft:'330px',cursor:'pointer'}}/>
                                </CardWrapper>
                        
                            ))}
                        {magic.placeholder}
                    </Board>
                )}
        </Droppable>
    </Wrapper>
    )
}

export default TodoBoard;