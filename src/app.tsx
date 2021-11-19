import * as React from 'react';
import { useState, useEffect } from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';

import Nav from './components/nav';
import Daily from './components/daily'
import Hourly from './components/hourly'
import Today from './components/today' 

const App: React.FC = () => {
    //api.openweathermap.org/data/2.5/forecast?q=raleigh&appid=49cc8c821cd2aff9af04c9f98c36eb74
    const [cityName, setCityName] = useState('New York')
    const [searchedCity, setSearchedCity] = useState('')

    //props sent to Today component
    const [temp, setTemp] = useState<Number>()
    const [feelsLike, setFeelsLike] = useState<Number>()
    const [description, setDescription] = useState('')
    const [humidity, setHumidity] = useState<Number>()
    const [windSpeed, setWindSpeed] = useState<Number>()
    const [windDeg, setWindDeg] = useState<Number>()
    const [windGust, setWindGust] = useState<Number>()
    const [todayIcon, setTodayIcon] = useState('https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/60/samsung/45/medium-small-white-circle_26ac.png')
    const [backgroundImg, setBackgroundImg] = useState('../img/test.png')
    
    //lat and long. used within the api fetch
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

    //this will change the state of the geolocation button once pressed. will only allow this to be used once because i only have 60 fetch requests allowed per minute. a successsful fetch uses three.
    const [disabledBoolean, setDisabledBoolean] = useState<boolean>(false)

    const APIkey = '4ac53b87c2233ee8de919d51d83a4347'
    const units = 'imperial' //metric, imperial or standard
    // const urlCoords = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}`

    async function ApiSearchByName(){
        const FetchCoords = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}`)
            .then(res => res.json())
            .then(res => {
                const lat:Number = res.coord.lat
                const lon:Number = res.coord.lon
                setLattitude(lat)
                setLongitude(lon)

                const urlOneCall = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${units}&exclude=minutely&appid=${APIkey}`
                fetch(urlOneCall)
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
                            .format(result.daily[i].dt * 1000);
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
                            .format(result.hourly[j].dt * 1000)
                            hourly_hours_array.push(exact_hour)

                            const hourly_feels_like:number = result.hourly[j].feels_like.toFixed(0)
                            hourly_feels_array.push(hourly_feels_like)

                            hourly_description_array.push(result.hourly[j].weather[0].description)

                            hourly_icon_array.push(result.hourly[j].weather[0].icon)
                        }


                        const c_temp: number = result.current.temp.toFixed(0)
                        const f_like:number = result.current.feels_like.toFixed(0)
                        const w_speed = res.wind.speed
                        const w_gust = res.wind.gust

                        let background_image = ''
                        if (result.current.weather[0].icon === '11d'){
                            background_image = '../img/tstorm.jpeg'
                        }
                        else if(result.current.weather[0].icon === '09d'){
                            background_image = '../img/drizzle.jpg'
                        }
                        else if (result.current.weather[0].icon === '10d') {
                            background_image = '../img/rain.jpg'
                        }
                        else if (result.current.weather[0].icon === '13d') {
                            background_image = '../img/snow.jpg'
                        }
                        else if (result.current.weather[0].icon === '50d') {
                            background_image = '../img/atmosphere.png'
                        }
                        else if (result.current.weather[0].icon === '01d') {
                            background_image = '../img/clear.png'
                        }
                        else if (result.current.weather[0].icon === '01n') {
                            background_image = '../img/night.jpg'
                        }
                        else if (result.current.weather[0].icon === '02d' || '03d' || '04d') {
                            background_image = '../img/clear.png'
                        }
                        else if (result.current.weather[0].icon === '02n' || '03n' || '04n') {
                            background_image = '../img/night.jpg'
                        }
                        //inside a return so each state updates at the same time 
                        return (    
                            setLattitude(lat),
                            setLongitude(lon),

                            setSearchedCity(res.name),

                            setTemp(c_temp),
                            setFeelsLike(f_like),
                            setDescription(result.current.weather[0].description),
                            setHumidity(res.main.humidity),
                            setWindSpeed(w_speed),
                            setWindDeg(res.wind.deg),
                            setWindGust(w_gust),
                            setTodayIcon(`http://openweathermap.org/img/wn/${result.current.weather[0].icon}@4x.png`),
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









    //not really sure on the ideal timeout. but i'm only allowing once per page load so it is high.
    const geolocation_options = {
        enableHighAccuracy: true,
        timeout: 9000,
        maximumAge: 0
    };
    
    async function GeolocationSuccess(pos) {
        //http://api.openweathermap.org/geo/1.0/reverse?lat=51.5098&lon=-0.1180&limit=5&appid=49cc8c821cd2aff9af04c9f98c36eb74
        //http://api.openweathermap.org/geo/1.0/reverse?lat=35.9392747&lon=-78.6115256&limit=5&appid=3c7b2ffc55a4c134c4c6d1e73e3b0096
        const crd = pos.coords;
        console.log(crd)

        // console.log('Your current position is:');
        // console.log(`Latitude : ${crd.latitude}`);
        // console.log(`Longitude: ${crd.longitude}`);
        // console.log(`More or less ${crd.accuracy} meters.`);

        const lati = crd.latitude
        const longi = crd.longitude

        //once we have your coordinates, reverse geolocate to get the top name of your location. then fetch again two more times for current, hourly and daily weather conditions. update state at the end in one single return.
        const fetch_via_geolocation = await fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${crd.latitude}&lon=${crd.longitude}&limit=5&appid=${APIkey}`)
            .then(names => names.json())
            .then(names => {
                const your_location = names[0].name
                fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lati}&lon=${longi}&units=${units}&exclude=minutely&appid=${APIkey}`)
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

                        const exactday = Intl.DateTimeFormat("en-us", { weekday: "short" }).format(result.daily[i].dt * 1000);
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

                        const exact_hour = Intl.DateTimeFormat('en-US', { hour: 'numeric' }).format(result.hourly[j].dt * 1000)
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
                        const w_gust = res.wind.gust

                        //inside a return so each state updates in sync

                        let background_image = ''
                        if (result.current.weather[0].icon === '11d'){
                            background_image = '../img/tstorm.jpeg'
                        }
                        else if(result.current.weather[0].icon === '09d'){
                            background_image = '../img/drizzle.jpg'
                        }
                        else if (result.current.weather[0].icon === '10d') {
                            background_image = '../img/rain.jpg'
                        }
                        else if (result.current.weather[0].icon === '13d') {
                            background_image = '../img/snow.jpg'
                        }
                        else if (result.current.weather[0].icon === '50d') {
                            background_image = '../img/atmosphere.png'
                        }
                        else if (result.current.weather[0].icon === '01d') {
                            background_image = '../img/clear.png'
                        }
                        else if (result.current.weather[0].icon === '01n') {
                            background_image = '../img/night.jpg'
                        }
                        else if (result.current.weather[0].icon === '02d' || '03d' || '04d') {
                            background_image = '../img/clear.png'
                        }
                        else if (result.current.weather[0].icon === '02n' || '03n' || '04n') {
                            background_image = '../img/night.jpg'
                        }
                        return(
                            setLattitude(lati),
                            setLongitude(longi),

                            setCityName(your_location),
                            setSearchedCity(your_location),

                            setTemp(c_temp),
                            setFeelsLike(f_like),
                            setDescription(result.current.weather[0].description),
                            setHumidity(res.main.humidity),
                            setWindSpeed(w_speed),
                            setWindDeg(res.wind.deg),
                            setWindGust(w_gust),
                            setTodayIcon(`http://openweathermap.org/img/wn/${result.current.weather[0].icon}@4x.png`),
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

                            setDisabledBoolean(true)
                        )
                    })
                })
            })
    }

    function GeolocationError(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    function ClickedMyLocation(){
        navigator.geolocation.getCurrentPosition(GeolocationSuccess, GeolocationError, geolocation_options)
    }

    //only fetch if enter key is pressed
    const SearchCity = event => {
        if (event.key === 'Enter'){
            ApiSearchByName()
        }
    }

    //fetches something on page load, so page doesn't look barren
    useEffect(() => {
        ApiSearchByName();
    }, [])

    return(
    <HashRouter>

        <Nav/>

        <div className='input-findloc'>
            <input
            id='input-box'
            autoFocus
            type='text'
            onChange={event => setCityName(event.target.value)}
            value={cityName}
            onKeyPress={SearchCity}
            />

            <div className='my-location'>

                <button id="find-me" 
                title='May take a moment...'
                disabled = {disabledBoolean}
                onClick={() => ClickedMyLocation()}>
                    Show my location
                </button><br />
                <p id="status"></p>
                <a id="map-link" target="_blank"></a>

            </div>

        </div>

        <div className='body-container'>
            <Switch>
                <Route exact path='/'
                render = {props => <Today {...props} 
                temperature={temp} 
                temp_feels_like={feelsLike}
                description={description}
                humidity={humidity}
                wind_speed={windSpeed}
                wind_degrees={windDeg}
                wind_gust={windGust}
                icon={todayIcon}
                location={searchedCity}
                background_image={backgroundImg}/>}/>

                <Route path='/hourly'
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

    </HashRouter>
    )
}

export default App;