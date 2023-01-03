import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

interface ITodoCard{
    todoID:number;
    todoText:string;
    index:number;
}


const Card = styled.div`
border-radius:5px;
margin-bottom:5px;
padding:10px 10px;
background-color:white;
border:1px solid black;
`

function TodoCard({todoID,todoText,index}: ITodoCard){
    return(
        <Draggable draggableId={todoID+' '} index={index}>
            {(magic) => (
                <Card
                ref={magic.innerRef}
                {...magic.draggableProps}
                {...magic.dragHandleProps}>
                {todoText}
                </Card>
            )}
        </Draggable>
    )
}

export default React.memo(TodoCard);