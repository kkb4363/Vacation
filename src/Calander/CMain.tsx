import {addDays, startOfMonth, endOfMonth, endOfWeek, startOfWeek, format} from 'date-fns';

const CMain = (currentMonth:any) => {
    const monthStart = startOfMonth(currentMonth.currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);
    
    let day = startDate;
    let days = [] as any;
    let line = [] as any;
    let formattedDate = '';

    while(day<=endDate){
        for(let i=0; i<7; i++){
            formattedDate = format(day,'d').padStart(2,'0').toString();
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
                    <div className='divDay' key={day+'100'}>
                        <span>
                            {formattedDate}
                        </span>
                    </div>
                )
            }
            day = addDays(day,1);
        }
        line.push(
            <div className='divWeek' key={day+'1000'}>
                {days}
            </div>
        )
        days = [];
    }

    return(
        <>
        {<div className='divWrapper'>
            {line}
        </div>}
        </>
    )

}


export default CMain;