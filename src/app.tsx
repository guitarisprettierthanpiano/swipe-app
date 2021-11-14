import * as React from 'react';
import { useState, useEffect } from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';

import Navigation from './components/nav';
import Daily from './components/daily'
import Hourly from './components/hourly'
import Today from './components/today'

const App: React.FC = () => {
    //api.openweathermap.org/data/2.5/forecast?q=raleigh&appid=49cc8c821cd2aff9af04c9f98c36eb74
    const [cityName, setCityName] = useState('Chicago')
    const [searchedCity, setSearchedCity] = useState('')

    //props sent to Today component
    const [temp, setTemp] = useState<Number>()
    const [feelsLike, setFeelsLike] = useState<Number>()
    const [description, setDescription] = useState('')
    const [humidity, setHumidity] = useState<Number>()
    const [windSpeed, setWindSpeed] = useState<Number>()
    const [windDeg, setWindDeg] = useState<Number>()
    const [windGust, setWindGust] = useState<Number>()
    const [todayIcon, setTodayIcon] = useState('10d')
    
    const [lattitude, setLattitude] = useState<Number>()
    const [longitude, setLongitude] = useState<Number>()

    //props sent to Hourly component
    const [hourlyTemps, setHourlyTemps] = useState([])
    const [hourlyHours, setHourlyHours] = useState([])
    const [hourlyFeels, setHourlyFeels] = useState([])
    const [hourlyDescription, setHourlyDescription] = useState([])
    const [hourlyIcon, setHourlyIcon] = useState([])
    //let hourlyIconUrl = `http://openweathermap.org/img/wn/${todayIcon}@4x.png`

    //props sent to Daily component
    const [dailyMax, setDailyMax] = useState([])
    const [dailyMin, setDailyMin] = useState([])
    const [dailyDay, setDailyDay] = useState([])
    const [dailyDate, setDailyDate] = useState([])
    const [dailyDescription, setDailyDescription] = useState([])
    const [dailyIcon, setDailyIcon] = useState([])

    const APIkey = '49cc8c821cd2aff9af04c9f98c36eb74'
    const units = 'imperial' //metric, imperial or standard
    const urlCoords = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}`

    async function ApiSearch(){
        //i need two fetch functions. one gets the coordinates from the city entered, and the second uses those coordinates to get the weather.
        const FetchCoords = await fetch(urlCoords)
            .then(res => res.json())
            .then(res => {
                let lat:Number = res.coord.lat
                let lon:Number = res.coord.lon

                const urlOneCall = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${units}&exclude=minutely&appid=${APIkey}`
                const FetchWeather = fetch(urlOneCall)
                    .then(result => result.json())
                    .then(result => {

                        //puts eight daily temps in an array
                        let daily_max_array = []
                        let daily_min_array = []
                        let daily_day_of_week_array = []
                        let daily_date_array = []
                        let daily_description_array = []
                        let daily_icon_array = []
                        for (let i=0; i<8; i++){
                            daily_max_array.push(result.daily[i].temp.max.toFixed(0))

                            daily_min_array.push(result.daily[i].temp.min.toFixed(0))

                            let exactday = Intl.DateTimeFormat("en-us", { weekday: "short" }).format(result.daily[i].dt * 1000);
                            daily_day_of_week_array.push(exactday)

                            let exactdate = Intl.DateTimeFormat("en-us", { month: '2-digit', day: '2-digit' }).format(result.daily[i].dt * 1000);
                            daily_date_array.push(exactdate)

                            daily_description_array.push(result.daily[i].weather[0].description)

                            daily_icon_array.push(result.daily[i].weather[0].icon)

                        }

                        //puts 24 hour temps and hours into arrays
                        let hourly_temps_array = []
                        let hourly_hours_array = []
                        let hourly_feels_array = []
                        let hourly_description_array = []
                        let hourly_icon_array = []
                        for (let j=0; j<24; j++){
                            hourly_temps_array.push(result.hourly[j].temp.toFixed(0))

                            let exact_hour = Intl.DateTimeFormat('en-US', { hour: 'numeric' }).format(result.hourly[j].dt * 1000)
                            hourly_hours_array.push(exact_hour)

                            hourly_feels_array.push(result.hourly[j].feels_like.toFixed(0))

                            hourly_description_array.push(result.hourly[j].weather[0].description)

                            hourly_icon_array.push(result.hourly[j].weather[0].icon)
                        }

                        //inside a return so each state updates at the same time 
                        return (
                            setLattitude(lat),
                            setLongitude(lon),

                            
                            setTemp(result.current.temp.toFixed(0)),
                            setFeelsLike(result.current.feels_like.toFixed(0)),
                            setDescription(result.current.weather[0].description),
                            setHumidity(res.main.humidity),
                            setWindSpeed(res.wind.speed.toFixed(0)),
                            setWindDeg(res.wind.deg.toFixed(0)),
                            setWindGust(res.wind.gust.toFixed(0)),
                            setTodayIcon(result.current.weather[0].icon),

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

    //fetches raleigh on page load, so page doesn't look barren
    useEffect(() => {
        ApiSearch(); 
    }, [])

    //only fetch if enter key is pressed
    const SearchCity = event => {
        if (event.key === 'Enter') {
            ApiSearch();
        }
    }

    return(
    <HashRouter>
        <Navigation
        name={cityName}
        age={22} />

        <input
        type='text'
        onChange={event => setCityName(event.target.value)}
        value={cityName}
        onKeyPress={SearchCity}
        />
        
        <div className='body-container'>

            <Switch>
                <Route exact path='/'
                render = {props => 
                <Today {...props} temperature={temp} 
                temp_feels_like={feelsLike}
                description={description}
                humidity={humidity}
                wind_speed={windSpeed}
                wind_degrees={windDeg}
                wind_gust={windGust}
                icon={todayIcon}/>}/>

                <Route path='/hourly'
                render = {props => 
                <Hourly {...props} hourly_temps={hourlyTemps}
                hourly_hours={hourlyHours}
                hourly_feels={hourlyFeels}
                hourly_description={hourlyDescription}
                hourly_icon={hourlyIcon}/>} 
                />

                <Route path='/daily'
                render = {props => <Daily {...props} daily_max={dailyMax}
                daily_min={dailyMin}
                daily_day={dailyDay}
                daily_date={dailyDate}
                daily_description={dailyDescription}
                daily_icon={dailyIcon}/>}
                //component = {Daily}
                />
            </Switch>

        <div className='delete-soon'>
            <h1>{searchedCity}</h1>
            <h1>lat = {lattitude}</h1>
            <h1>lon = {longitude}</h1>
            <h3>temp = {temp}</h3>
        </div>

        </div>
    </HashRouter>
    )
}

export default App;