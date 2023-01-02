import {
    DragDropContext,
    DropResult,
} from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { todoState } from "../atom";
import TodoBoard from "./TodoBoard";

const TodoWrapper = styled.div`
display:flex;
max-width:500px;
width:100vw;
margin:0 auto;
justify-content:center;
align-items:center;
height:100vh;
margin-top:-100px;
`
const Boards = styled.div`
display:flex;
align-items:flex-start;
width:1200px;
grid-template-columns:repeat(3,1fr);
gap:10px;
`

const Overlay = styled.div`
width:2000px;
height:2000px;
background-color:tomato;
`


function ShowTodo(){
    const [todos, setTodos] = useRecoilState(todoState);
    
    const onDragEnd = (info : DropResult) => {
        const {destination , draggableId, source} = info;
        console.log(info);
    if(!destination) return;
    if(destination?.droppableId === source.droppableId){
        //same board movement
        setTodos((allboards) => {
            const boardCopy = [...allboards[source.droppableId]];
            boardCopy.splice(source.index,1);
            boardCopy.splice(destination?.index, 0, draggableId);
            return{
                ...allboards,
                [source.droppableId]:boardCopy
                }
        });
    }
    else if(destination.droppableId !== source.droppableId){
        //cross board movement
        setTodos((allboards) => {
            const sourceBoard = [...allboards[source.droppableId]];
            const destinationBoard = 
            [...allboards[destination.droppableId]];
            sourceBoard.splice(source.index, 1);
            destinationBoard.splice(destination?.index, 0, draggableId);
            return{
                ...allboards,
                [source.droppableId]: sourceBoard,
                [destination.droppableId]: destinationBoard,
            }
        })
        }
    };

    return(<DragDropContext onDragEnd={onDragEnd}>
        <TodoWrapper>
            <Boards>
                {Object.keys(todos).map((boardId) => (
                    <TodoBoard boardId={boardId} key={boardId} todos={todos[boardId]}/>
                ))}
            </Boards>
        </TodoWrapper>
    </DragDropContext>)
}

export default ShowTodo;