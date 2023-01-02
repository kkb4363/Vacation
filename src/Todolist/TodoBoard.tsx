import styled from "styled-components";
import {Droppable} from 'react-beautiful-dnd';
import TodoCard from "./TodoCard";


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

interface IBoard{
    todos:string[];
    boardId:string;
}

function TodoBoard({todos, boardId} : IBoard){
    return(
    <Wrapper>
        <Title>{boardId}</Title>
        <Droppable droppableId={boardId}>
                    {(magic) => (
                        <Board ref={magic.innerRef} {...magic.droppableProps}>
                            {todos.map((todo,index)=>(
                            <TodoCard key={todo} index={index} todo={todo}/>    
                            ))}
                        {magic.placeholder}
                    </Board>
                )}
        </Droppable>
    </Wrapper>
    )
}

export default TodoBoard;