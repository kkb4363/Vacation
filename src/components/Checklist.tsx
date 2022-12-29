import { useState } from "react";
import styled from "styled-components";
import { FiCheckCircle } from "react-icons/fi";
import { checklistState } from "../atom";
import { useRecoilState } from "recoil";

const Table = styled.table`
display:flex;
left:0;
right:0;
margin:0 auto;
margin-top:100px;
justify-content:center;
align-items:center;
`

const TD = styled.td`
padding:20px;
padding-left:50px;
font-size:15px;
font-weight:600;
border-bottom: 2px solid #eee;
`


function Checklist(){
    const data = [
        {id:0, title:'계획한 시간에 일어나기'},
        {id:1, title:'긍정적인 말 한마디 이상 하기'},
        {id:2, title:'손톱 발톱 단정히 정리하기'},
        {id:3, title:'외출 시 썬크림 바르기'},
        {id:4, title:'영양제, 비타민 챙겨 먹기'},
        {id:5, title:'허리 꼿꼿이 피고 바른 자세 유지하기'},
        {id:6, title:'세탁 잘 한 깨끗한 옷 입기'},
        {id:7, title:'치아 관리, 양치질 잘 하기'},
        {id:8, title:'독서 20분 하기'},
        {id:9, title:'거울 보며 웃는 연습하기'},
        {id:10, title:'술 담배 등의 유혹 참기'},
        {id:11, title:'부모님과 사진 찍기 or 일상 대화 잠깐이라도 하기'},
        {id:12, title:'하늘 한 번 이상 보기'},
        {id:13, title:'소중한 사람에게 표현하기'},
        {id:14, title:'틈틈이 오늘 할 일 체크리스트 점검하기'},
        {id:15, title:'운동 30분 하기 or 바쁘면 스트레칭 틈틈이 하기'},
        {id:16, title:'야식 먹지 않기'},
        {id:17, title:'물 최소 두잔 이상 마시기'},
        {id:18, title:'방 정리 5분 하기'},
        {id:19, title:'지나가다 보이는 쓰레기 한 개라도 줍기'}
    ]
    
    const [currentItems, setCurrentItems] = useRecoilState(checklistState);
    const [checkItems, setCheckItems] = useState([] as any);
    
    const onCheck = (checked:boolean, id:number) => {
        if(checked){
            setCheckItems((prev:[prev:any]) => [...prev, id])
            setCurrentItems(checkItems);
        }
        else{
            setCheckItems(checkItems.filter((el: number)=> el != id ))
            setCurrentItems(checkItems);
        }
    }
    console.log(currentItems);
    return(
        <Table>
            <tbody>
                {data?.map((data,key) => (
                    <tr key={key}>
                        <td>
                            <input type='checkbox'
                                onChange={(e) => onCheck(e.target.checked, data.id)}
                                checked={checkItems.includes(data.id) ? true:false}/>
                        </td>
                        <TD>
                            {data.title}
                            
                        </TD>
                    </tr>
                ))}

            </tbody>
        </Table>
    )
}

export default Checklist;