import React from 'react';

interface Props {
  temperature: number;
  temp_feels_like: number;
  description: string;

  humidity: number;
  wind_speed: number;
  wind_degrees: number;
  wind_gust: string;
  icon: string;

  location: string;
  background_image: string;
  timezone_offset: number;
}

const Today: React.FC<Props> = (props) => {
  // adding a blank top and blank bottom div with height 1fr so i can let the actual data have height auto.
  return (
    <>
      <div className="blank-top"></div>

      <span id="current-weather">{props.location}</span>

      <span id="time">
        {Intl.DateTimeFormat('en-US', {
          hour: 'numeric',
          minute: '2-digit',
        // }).format(Date.now() + props.timezone_offset NO DST)}
        }).format(Date.now() + props.timezone_offset - 3600000)}
      </span>

      <div className="today-data">
        <div className="today-west">
          <img
            id="weather-img"
            src={`${props.icon}`}
            alt="weather-icon-today"
          ></img>
          <span id="overcast">{props.description}</span>
        </div>

        <div className="today-east">
          <div className="today-right-top">
            <span id="temp">{props.temperature}°</span>
            <span id="real-feel">Feels Like {props.temp_feels_like}°</span>
          </div>

          <div className="today-right">
            <span id="air-quality">Humidity</span>
            <span id="air-quality-data">{props.humidity}%</span>
            <span id="wind">Wind Speed</span>
            <span id="wind-data">{props.wind_speed} mph</span>
            <span id="wind-gusts">Wind Gusts</span>
            <span id="wind-gusts-data">{props.wind_gust}</span>
          </div>
        </div>
      </div>

      <div className="blank-bottom"></div>
    </>
  );
};

export default Today;
