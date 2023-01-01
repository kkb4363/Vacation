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
margin-top:-230px;
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

const Overlay = styled.div`
width:2000px;
height:2000px;
background-color:tomato;
`


function ShowTodo(){
    const [todos, setTodos] = useRecoilState(todoState);
    const onDragEnd = ({ destination, source }: DropResult) => {};
    return(<DragDropContext onDragEnd={onDragEnd}>
        <TodoWrapper>
            <Boards>
                <Droppable droppableId="one">
                    {(magic) => (
                        <Board ref={magic.innerRef} {...magic.droppableProps}>
                            {todos.map((todo,index)=>(
                                <Draggable key={index} draggableId={todo} index={index}>
                                    {(magic) => (
                                        <Card
                                        ref={magic.innerRef}
                                        {...magic.draggableProps}
                                        {...magic.dragHandleProps}>
                                        {todo}
                                        </Card>
                                    )}
                                </Draggable>
                        ))}
                        {magic.placeholder}
                    </Board>
                )}
                </Droppable>
            </Boards>
        </TodoWrapper>
    </DragDropContext>)
}

export default ShowTodo;