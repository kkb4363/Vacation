import styled from 'styled-components';

const DaysWrapper = styled.div`
display:flex;
justify-content:space-between;
width:880px;
position:absolute;
margin-top:20px;
margin-left:180px;
`

const DaysDiv = styled.div`
width:120px;
height:30px;
display:flex;
justify-content:center;
align-items:center;
color:#808080;
`

function CDays(){
    const days=[] as any;
    const date = ['일','월','화','수','목','금','토'];

    for(let i=0; i<7; i++){
        days.push(
            <DaysDiv key={date[i]}>
                {date[i]}
            </DaysDiv>
        )
    }
    return(
        <>
        <DaysWrapper>{days}</DaysWrapper>
        </>
    )
}

export default CDays;