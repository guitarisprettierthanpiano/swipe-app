import React, { useState, useEffect } from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';

import Nav from './components/nav'
import Daily from './components/daily'
import Hourly from './components/hourly'
import Today from './components/today' 

import atmosphereD from './img/atmosphereD.webp'
import atmosphereN from './img/atmosphereN.webp'
import Black from './img/black.webp'
import clearD from './img/clearD.webp'
import clearN from './img/clearN.webp'
import cloudyD from './img/cloudyD.webp'
import cloudyN from './img/cloudyN.webp'
import drizzleD from './img/drizzleD.webp'
import drizzleN from './img/drizzleN.webp'
import rainD from './img/rainD.webp'
import rainN from './img/rainD.webp'
import snowD from './img/snowD.webp'
import snowN from './img/snowN.webp'
import thunderstorm from './img/thunderstorm.webp'

const App: React.FC = () => {
    //states used by input box
    const [cityName, setCityName] = useState<string>('Washington DC')
    const [searchedCity, setSearchedCity] = useState<string>(' ')

    //props sent to Today component
    const [temp, setTemp] = useState<number>()
    const [feelsLike, setFeelsLike] = useState<number>()
    const [description, setDescription] = useState<string>(' ')
    const [humidity, setHumidity] = useState<number>()
    const [windSpeed, setWindSpeed] = useState<number>(0.00)
    const [windDeg, setWindDeg] = useState<number>(0.00)
    const [windGust, setWindGust] = useState<string>('None')
    const [todayIcon, setTodayIcon] = useState<string>('https://openweathermap.org/img/wn/04n@4x.png')
    const [backgroundImg, setBackgroundImg] = useState<string>(Black)
    const [timezoneOffset, setTimezoneOffset] = useState<number>(0)

    //props sent to Hourly component
    const [hourlyTemps, setHourlyTemps] = useState<Array<24>>([])
    const [hourlyHours, setHourlyHours] = useState<Array<24>>([])
    const [hourlyFeels, setHourlyFeels] = useState<Array<24>>([])
    const [hourlyDescription, setHourlyDescription] = useState<Array<24>>([])
    const [hourlyIcon, setHourlyIcon] = useState<Array<24>>([])

    //props sent to Daily component
    const [dailyMax, setDailyMax] = useState<Array<8>>([])
    const [dailyMin, setDailyMin] = useState<Array<8>>([])
    const [dailyDay, setDailyDay] = useState<Array<8>>([])
    const [dailyDate, setDailyDate] = useState<Array<8>>([])
    const [dailyDescription, setDailyDescription] = useState<Array<8>>([])
    const [dailyIcon, setDailyIcon] = useState<Array<8>>([]) 

    const APIkey = process.env.REACT_APP_API_KEY

    async function ApiSearchByName(){
        const FetchCoords = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}`)
            .then(res => res.json())
            .then(res => {
                const lat:number = res.coord.lat
                const lon:number = res.coord.lon

                fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely&appid=${APIkey}`)
                    .then(result => result.json())
                    .then(result => {
                        const daily_max_array = []
                        const daily_min_array = []
                        const daily_day_of_week_array = []
                        const daily_date_array = []
                        const daily_description_array = []
                        const daily_icon_array = []
                        for (let i=0; i<8; i++){
                            const daily_max_temp:number = result.daily[i].temp.max.toFixed(0)
                            daily_max_array.push(daily_max_temp)

                            const daily_min_temp:number = result.daily[i].temp.min.toFixed(0)
                            daily_min_array.push(daily_min_temp)

                            const exactday = Intl.DateTimeFormat("en-us", { 
                                weekday: "short" })
                            .format((result.daily[i].dt * 1000)+18000000+result.timezone_offset*1000);
                            daily_day_of_week_array.push(exactday)

                            const exactdate = Intl.DateTimeFormat("en-us", { 
                                month: '2-digit', 
                                day: '2-digit' })
                            .format(result.daily[i].dt * 1000);
                            daily_date_array.push(exactdate)

                            daily_description_array.push(result.daily[i].weather[0].description)

                            daily_icon_array.push(result.daily[i].weather[0].icon)

                        }

                        const hourly_temps_array = []
                        const hourly_hours_array = []
                        const hourly_feels_array = []
                        const hourly_description_array = []
                        const hourly_icon_array = []
                        for (let j=0; j<24; j++){
                            const hourly_tempe:number = result.hourly[j].temp.toFixed(0)
                            hourly_temps_array.push(hourly_tempe)

                            const exact_hour = Intl.DateTimeFormat('en-US', { 
                                hour: 'numeric' })
                            .format((result.hourly[j].dt * 1000) + 18000000 + result.timezone_offset * 1000)
                            hourly_hours_array.push(exact_hour)

                            const hourly_feels_like:number = result.hourly[j].feels_like.toFixed(0)
                            hourly_feels_array.push(hourly_feels_like)

                            hourly_description_array.push(result.hourly[j].weather[0].description)

                            hourly_icon_array.push(result.hourly[j].weather[0].icon)
                        }


                        const c_temp: number = result.current.temp.toFixed(0)
                        const f_like: number = result.current.feels_like.toFixed(0)
                        const w_speed = res.wind.speed

                        //tend to get undefined returned from the api when wind is low or zero. manually setting None if it is the case
                        const w_gust_int = res.wind.gust
                        let w_gust = ''
                        if (w_gust_int===undefined){
                            w_gust = 'None'
                        }
                        else{
                            w_gust = res.wind.gust.toString() + ' mph'
                        }

                        let background_image: string = ''
                        const weather: string = result.current.weather[0].icon
                        //d means day, n means night.
                        switch (true){
                            case weather === '11d':
                            case weather === '11n':
                                background_image = thunderstorm
                                break;
                            //only using one thunderstorm since its usually dark anyways
                            case weather === '09d':
                                background_image = drizzleD
                                break;
                            case weather === '09n':
                                background_image = drizzleN
                                break;
                            case weather === '10d':
                                background_image = rainD
                                break;
                            case weather === '10n':
                                background_image = rainN
                                break;               
                            case weather === '13d':
                                background_image = snowD
                                break;
                            case weather === '13n':
                                background_image = snowN
                                break;
                            case weather === '50d':
                                background_image = atmosphereD
                                break;
                            case weather === '50n':
                                background_image = atmosphereN
                                break;
                            case weather === '01d':
                            case weather === '02d':
                                background_image = clearD
                                break;
                            case weather === '01n':
                            case weather === '02n':
                                background_image = clearN
                                break;
                            case weather === '04d':
                            case weather === '03d':    
                                background_image = cloudyD
                                break;
                            case weather === '04n':
                            case weather === '03n':
                                background_image = cloudyN
                                break;
                            default:
                                background_image = snowN
                          }

                        //this variable will change the time to the local location's time. uses milliseconds.
                        const timezone_calc = (18000000 + result.timezone_offset * 1000)

                        return (
                            setSearchedCity(res.name),
                            setTimezoneOffset(timezone_calc),
                            setCityName(''),

                            setTemp(c_temp),
                            setFeelsLike(f_like),
                            setDescription(result.current.weather[0].description),
                            setHumidity(res.main.humidity),
                            setWindSpeed(w_speed),
                            setWindDeg(res.wind.deg),
                            setWindGust(w_gust),
                            setTodayIcon(`https://openweathermap.org/img/wn/${result.current.weather[0].icon}@4x.png`),
                            setBackgroundImg(background_image),

                            setHourlyTemps(hourly_temps_array),
                            setHourlyHours(hourly_hours_array),
                            setHourlyFeels(hourly_feels_array),
                            setHourlyDescription(hourly_description_array),
                            setHourlyIcon(hourly_icon_array),

                            setDailyMax(daily_max_array),
                            setDailyMin(daily_min_array),
                            setDailyDay(daily_day_of_week_array),
                            setDailyDate(daily_date_array),
                            setDailyDescription(daily_description_array),
                            setDailyIcon(daily_icon_array)
                        )
                    })
            })
    }

    //not really sure on the ideal timeout. but i'm only allowing once per page load so it is higher than the default 5000.
    const geolocation_options = {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 0
    };
    
    async function GeolocationSuccess(pos) {
        const crd = pos.coords;

        const lati: number = crd.latitude
        const longi: number = crd.longitude

        //once we have your coordinates, reverse geolocate to get the top name of your location. then fetch again two more times for current, hourly and daily weather conditions. update state at the end in one single return.
        const fetch_via_geolocation = await fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${lati}&lon=${longi}&limit=2&appid=${APIkey}`)
            .then(names => names.json())
            .then(names => {
                const your_location = names[0].name
                fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lati}&lon=${longi}&units=imperial&exclude=minutely&appid=${APIkey}`)
                .then(result=>result.json())
                .then(result=>{
                    //puts eight daily temps in an array
                    const daily_max_array = []
                    const daily_min_array = []
                    const daily_day_of_week_array = []
                    const daily_date_array = []
                    const daily_description_array = []
                    const daily_icon_array = []
                    for (let i = 0; i < 8; i++) {
                        const daily_max_temp: number = result.daily[i].temp.max.toFixed(0)
                        daily_max_array.push(daily_max_temp)

                        const daily_min_temp: number = result.daily[i].temp.min.toFixed(0)
                        daily_min_array.push(daily_min_temp)

                        const exactday = Intl.DateTimeFormat("en-us", { weekday: "short" }).format((result.daily[i].dt * 1000) + 18000000+ result.timezone_offset * 1000);
                        daily_day_of_week_array.push(exactday)

                        const exactdate = Intl.DateTimeFormat("en-us", { month: '2-digit', day: '2-digit' }).format(result.daily[i].dt * 1000);
                        daily_date_array.push(exactdate)

                        daily_description_array.push(result.daily[i].weather[0].description)

                        daily_icon_array.push(result.daily[i].weather[0].icon)

                    }

                    //puts 24 hour temps and hours into arrays
                    const hourly_temps_array = []
                    const hourly_hours_array = []
                    const hourly_feels_array = []
                    const hourly_description_array = []
                    const hourly_icon_array = []
                    for (let j = 0; j < 24; j++) {
                        const hourly_tempe: number = result.hourly[j].temp.toFixed(0)
                        hourly_temps_array.push(hourly_tempe)

                        const exact_hour = Intl.DateTimeFormat('en-US', { hour: 'numeric' }).format((result.hourly[j].dt * 1000)+18000000+result.timezone_offset*1000)
                        hourly_hours_array.push(exact_hour)

                        const hourly_feels_like: number = result.hourly[j].feels_like.toFixed(0)
                        hourly_feels_array.push(hourly_feels_like)

                        hourly_description_array.push(result.hourly[j].weather[0].description)

                        hourly_icon_array.push(result.hourly[j].weather[0].icon)
                    }

                    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${your_location}&appid=${APIkey}`)
                    .then(res=>res.json())
                    .then(res=>{
                        const c_temp: number = result.current.temp.toFixed(0)
                        const f_like: number = result.current.feels_like.toFixed(0)
                        const w_speed = res.wind.speed

                        const w_gust_int = res.wind.gust
                        let w_gust = ''
                        if (w_gust_int === undefined) {
                            w_gust = 'None'
                        }
                        else {
                            w_gust = res.wind.gust.toString() + ' mph'
                        }

                        let background_image: string = ''
                        const weather: string = result.current.weather[0].icon
                        //d means day, n means night.
                        switch (true){
                            case weather === '11d':
                            case weather === '11n':
                                background_image = thunderstorm
                                break;
                            //only using one thunderstorm since its usually dark anyways
                            case weather === '09d':
                                background_image = drizzleD
                                break;
                            case weather === '09n':
                                background_image = drizzleN
                                break;
                            case weather === '10d':
                                background_image = rainD
                                break;
                            case weather === '10n':
                                background_image = rainN
                                break;       
                            case weather === '13d':
                                background_image = snowD
                                break;
                            case weather === '13n':
                                background_image = snowN
                                break;
                            case weather === '50d':
                                background_image = atmosphereD
                                break;
                            case weather === '50n':
                                background_image = atmosphereN
                                break;
                            case weather === '01d':
                            case weather === '02d':
                                background_image = clearD
                                break;
                            case weather === '01n':
                            case weather === '02n':
                                background_image = clearN
                                break;
                            case weather === '04d':
                            case weather === '03n':    
                                background_image = cloudyD
                                break;
                            case weather === '04n':
                            case weather === '03n':
                                background_image = cloudyN
                                break;
                            default:
                                background_image = cloudyD
                        }

                        //this variable will change the time to the local location's time. uses milliseconds
                        const timezone_calc = (18000000 + result.timezone_offset * 1000)
                        
                        const button = document.querySelector('button')
                        return(
                            setSearchedCity(your_location),
                            setTimezoneOffset(timezone_calc),
                            setCityName(''),

                            setTemp(c_temp),
                            setFeelsLike(f_like),
                            setDescription(result.current.weather[0].description),
                            setHumidity(res.main.humidity),
                            setWindSpeed(w_speed),
                            setWindDeg(res.wind.deg),
                            setWindGust(w_gust),
                            setTodayIcon(`https://openweathermap.org/img/wn/${result.current.weather[0].icon}@4x.png`),
                            setBackgroundImg(background_image),

                            setHourlyTemps(hourly_temps_array),
                            setHourlyHours(hourly_hours_array),
                            setHourlyFeels(hourly_feels_array),
                            setHourlyDescription(hourly_description_array),
                            setHourlyIcon(hourly_icon_array),

                            setDailyMax(daily_max_array),
                            setDailyMin(daily_min_array),
                            setDailyDay(daily_day_of_week_array),
                            setDailyDate(daily_date_array),
                            setDailyDescription(daily_description_array),
                            setDailyIcon(daily_icon_array),

                            button.innerText = 'Done.'
                        )
                    })
                })
            })
    }

    function GeolocationError(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`); 
    }

    function ClickedMyLocation(){
        //can't let people spam the button and get the api key banned!
        const button = document.querySelector('button')
        button.disabled = true
        button.innerText = 'Searching...'

        navigator.geolocation.getCurrentPosition(GeolocationSuccess, GeolocationError, geolocation_options)

        button.innerText = 'Done.'
    }

    //only fetch api if enter key is pressed.
    const SearchCity = event => {
        if (event.key === 'Enter'){
            ApiSearchByName()
        }
    }

    //fetches something on page load, so page doesn't look barren. washington dc is the default for now i think.
    useEffect(() => {
        ApiSearchByName();
    }, [])

    return(
    <div className='page-container'
    style={{
        backgroundImage: `url(${backgroundImg})`
    }}> 

        <div className='top-container'>
            <input
                placeholder='Search...'
                id='input-box'
                autoFocus
                type='text'
                onChange={event => setCityName(event.target.value)}
                value={cityName}
                onKeyPress={SearchCity}
            />

            <div className='my-location'>

                <button id='find-me'
                    onClick={() => ClickedMyLocation()}>
                    My Location
                </button><br />
                <p id="status"></p>
                <a id="map-link" target="_blank"></a>
            </div>
        </div>

        <div className='middle-container'>
            <Today temperature={temp}
            temp_feels_like={feelsLike}
            description={description}
            humidity={humidity}
            wind_speed={windSpeed}
            wind_degrees={windDeg}
            wind_gust={windGust}
            icon={todayIcon}
            location={searchedCity}
            background_image={backgroundImg} 
            timezone_offset={timezoneOffset}/>
        </div>

        <HashRouter>
        <div className='bottom-container'>
            <Nav />

            <div className='switch-container'>
            <Switch>

                <Route exact path='/'
                render = {props => <Hourly {...props} 
                hourly_temps={hourlyTemps}
                hourly_hours={hourlyHours}
                hourly_feels={hourlyFeels}
                hourly_description={hourlyDescription}
                hourly_icon={hourlyIcon}/>} 
                />

                <Route path='/daily'
                render = {props => <Daily {...props} 
                daily_max={dailyMax}
                daily_min={dailyMin}
                daily_day={dailyDay}
                daily_date={dailyDate}
                daily_description={dailyDescription}
                daily_icon={dailyIcon}/>}
                //component = {Daily}
                />
            </Switch>
            </div>
            
        </div>
        </HashRouter>
    </div>
    )
}

export default App;