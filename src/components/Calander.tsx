import '../Calander/CStyle.css';
import {useState} from 'react';
import { addMonths, subMonths } from 'date-fns';
import CHeader from '../Calander/CHeader';
import CDays from '../Calander/CDays';
import CMain from '../Calander/CMain';

function Calander(){
    const [currentMonth, setCurrentMonth] = useState(new Date());

    const prevMonth = () => {
        setCurrentMonth(subMonths(currentMonth,1));
    };

    const nextMonth = () => {
        setCurrentMonth(addMonths(currentMonth,1));
    };
    return(
        <>
        <CHeader
            currentMonth={currentMonth}
            prevMonth={prevMonth}
            nextMonth={nextMonth}/>

        <CDays/>

        <CMain currentMonth={currentMonth}/>
        </>
    )
}

export default Calander;