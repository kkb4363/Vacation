import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { categories, categoryState, toDoSelector, toDoState } from "../atom";
import Category from "./Category";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";



function Todolist(){
    {/* useReocilValue : 값만 반환해주는 함수 */} 
    const toDos = useRecoilValue(toDoSelector)
    {/* useRecoilState : 값과 더불어서 수정 함수도 제공함. */}
    

    return (
        <div>
            <hr/>
            <Category/>
            <CreateToDo/>
            {toDos?.map((toDo)=>(
                <ToDo key={toDo.id} {...toDo}/>
            ))}
            <hr/>
        </div>
    )
}

export default Todolist;