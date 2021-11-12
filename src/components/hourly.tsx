import * as React from 'react';

interface Props{
    hourlyData: Array<24>;
}

const Hourly: React.FC<Props> = (props) => {

    return(
    <div className='hourly-container'>
        <h1>HOURLY {props.hourlyData[5]}</h1>
    </div>
    )
}

export default Hourly;