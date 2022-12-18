import {addDays, startOfMonth, endOfMonth, endOfWeek, startOfWeek, format} from 'date-fns';
import { useNavigate } from 'react-router';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { calState, IForm, isDarkAtom } from '../atom';
import { useMatch, PathMatch } from "react-router-dom";
import { motion } from 'framer-motion';
import styled from "styled-components";
import {useForm} from 'react-hook-form';


const BigDay = styled(motion.div)`
width:500px;
height:500px;
background-color:rgba(0,0,0,0.5);
position:absolute;
margin-left:370px;
top:50px;
position:fixed;
color:white;
`

const Overlay = styled(motion.div)`
width:100%;
height:100%;
position:fixed;
top:0;
background-color:rgba(0,0,0,0.5);
`

const CMain = (currentMonth:any) => {
    const monthStart = startOfMonth(currentMonth.currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);
    
    const isDark = useRecoilValue(isDarkAtom);
    const Navigate = useNavigate(); 

    const DayPathMatch: PathMatch<string> | null = useMatch("/calander/:day");

    const onDayClick = (Day:string) => {
        Navigate(`/calander/${Day}`);
    }

    const onOverlayClick = () => {
        Navigate('/calander');
    }
    
    let day = startDate;
    let days = [] as any;
    let line = [] as any;
    let formattedDate = '';

    while(day<=endDate){
        for(let i=0; i<7; i++){
            formattedDate = format(day,'d').padStart(2,'0').toString();
            const Day = formattedDate;
            if(format(monthStart,'M') != format(day,'M')){
                days.push(
                    <div className='divDay' key={day+'1'}>
                        <span className='notsamemonth' key={day+'10'}>
                            {formattedDate}
                        </span>
                    </div>
                )
            }
            else{
                days.push(
                    <div onClick={() => onDayClick(Day+'')} className='divDay' key={day+'100'}>
                        <span>
                            {formattedDate}
                        </span>
                    </div>
                )
            }
            day = addDays(day,1);
        }
        line.push(
            <div className={isDark? 'divWeek' : 'divWeekdark'} key={day+'1000'}>
                {days}
            </div>
        )
        days = [];
    }

    const setCalander = useSetRecoilState(calState);
    const {register, handleSubmit, setValue} = useForm<IForm>();
    const onWrite = ({today}:IForm) => {
        setCalander(old => [{id:Date.now() , text:today}, ...old] );
    }
    

    return(
        <div style={{position:'relative'}}>
        {<div className='divWrapper'>
            {line}
        </div>}

        {DayPathMatch ? 
        <>
        <Overlay onClick={onOverlayClick}/>
        <BigDay>
            <form className='BigDayWrapper' onSubmit={handleSubmit(onWrite)}>
                    <input className='BigDayInput' {...register('today')} placeholder="Write whatever you want!"/>
                    <button className='BigDayButton'>ADD</button>
            </form>
        </BigDay>
        </> : null}
        </div>
    )

}


export default CMain;