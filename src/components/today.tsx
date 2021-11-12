import * as React from 'react';

interface Props{
    todayData: number;
}

const Today: React.FC<Props> = (props) => {

    return(
    <div className='today-container'>
        <h1>Today{props.todayData}</h1>
    </div>
    )
}

export default Today;