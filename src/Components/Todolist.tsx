import { useState } from "react";
import CreateTodo from "../Todolist/CreateTodo";
import ShowTodo from "../Todolist/ShowTodo";


function Todolist(){
    return(
    <>   
    <CreateTodo/>
    <ShowTodo/>
    </>
    )
}

export default Todolist;