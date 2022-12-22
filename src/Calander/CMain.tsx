import {addDays, startOfMonth, endOfMonth, endOfWeek, startOfWeek, format} from 'date-fns';
import { useNavigate } from 'react-router';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { calanderState, Iform, isDarkAtom } from '../atom';
import { useMatch, PathMatch } from "react-router-dom";
import { motion } from 'framer-motion';
import styled from "styled-components";
import {useForm} from 'react-hook-form';


const BigDay = styled(motion.div)`
width:500px;
height:500px;
border-radius:100px;
background-color:rgba(0,0,0,0.5);
position:absolute;
top:150px;
display:flex;
left:0;
margin:0 auto;
right:0;
position:fixed;
color:white;
button{
    position:absolute;
}
`

const Overlay = styled(motion.div)`
width:11000px;
margin-left:-6000px;
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

    const [Cal,setCal] = useRecoilState(calanderState);
    const {register, handleSubmit,setValue} = useForm<Iform>();
    const handleValid = ({text}:Iform) => {
        setCal((prev) => [...prev,{
            id:DayPathMatch?.params.day ,text:text+'\n'
        }]);
        setValue('text','');
    }
    
    
    const onDelete = (id?:string) => {
        setCal(Cal.filter(cal => cal.id != id));
    } 

    let day = startDate;
    let days = [] as any;
    let line = [] as any;
    let formattedDate = '';

    while(day<=endDate){
        for(let i=0; i<7; i++){
            formattedDate = format(day,'d').padStart(2,'0').toString();
            const Day = format(day,'yyyyMMdd').toString();
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
                    <div onClick={() => onDayClick(Day)} className='divDay' key={day+'100'}>
                        <span>
                            {formattedDate}
                        </span>
                        <span style={{whiteSpace:'pre-wrap',position:'absolute',marginTop:'20px',fontSize:'12px',fontWeight:600,marginLeft:'3px'}}>
                        {Cal.map(cal => cal.id === Day ? cal.text : null) }
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

    return(
        <div>
        {<div className='divWrapper'>
            {line}
        </div>}

        {DayPathMatch ? 
        <>
        <Overlay onClick={onOverlayClick}/>
        
        {isDark?
        (<BigDay style={{backgroundColor:'#808080', opacity:0.7}}>
            <form onSubmit={handleSubmit(handleValid)} className='BigDayWrapper'>
                    <input {...register('text')} className='BigDayInput' placeholder="Write whatever you want!"/>
                    <button type='submit' style={{marginTop:'500px',marginLeft:'-100px'}} className='BigDayButton'>ADD</button>
                    <button onClick={()=> onDelete(DayPathMatch?.params.day)} style={{marginTop:'500px',marginRight:'-200px'}} className='BigDayButton'>DELETE</button>
            </form>
        </BigDay>) 
        : 
        (<BigDay>
            <form onSubmit={handleSubmit(handleValid)} className='BigDayWrapper'>
                    <input {...register('text')} className='BigDayInput' placeholder="Write whatever you want!"/>
                    <button type='submit' style={{marginTop:'500px',marginLeft:'-100px'}} className='BigDayButton'>ADD</button>
                    <button onClick={()=> onDelete(DayPathMatch?.params.day)} style={{marginTop:'500px',marginRight:'-200px'}} className='BigDayButton'>DELETE</button>
            </form>
        </BigDay>)}
        
        
        </> : null}
        </div>
    )

}


export default CMain;