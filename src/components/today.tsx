import * as React from 'react';

interface Props{
    temperature: number;
    temp_feels_like: number;
    description: string;

    humidity: number;
    wind_speed: number;
    wind_degrees: number;
    wind_gust: number;
    icon: string;

    location: string;
    background_image: string;
}

const Today: React.FC<Props> = (props) => {

    return(
    <
    // style={{backgroundImage: `url(${props.background_image})`,
    //         backgroundRepeat: 'no-repeat',
    //         backgroundSize: 'cover'}}
    >

        <div className='today-left'>
            <span id='current-weather'>
                {props.location}
            </span>
            <span id='time'>
                {Intl.DateTimeFormat('en-US', { 
                    hour: 'numeric', 
                    minute: '2-digit'})
                .format(Date.now())}
            </span>
            <img src={`${props.icon}`} id='weather-img'></img>
            <span id='temp'>
                {props.temperature}°
            </span>
            <span id='real-feel'>
                Feels Like {props.temp_feels_like}°
            </span>
            <span id='overcast'>
                {props.description}
            </span>
        </div> 

        <div className='today-right'>
            <span id='air-quality'>
                Humidity
            </span>
            <span id='air-quality-data'>
                {props.humidity}%
            </span>
            <span id='wind'>
                Wind
            </span>
            <span id='wind-data'>
                {props.wind_speed} mph
            </span>
            <span id='wind-gusts'>
                Wind Gusts
                </span>
            <span id='wind-gusts-data'>
                {props.wind_gust} mph
            </span>
        </div>

    </>
    )
}

export default Today;