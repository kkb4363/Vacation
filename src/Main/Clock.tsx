import { format } from "date-fns";
import { useEffect, useState } from "react";
import styled from "styled-components";

const ClockWrapper = styled.div`
width:550px;
height:300px;
border-radius:20px;
font-size:100px;
left:0;
right:0;
display:flex;
margin:0 auto;
justify-content:center;
align-items:center;
font-weight:600;
font-color:${(props) => props.theme.textColor};
`


function Clock(){
    const time = new Date();
    const Hours = time.getHours().toString().padStart(2,'0');
    const Minutes = time.getMinutes().toString().padStart(2,'0');
    const Seconds = time.getSeconds().toString().padStart(2,'0');

    const [now , setNow] = useState('00-00-00');

    // setInterval(()=>{
    //     setNow(`${Hours}-${Minutes}-${Seconds}`);
    // },1000)

    console.log(Hours,Minutes,Seconds);
    return(
        <ClockWrapper>
            {now}
        </ClockWrapper>
    )
}

export default Clock;