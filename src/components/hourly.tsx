import React, { useState }  from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';

//each prop sent is an array of 24 hours of data.
interface Props{
    hourly_temps: Array<24>;
    hourly_hours: Array<24>;
    hourly_feels: Array<24>;
    hourly_description: Array<24>;
    hourly_icon: Array<24>;
}

const Hourly: React.FC<Props> = (props) => {
        const [webkitMaskStyle, setWebkitMaskStyle] = useState('linear-gradient(-90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 10%)')

        //this function is called once the user drags the daily container. it removes the fade webkit style.
        const EndScroll = () => {
                return(
                        setWebkitMaskStyle('linear-gradient(-90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 0%)')
                )
        }

    return(
    <ScrollContainer onEndScroll={() => EndScroll()}
        style={{WebkitMask:`${webkitMaskStyle}`}}
    className='hourly-container'>

        <div className='hourly-subcontainer'>
            <span className='hourly-hours'>{props.hourly_hours[0]}</span>
            <img className='hourly-img' src={`https://openweathermap.org/img/wn/${props.hourly_icon[0]}@4x.png`}></img>
            <span className='hourly-temp'>{props.hourly_temps[0]}°</span>
            <span className='hourly-feels'>Feels Like {props.hourly_feels[0]}°</span>
            <span className='hourly-description'>{props.hourly_description[0]}</span>
        </div>

        <div className='hourly-subcontainer'>
                <span className='hourly-hours'>{props.hourly_hours[1]}</span>
                <img className='hourly-img' src={`https://openweathermap.org/img/wn/${props.hourly_icon[1]}@4x.png`}></img>
                <span className='hourly-temp'>{props.hourly_temps[1]}°</span>
                <span className='hourly-feels'>Feels Like {props.hourly_feels[1]}°</span>
                <span className='hourly-description'>{props.hourly_description[1]}</span>
        </div>

        <div className='hourly-subcontainer'>
                <span className='hourly-hours'>{props.hourly_hours[2]}</span>
                <img className='hourly-img' src={`https://openweathermap.org/img/wn/${props.hourly_icon[2]}@4x.png`}></img>
                <span className='hourly-temp'>{props.hourly_temps[2]}°</span>
                <span className='hourly-feels'>Feels Like {props.hourly_feels[2]}°</span>
            <span className='hourly-description'>{props.hourly_description[2]}</span>
        </div>

        <div className='hourly-subcontainer'>
                <span className='hourly-hours'>{props.hourly_hours[3]}</span>
                <img className='hourly-img' src={`https://openweathermap.org/img/wn/${props.hourly_icon[3]}@4x.png`}></img>
                <span className='hourly-temp'>{props.hourly_temps[3]}°</span>
                <span className='hourly-feels'>Feels Like {props.hourly_feels[3]}°</span>
                <span className='hourly-description'>{props.hourly_description[3]}</span>
        </div>

        <div className='hourly-subcontainer'>
                <span className='hourly-hours'>{props.hourly_hours[4]}</span>
                <img className='hourly-img' src={`https://openweathermap.org/img/wn/${props.hourly_icon[4]}@4x.png`}></img>
                <span className='hourly-temp'>{props.hourly_temps[4]}°</span>
                <span className='hourly-feels'>Feels Like {props.hourly_feels[4]}°</span>
                <span className='hourly-description'>{props.hourly_description[4]}</span>
        </div>

        <div className='hourly-subcontainer'>
                <span className='hourly-hours'>{props.hourly_hours[5]}</span>
                <img className='hourly-img' src={`https://openweathermap.org/img/wn/${props.hourly_icon[5]}@4x.png`}></img>
                <span className='hourly-temp'>{props.hourly_temps[5]}°</span>
                <span className='hourly-feels'>Feels Like {props.hourly_feels[5]}°</span>
                <span className='hourly-description'>{props.hourly_description[5]}</span>
        </div>

        <div className='hourly-subcontainer'>
                <span className='hourly-hours'>{props.hourly_hours[6]}</span>
                <img className='hourly-img' src={`https://openweathermap.org/img/wn/${props.hourly_icon[6]}@4x.png`}></img>
            <span className='hourly-temp'>{props.hourly_temps[6]}°</span>
                <span className='hourly-feels'>Feels Like {props.hourly_feels[6]}°</span>
                <span className='hourly-description'>{props.hourly_description[6]}</span>
        </div>

        <div className='hourly-subcontainer'>
                <span className='hourly-hours'>{props.hourly_hours[7]}</span>
                <img className='hourly-img' src={`https://openweathermap.org/img/wn/${props.hourly_icon[7]}@4x.png`}></img>
                <span className='hourly-temp'>{props.hourly_temps[7]}°</span>
                <span className='hourly-feels'>Feels Like {props.hourly_feels[7]}°</span>
            <span className='hourly-description'>{props.hourly_description[7]}</span>
        </div>

        <div className='hourly-subcontainer'>
            <span className='hourly-hours'>{props.hourly_hours[8]}</span>
                <img className='hourly-img' src={`https://openweathermap.org/img/wn/${props.hourly_icon[8]}@4x.png`}></img>
                <span className='hourly-temp'>{props.hourly_temps[8]}°</span>
                <span className='hourly-feels'>Feels Like {props.hourly_feels[8]}°</span>
                <span className='hourly-description'>{props.hourly_description[8]}</span>
        </div>

        <div className='hourly-subcontainer'>
                <span className='hourly-hours'>{props.hourly_hours[9]}</span>
                <img className='hourly-img' src={`https://openweathermap.org/img/wn/${props.hourly_icon[9]}@4x.png`}></img>
            <span className='hourly-temp'>{props.hourly_temps[9]}°</span>
                <span className='hourly-feels'>Feels Like {props.hourly_feels[9]}°</span>
                <span className='hourly-description'>{props.hourly_description[9]}</span>
        </div>

        <div className='hourly-subcontainer'>
                <span className='hourly-hours'>{props.hourly_hours[10]}</span>
                <img className='hourly-img' src={`https://openweathermap.org/img/wn/${props.hourly_icon[10]}@4x.png`}></img>
                <span className='hourly-temp'>{props.hourly_temps[10]}°</span>
                <span className='hourly-feels'>Feels Like {props.hourly_feels[10]}°</span>
                <span className='hourly-description'>{props.hourly_description[10]}</span>
        </div>

        <div className='hourly-subcontainer'>
                <span className='hourly-hours'>{props.hourly_hours[11]}</span>
                <img className='hourly-img' src={`https://openweathermap.org/img/wn/${props.hourly_icon[11]}@4x.png`}></img>
                <span className='hourly-temp'>{props.hourly_temps[11]}°</span>
                <span className='hourly-feels'>Feels Like {props.hourly_feels[11]}°</span>
                <span className='hourly-description'>{props.hourly_description[11]}</span>
        </div>

        <div className='hourly-subcontainer'>
                <span className='hourly-hours'>{props.hourly_hours[12]}</span>
                <img className='hourly-img' src={`https://openweathermap.org/img/wn/${props.hourly_icon[12]}@4x.png`}></img>
                <span className='hourly-temp'>{props.hourly_temps[12]}°</span>
                <span className='hourly-feels'>Feels Like {props.hourly_feels[12]}°</span>
                <span className='hourly-description'>{props.hourly_description[12]}</span>
        </div>

        <div className='hourly-subcontainer'>
                <span className='hourly-hours'>{props.hourly_hours[13]}</span>
                <img className='hourly-img' src={`https://openweathermap.org/img/wn/${props.hourly_icon[13]}@4x.png`}></img>
                <span className='hourly-temp'>{props.hourly_temps[13]}°</span>
                <span className='hourly-feels'>Feels Like {props.hourly_feels[13]}°</span>
                <span className='hourly-description'>{props.hourly_description[13]}</span>
        </div>

        <div className='hourly-subcontainer'>
                <span className='hourly-hours'>{props.hourly_hours[14]}</span>
                <img className='hourly-img' src={`https://openweathermap.org/img/wn/${props.hourly_icon[14]}@4x.png`}></img>
                <span className='hourly-temp'>{props.hourly_temps[14]}°</span>
                <span className='hourly-feels'>Feels Like {props.hourly_feels[14]}°</span>
                <span className='hourly-description'>{props.hourly_description[14]}</span>
        </div>

        <div className='hourly-subcontainer'>
                <span className='hourly-hours'>{props.hourly_hours[15]}</span>
                <img className='hourly-img' src={`https://openweathermap.org/img/wn/${props.hourly_icon[15]}@4x.png`}></img>
            <span className='hourly-temp'>{props.hourly_temps[15]}°</span>
                <span className='hourly-feels'>Feels Like {props.hourly_feels[15]}°</span>
                <span className='hourly-description'>{props.hourly_description[15]}</span>
        </div>

        <div className='hourly-subcontainer'>
                <span className='hourly-hours'>{props.hourly_hours[16]}</span>
                <img className='hourly-img' src={`https://openweathermap.org/img/wn/${props.hourly_icon[16]}@4x.png`}></img>
                <span className='hourly-temp'>{props.hourly_temps[16]}°</span>
                <span className='hourly-feels'>Feels Like {props.hourly_feels[16]}°</span>
                <span className='hourly-description'>{props.hourly_description[16]}</span>
        </div>

        <div className='hourly-subcontainer'>
                <span className='hourly-hours'>{props.hourly_hours[17]}</span>
                <img className='hourly-img' src={`https://openweathermap.org/img/wn/${props.hourly_icon[17]}@4x.png`}></img>
            <span className='hourly-temp'>{props.hourly_temps[17]}°</span>
                <span className='hourly-feels'>Feels Like {props.hourly_feels[17]}°</span>
                <span className='hourly-description'>{props.hourly_description[17]}</span>
        </div>

        <div className='hourly-subcontainer'>
                <span className='hourly-hours'>{props.hourly_hours[18]}</span>
                <img className='hourly-img' src={`https://openweathermap.org/img/wn/${props.hourly_icon[18]}@4x.png`}></img>
                <span className='hourly-temp'>{props.hourly_temps[18]}°</span>
                <span className='hourly-feels'>Feels Like {props.hourly_feels[18]}°</span>
                <span className='hourly-description'>{props.hourly_description[18]}</span>
        </div>

        <div className='hourly-subcontainer'>
                <span className='hourly-hours'>{props.hourly_hours[19]}</span>
                <img className='hourly-img' src={`https://openweathermap.org/img/wn/${props.hourly_icon[19]}@4x.png`}></img>
                <span className='hourly-temp'>{props.hourly_temps[19]}°</span>
            <span className='hourly-feels'>Feels Like {props.hourly_feels[19]}°</span>
                <span className='hourly-description'>{props.hourly_description[19]}</span>
        </div>

        <div className='hourly-subcontainer'>
                <span className='hourly-hours'>{props.hourly_hours[20]}</span>
                <img className='hourly-img' src={`https://openweathermap.org/img/wn/${props.hourly_icon[20]}@4x.png`}></img>
            <span className='hourly-temp'>{props.hourly_temps[20]}°</span>
            <span className='hourly-feels'>Feels Like {props.hourly_feels[20]}°</span>
                <span className='hourly-description'>{props.hourly_description[20]}</span>
        </div>

        <div className='hourly-subcontainer'>
                <span className='hourly-hours'>{props.hourly_hours[21]}</span>
                <img className='hourly-img' src={`https://openweathermap.org/img/wn/${props.hourly_icon[21]}@4x.png`}></img>
            <span className='hourly-temp'>{props.hourly_temps[21]}°</span>
            <span className='hourly-feels'>Feels Like {props.hourly_feels[21]}°</span>
                <span className='hourly-description'>{props.hourly_description[21]}</span>
        </div>

        <div className='hourly-subcontainer'>
                <span className='hourly-hours'>{props.hourly_hours[22]}</span>
                <img className='hourly-img' src={`https://openweathermap.org/img/wn/${props.hourly_icon[22]}@4x.png`}></img>
                <span className='hourly-temp'>{props.hourly_temps[22]}°</span>
                <span className='hourly-feels'>Feels Like {props.hourly_feels[22]}°</span>
                <span className='hourly-description'>{props.hourly_description[22]}</span>
        </div>

        <div className='hourly-subcontainer'>
                <span className='hourly-hours'>{props.hourly_hours[23]}</span>
                <img className='hourly-img' src={`https://openweathermap.org/img/wn/${props.hourly_icon[23]}@4x.png`}></img>
                <span className='hourly-temp'>{props.hourly_temps[23]}°</span>
                <span className='hourly-feels'>Feels Like {props.hourly_feels[23]}°</span>
                <span className='hourly-description'>{props.hourly_description[23]}</span>
        </div>

    </ScrollContainer>
    )
}

export default Hourly;