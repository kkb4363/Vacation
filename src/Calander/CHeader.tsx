import {AiTwotoneCalendar} from "react-icons/ai";
import {format} from 'date-fns';
import {AiOutlineLeft,AiOutlineRight} from "react-icons/ai";

const ArrowStyle = {color:'#696969' , fontSize:'22px'};

const CHeader = ({currentMonth, prevMonth, nextMonth}:any) => {
    return(
        <>
        <div className='main'>
            <h5 style={{color:'white', fontSize:'16px', marginRight:'700px'}}>
                {format(currentMonth, 'yyyy')}년 {format(currentMonth, 'M')}월 
                {/* format 형식 = y는 연도, m은 월, d는 일을 나타냄. */}
            </h5>

            <div>
            {/* 저번달로 가는 화살표 */}
            <AiOutlineLeft onClick={prevMonth} style={ArrowStyle}/>
            <h4 style={{color:'white',fontSize:'16px'}}> 
            오늘 
            </h4>
            {/* 다음달로 가는 화살표 */}
            <AiOutlineRight onClick={nextMonth} style={ArrowStyle}/>
            </div>
            
        
        </div>
        </>
    )
}

export default CHeader;