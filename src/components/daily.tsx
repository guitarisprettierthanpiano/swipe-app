import * as React from 'react';

interface Props{
    dailyData: Array<8>;
}

const Daily: React.FC<Props> = (props) => {

    return(
    <div className='daily-container'>
        <h1>DAILY</h1>
        <h3>{props.dailyData[0]}</h3>
        <h3>{props.dailyData[1]}</h3>
        <h3>{props.dailyData[2]}</h3>
        <h3>{props.dailyData[3]}</h3>
        <h3>{props.dailyData[4]}</h3>
        <h3>{props.dailyData[5]}</h3>
        <h3>{props.dailyData[6]}</h3>
        <h3>{props.dailyData[7]}</h3>
    </div>
    )
}

export default Daily;