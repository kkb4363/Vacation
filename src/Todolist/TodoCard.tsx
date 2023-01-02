import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

interface ITodoCard{
    todo:string;
    index:number;
}


const Card = styled.div`
border-radius:5px;
margin-bottom:5px;
padding:10px 10px;
background-color:white;
border:1px solid black;
`

function TodoCard({todo,index}: ITodoCard){
    return(
        <Draggable draggableId={todo} index={index}>
            {(magic) => (
                <Card
                ref={magic.innerRef}
                {...magic.draggableProps}
                {...magic.dragHandleProps}>
                {todo}
                </Card>
            )}
        </Draggable>
    )
}

export default React.memo(TodoCard);