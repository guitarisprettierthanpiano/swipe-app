import * as React from 'react';

interface Props{
    temp: number;
}

const Today: React.FC<Props> = (props) => {
    //<h1>Today{props.todayData}</h1>

    return(
    <div className='today-container'>
        <div className='today-left'>
            <span id='current-weather'>Current Weather</span>
            <span id='time'>12:00 AM</span>
            <img id='weather-img' src='../img/test.png'></img>
            <span id='temp'>{props.temp}</span>
            <span id='real-feel'>Real Feel 46</span>
            <span id='overcast'>Clear</span>
        </div> 

        <div className='today-right'>
            <span id='air-quality'>Air Quality</span>
            <span id='air-quality-data'>Fair</span>
            <span id='wind'>Wind</span>
            <span id='wind-data'>WSW 2 mph</span>
            <span id='wind-gusts'>Wind Gusts</span>
            <span id='wind-gusts-data'>5 mph</span>
        </div>
    </div>
    )
}

export default Today;