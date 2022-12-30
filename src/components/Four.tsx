import {
    DragDropContext,
    Droppable,
    Draggable,
    DropResult,
  } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { todoState } from "../atom";

const TodoWrapper = styled.div`
display:flex;
max-width:500px;
width:100%;
margin:0 auto;
justify-content:center;
align-items:center;
height:100vh;
`
const Boards = styled.div`
display:grid;
width:100%;
grid-template-columns:repeat(1,1fr);
`

const Board = styled.div`
padding: 20px 10px;
padding-top:30px;
background-color:green;
border-radius:5px;
min-height:200px;
`

const Card = styled.div`
border-radius:5px;
margin-bottom:5px;
padding:10px 10px;
background-color:tomato;
`


function Todolist(){
    const [todos, setTodos] = useRecoilState(todoState);
    const onDragEnd = () => {};
    return(
    <DragDropContext onDragEnd={onDragEnd}>
        <TodoWrapper>
            <Boards>
                <Droppable droppableId="one">
                    {(magic) => (
                        <Board ref={magic.innerRef} {...magic.droppableProps}>

                        </Board>
                    )}
                </Droppable>
            </Boards>
        </TodoWrapper>
    </DragDropContext>
    )
}

export default Todolist;