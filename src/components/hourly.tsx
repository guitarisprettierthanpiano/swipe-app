import * as React from 'react';

//each prop sent is an array of 24 hours of data.
interface Props{
    hourly_temps: Array<24>;
    hourly_hours: Array<24>;
    hourly_feels: Array<24>;
    hourly_description: Array<24>;
    hourly_icon: Array<24>;
}

const Hourly: React.FC<Props> = (props) => {

    return(
    <div className='hourly-container'>

        <div className='hourly-subcontainer'>
            <span>{props.hourly_hours[0]}</span>
            <img src={`http://openweathermap.org/img/wn/${props.hourly_icon[0]}@2x.png`}></img>
            <span>{props.hourly_temps[0]}°</span>
            <span>Feels Like {props.hourly_feels[0]}°</span>
            <span>{props.hourly_description[0]}</span>
        </div>

        <div className='hourly-subcontainer'>
            <span>{props.hourly_hours[1]}</span>
            <img src={`http://openweathermap.org/img/wn/${props.hourly_icon[1]}@2x.png`}></img>
            <span>{props.hourly_temps[1]}°</span>
            <span>Feels Like {props.hourly_feels[1]}°</span>
            <span>{props.hourly_description[1]}</span>
        </div>

        <div className='hourly-subcontainer'>
            <span>{props.hourly_hours[2]}</span>
                <img src={`http://openweathermap.org/img/wn/${props.hourly_icon[2]}@2x.png`}></img>
            <span>{props.hourly_temps[2]}°</span>
            <span>Feels Like {props.hourly_feels[2]}°</span>
            <span>{props.hourly_description[2]}</span>
        </div>

        <div className='hourly-subcontainer'>
            <span>{props.hourly_hours[3]}</span>
                <img src={`http://openweathermap.org/img/wn/${props.hourly_icon[3]}@2x.png`}></img>
            <span>{props.hourly_temps[3]}°</span>
            <span>Feels Like {props.hourly_feels[3]}°</span>
            <span>{props.hourly_description[3]}</span>
        </div>

        <div className='hourly-subcontainer'>
            <span>{props.hourly_hours[4]}</span>
                <img src={`http://openweathermap.org/img/wn/${props.hourly_icon[4]}@2x.png`}></img>
            <span>{props.hourly_temps[4]}°</span>
            <span>Feels Like {props.hourly_feels[4]}°</span>
            <span>{props.hourly_description[4]}</span>
        </div>

        <div className='hourly-subcontainer'>
            <span>{props.hourly_hours[5]}</span>
                <img src={`http://openweathermap.org/img/wn/${props.hourly_icon[5]}@2x.png`}></img>
            <span>{props.hourly_temps[5]}°</span>
            <span>Feels Like {props.hourly_feels[5]}°</span>
            <span>{props.hourly_description[5]}</span>
        </div>

        <div className='hourly-subcontainer'>
            <span>{props.hourly_hours[6]}</span>
                <img src={`http://openweathermap.org/img/wn/${props.hourly_icon[6]}@2x.png`}></img>
            <span>{props.hourly_temps[6]}°</span>
            <span>Feels Like {props.hourly_feels[6]}°</span>
            <span>{props.hourly_description[6]}</span>
        </div>

        <div className='hourly-subcontainer'>
            <span>{props.hourly_hours[7]}</span>
                <img src={`http://openweathermap.org/img/wn/${props.hourly_icon[7]}@2x.png`}></img>
            <span>{props.hourly_temps[7]}°</span>
            <span>Feels Like {props.hourly_feels[7]}°</span>
            <span>{props.hourly_description[7]}</span>
        </div>

        <div className='hourly-subcontainer'>
            <span>{props.hourly_hours[8]}</span>
                <img src={`http://openweathermap.org/img/wn/${props.hourly_icon[8]}@2x.png`}></img>
            <span>{props.hourly_temps[8]}°</span>
            <span>Feels Like {props.hourly_feels[8]}°</span>
            <span>{props.hourly_description[8]}</span>
        </div>

        <div className='hourly-subcontainer'>
            <span>{props.hourly_hours[9]}</span>
                <img src={`http://openweathermap.org/img/wn/${props.hourly_icon[9]}@2x.png`}></img>
            <span>{props.hourly_temps[9]}°</span>
            <span>Feels Like {props.hourly_feels[9]}°</span>
            <span>{props.hourly_description[9]}</span>
        </div>

        <div className='hourly-subcontainer'>
            <span>{props.hourly_hours[10]}</span>
                <img src={`http://openweathermap.org/img/wn/${props.hourly_icon[10]}@2x.png`}></img>
            <span>{props.hourly_temps[10]}°</span>
            <span>Feels Like {props.hourly_feels[10]}°</span>
            <span>{props.hourly_description[10]}</span>
        </div>

        <div className='hourly-subcontainer'>
            <span>{props.hourly_hours[11]}</span>
                <img src={`http://openweathermap.org/img/wn/${props.hourly_icon[11]}@2x.png`}></img>
            <span>{props.hourly_temps[11]}°</span>
            <span>Feels Like {props.hourly_feels[11]}°</span>
            <span>{props.hourly_description[11]}</span>
        </div>

        <div className='hourly-subcontainer'>
            <span>{props.hourly_hours[12]}</span>
                <img src={`http://openweathermap.org/img/wn/${props.hourly_icon[12]}@2x.png`}></img>
            <span>{props.hourly_temps[12]}°</span>
            <span>Feels Like {props.hourly_feels[12]}°</span>
            <span>{props.hourly_description[12]}</span>
        </div>

        <div className='hourly-subcontainer'>
            <span>{props.hourly_hours[13]}</span>
                <img src={`http://openweathermap.org/img/wn/${props.hourly_icon[13]}@2x.png`}></img>
            <span>{props.hourly_temps[13]}°</span>
            <span>Feels Like {props.hourly_feels[13]}°</span>
            <span>{props.hourly_description[13]}</span>
        </div>

        <div className='hourly-subcontainer'>
            <span>{props.hourly_hours[14]}</span>
                <img src={`http://openweathermap.org/img/wn/${props.hourly_icon[14]}@2x.png`}></img>
            <span>{props.hourly_temps[14]}°</span>
            <span>Feels Like {props.hourly_feels[14]}°</span>
            <span>{props.hourly_description[14]}</span>
        </div>

        <div className='hourly-subcontainer'>
            <span>{props.hourly_hours[15]}</span>
                <img src={`http://openweathermap.org/img/wn/${props.hourly_icon[15]}@2x.png`}></img>
            <span>{props.hourly_temps[15]}°</span>
            <span>Feels Like {props.hourly_feels[15]}°</span>
            <span>{props.hourly_description[15]}</span>
        </div>

        <div className='hourly-subcontainer'>
            <span>{props.hourly_hours[16]}</span>
                <img src={`http://openweathermap.org/img/wn/${props.hourly_icon[16]}@2x.png`}></img>
            <span>{props.hourly_temps[16]}°</span>
            <span>Feels Like {props.hourly_feels[16]}°</span>
            <span>{props.hourly_description[16]}</span>
        </div>

        <div className='hourly-subcontainer'>
            <span>{props.hourly_hours[17]}</span>
                <img src={`http://openweathermap.org/img/wn/${props.hourly_icon[17]}@2x.png`}></img>
            <span>{props.hourly_temps[17]}°</span>
            <span>Feels Like {props.hourly_feels[17]}°</span>
            <span>{props.hourly_description[17]}</span>
        </div>

        <div className='hourly-subcontainer'>
            <span>{props.hourly_hours[18]}</span>
                <img src={`http://openweathermap.org/img/wn/${props.hourly_icon[18]}@2x.png`}></img>
            <span>{props.hourly_temps[18]}°</span>
            <span>Feels Like {props.hourly_feels[18]}°</span>
            <span>{props.hourly_description[18]}</span>
        </div>

        <div className='hourly-subcontainer'>
            <span>{props.hourly_hours[19]}</span>
                <img src={`http://openweathermap.org/img/wn/${props.hourly_icon[19]}@2x.png`}></img>
            <span>{props.hourly_temps[19]}°</span>
            <span>Feels Like {props.hourly_feels[19]}°</span>
            <span>{props.hourly_description[19]}</span>
        </div>

        <div className='hourly-subcontainer'>
            <span>{props.hourly_hours[20]}</span>
                <img src={`http://openweathermap.org/img/wn/${props.hourly_icon[20]}@2x.png`}></img>
            <span>{props.hourly_temps[20]}°</span>
            <span>Feels Like {props.hourly_feels[20]}°</span>
            <span>{props.hourly_description[20]}</span>
        </div>

        <div className='hourly-subcontainer'>
            <span>{props.hourly_hours[21]}</span>
                <img src={`http://openweathermap.org/img/wn/${props.hourly_icon[21]}@2x.png`}></img>
            <span>{props.hourly_temps[21]}°</span>
            <span>Feels Like {props.hourly_feels[21]}°</span>
            <span>{props.hourly_description[21]}</span>
        </div>

        <div className='hourly-subcontainer'>
            <span>{props.hourly_hours[22]}</span>
                <img src={`http://openweathermap.org/img/wn/${props.hourly_icon[22]}@2x.png`}></img>
            <span>{props.hourly_temps[22]}°</span>
            <span>Feels Like {props.hourly_feels[22]}°</span>
            <span>{props.hourly_description[22]}</span>
        </div>

        <div className='hourly-subcontainer'>
            <span>{props.hourly_hours[23]}</span>
                <img src={`http://openweathermap.org/img/wn/${props.hourly_icon[23]}@2x.png`}></img>
            <span>{props.hourly_temps[23]}°</span>
            <span>Feels Like {props.hourly_feels[23]}°</span>
            <span>{props.hourly_description[23]}</span>
        </div>

    </div>
    )
}

export default Hourly;