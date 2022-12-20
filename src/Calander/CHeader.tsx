import {format} from 'date-fns';
import {AiOutlineLeft,AiOutlineRight} from "react-icons/ai";
import { useRecoilValue } from 'recoil';
import { isDarkAtom } from '../atom';

const ArrowStyle = {color:'#696969' , fontSize:'22px' , margin:'0px 5px', cursor:'pointer'};

const CHeader = ({currentMonth, prevMonth, nextMonth}:any) => {
    const isDark = useRecoilValue(isDarkAtom);

    return(
        
        <div className='CHeader_div'>
            
            {isDark ? 
            <h5>
            {format(currentMonth, 'yyyy')}년 {format(currentMonth, 'M')}월 
            </h5>
            : 
            <h5 style={{color:'black'}}>
                {format(currentMonth, 'yyyy')}년 {format(currentMonth, 'M')}월 
            </h5>}

            

            <div className="CHeader_ArrowCss">

            <AiOutlineLeft onClick={prevMonth} style={ArrowStyle}/>
            
            {isDark ?
            <h4 style={{color:'white',fontSize:'16px'}}> 
            오늘 
            </h4> 
            :
            <h4 style={{color:'black',fontSize:'16px'}}> 
            오늘 
            </h4>}
            
    
            <AiOutlineRight onClick={nextMonth} style={ArrowStyle}/>
            </div>
            
        
        </div>
        
    )
}

export default CHeader;