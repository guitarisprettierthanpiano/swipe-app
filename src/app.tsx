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
    
    const [lattitude, setLattitude] = useState<Number>()
    const [longitude, setLongitude] = useState<Number>()

    //props sent to Hourly component
    const [hourlyTemps, setHourlyTemps] = useState([])
    const [hourlyHours, setHourlyHours] = useState([])

    //props send to Daily component
    const [dailyTemps, setDailyTemps] = useState([])

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
                        console.log(result)

                        //puts eight daily temps in an array
                        let daily_array = []
                        for (let i=0; i<8; i++){
                            daily_array.push(result.daily[i].temp.max)
                        }

                        //puts 24 hourly temps and hours in arrays
                        let hourly_temps_array = []
                        let hourly_hours_array = []
                        for (let j=0; j<23; j++){
                            hourly_temps_array.push(result.hourly[j].temp)

                            let exact_hour = Intl.DateTimeFormat('en-US', { hour: 'numeric' }).format(result.hourly[j].dt * 1000)
                            hourly_hours_array.push(exact_hour)
                        }

                        //inside a return so each state updates at the same time 
                        return (
                            setLattitude(lat),
                            setLongitude(lon),

                            setTemp(result.current.temp),
                            setFeelsLike(result.current.feels_like),
                            setDescription(result.current.weather[0].description),
                            setHumidity(res.main.humidity),
                            setWindSpeed(res.wind.speed),
                            setWindDeg(res.wind.deg),
                            setWindGust(res.wind.gust),

                            setHourlyTemps(hourly_temps_array),
                            setHourlyHours(hourly_hours_array),

                            setDailyTemps(daily_array)
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
                wind_gust={windGust}/>}/>

                <Route path='/hourly'
                render = {props => 
                <Hourly {...props} hourly_temps={hourlyTemps}
                hourly_hours={hourlyHours}/>} 
                />

                <Route path='/daily'
                render = {props => <Daily {...props} dailyData={dailyTemps}/>}
                //component = {Daily}
                />
            </Switch>

            <h1>{searchedCity}</h1>
            <h1>lat = {lattitude}</h1>
            <h1>lon = {longitude}</h1>
            <h3>temp = {temp}</h3>
            <h3>daily max = {dailyTemps}</h3>

        </div>
    </HashRouter>
    )
}

export default App;