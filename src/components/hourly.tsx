import * as React from 'react';

interface Props{
    hourly_temps: Array<24>;
    hourly_hours: Array<24>;
}

const Hourly: React.FC<Props> = (props) => {

    return(
    <div className='hourly-container'>
        <h1>THIS HOUR IS {props.hourly_hours[0]}</h1>
        <h1>NEXT HOUR IS {props.hourly_hours[1]}</h1>
        <h1>NEXT HOUR IS {props.hourly_hours[2]}</h1>
        <h1>HOURLY {props.hourly_temps[5]}</h1>
    </div>
    )
}

export default Hourly;