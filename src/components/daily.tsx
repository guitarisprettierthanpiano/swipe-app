import React from 'react';

import ScrollContainer from 'react-indiana-drag-scroll';

//each prop sent is an array of eight days of data.
interface Props {
  daily_max: Array<8>;
  daily_min: Array<8>;
  daily_day: Array<8>;
  daily_date: Array<8>;
  daily_description: Array<8>;
  daily_icon: Array<8>;
}

const Daily: React.FC<Props> = (props) => {
  const [webkitMaskStyle, setWebkitMaskStyle] = React.useState<String>(
    'linear-gradient(-90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 10%)'
  );

  //this function is called once the user drags the daily container. it negates the fade webkit mask.
  const EndScroll = () => {
    return setWebkitMaskStyle(
      'linear-gradient(-90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 0%)'
    );
  };

  return (
    <ScrollContainer
      onEndScroll={() => EndScroll()}
      style={{ WebkitMask: `${webkitMaskStyle}` }}
      className="daily-container"
    >
      <div className="daily-subcontainer">
        <div className="daily-day-date">
          <span className="daily-day">{props.daily_day[0]}</span>
          <span className="daily-date">{props.daily_date[0]}</span>
        </div>
        <img
          src={`https://openweathermap.org/img/wn/${props.daily_icon[0]}@2x.png`}
          alt="daily-weather-icon"
        ></img>
        <div className="daily-max-low">
          <span className="daily-max">{props.daily_max[0]}°</span>
          <span className="daily-min">/{props.daily_min[0]}°</span>
        </div>
        <span className="daily-description">{props.daily_description[0]}</span>
      </div>

      <div className="daily-subcontainer">
        <div className="daily-day-date">
          <span className="daily-day">{props.daily_day[1]}</span>
          <span className="daily-date">{props.daily_date[1]}</span>
        </div>
        <img
          src={`https://openweathermap.org/img/wn/${props.daily_icon[1]}@2x.png`}
          alt="daily-weather-icon"
        ></img>
        <div className="daily-max-low">
          <span className="daily-max">{props.daily_max[1]}°</span>
          <span className="daily-min">/{props.daily_min[1]}°</span>
        </div>
        <span className="daily-description">{props.daily_description[1]}</span>
      </div>

      <div className="daily-subcontainer">
        <div className="daily-day-date">
          <span className="daily-day">{props.daily_day[2]}</span>
          <span className="daily-date">{props.daily_date[2]}</span>
        </div>
        <img
          src={`https://openweathermap.org/img/wn/${props.daily_icon[2]}@2x.png`}
          alt="daily-weather-icon"
        ></img>
        <div className="daily-max-low">
          <span className="daily-max">{props.daily_max[2]}°</span>
          <span className="daily-min">/{props.daily_min[2]}°</span>
        </div>
        <span className="daily-description">{props.daily_description[2]}</span>
      </div>

      <div className="daily-subcontainer">
        <div className="daily-day-date">
          <span className="daily-day">{props.daily_day[3]}</span>
          <span className="daily-date">{props.daily_date[3]}</span>
        </div>
        <img
          src={`https://openweathermap.org/img/wn/${props.daily_icon[3]}@2x.png`}
          alt="daily-weather-icon"
        ></img>
        <div className="daily-max-low">
          <span className="daily-max">{props.daily_max[3]}°</span>
          <span className="daily-min">/{props.daily_min[3]}°</span>
        </div>
        <span className="daily-description">{props.daily_description[3]}</span>
      </div>

      <div className="daily-subcontainer">
        <div className="daily-day-date">
          <span className="daily-day">{props.daily_day[4]}</span>
          <span className="daily-date">{props.daily_date[4]}</span>
        </div>
        <img
          src={`https://openweathermap.org/img/wn/${props.daily_icon[4]}@2x.png`}
          alt="daily-weather-icon"
        ></img>
        <div className="daily-max-low">
          <span className="daily-max">{props.daily_max[4]}°</span>
          <span className="daily-min">/{props.daily_min[4]}°</span>
        </div>
        <span className="daily-description">{props.daily_description[4]}</span>
      </div>

      <div className="daily-subcontainer">
        <div className="daily-day-date">
          <span className="daily-day">{props.daily_day[5]}</span>
          <span className="daily-date">{props.daily_date[5]}</span>
        </div>
        <img
          src={`https://openweathermap.org/img/wn/${props.daily_icon[5]}@2x.png`}
          alt="daily-weather-icon"
        ></img>
        <div className="daily-max-low">
          <span className="daily-max">{props.daily_max[5]}°</span>
          <span className="daily-min">/{props.daily_min[5]}°</span>
        </div>
        <span className="daily-description">{props.daily_description[5]}</span>
      </div>

      <div className="daily-subcontainer">
        <div className="daily-day-date">
          <span className="daily-day">{props.daily_day[6]}</span>
          <span className="daily-date">{props.daily_date[6]}</span>
        </div>
        <img
          src={`https://openweathermap.org/img/wn/${props.daily_icon[6]}@2x.png`}
          alt="daily-weather-icon"
        ></img>
        <div className="daily-max-low">
          <span className="daily-max">{props.daily_max[6]}°</span>
          <span className="daily-min">/{props.daily_min[6]}°</span>
        </div>
        <span className="daily-description">{props.daily_description[6]}</span>
      </div>

      <div className="daily-subcontainer">
        <div className="daily-day-date">
          <span className="daily-day">{props.daily_day[7]}</span>
          <span className="daily-date">{props.daily_date[7]}</span>
        </div>
        <img
          src={`https://openweathermap.org/img/wn/${props.daily_icon[7]}@2x.png`}
          alt="daily-weather-icon"
        ></img>
        <div className="daily-max-low">
          <span className="daily-max">{props.daily_max[7]}°</span>
          <span className="daily-min">/{props.daily_min[7]}°</span>
        </div>
        <span className="daily-description">{props.daily_description[7]}</span>
      </div>
    </ScrollContainer>
  );
};

export default Daily;
