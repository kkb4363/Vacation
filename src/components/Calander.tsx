import '../Calander/CStyle.css';
import {useState} from 'react';
import { addMonths, subMonths } from 'date-fns';
import CHeader from '../Calander/CHeader';
import CDays from '../Calander/CDays';
import CMain from '../Calander/CMain';
import styled from 'styled-components';

const CalanderWrapper = styled.div`
margin: 0 auto;
left:0;
right:0;
display:flex;
flex-direction:column;
width:900px;
height:900px;
position:relative;
`;


function Calander(){
    const [currentMonth, setCurrentMonth] = useState(new Date());

    const prevMonth = () => {
        setCurrentMonth(subMonths(currentMonth,1));
    };

    const nextMonth = () => {
        setCurrentMonth(addMonths(currentMonth,1));
    };
    return(
        <CalanderWrapper>
        <CHeader
            currentMonth={currentMonth}
            prevMonth={prevMonth}
            nextMonth={nextMonth}/>

        <CDays/>

        <CMain currentMonth={currentMonth}/>
        </CalanderWrapper>
    )
}

export default Calander;