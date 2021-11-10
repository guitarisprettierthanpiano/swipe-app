import * as React from 'react';
import { useState, useEffect } from 'react';

import Nav from './components/nav';
import Daily from './components/daily'
import Hourly from './components/hourly'
import Today from './components/today'

const App: React.FC = () => {
    //api.openweathermap.org/data/2.5/forecast?q=raleigh&appid=49cc8c821cd2aff9af04c9f98c36eb74
    const [cityName, setCityName] = useState('')
    const [searchedCity, setSearchedCity] = useState('')
    const [temp, setTemp] = useState<Number>()
    const [lattitude, setLattitude] = useState<Number>()
    const [longitude, setLongitude] = useState<Number>()
    const [hourlyTemps, setHourlyTemps] = useState([])
    const [dailyTemps, setDailyTemps] = useState([])

    const APIkey = '49cc8c821cd2aff9af04c9f98c36eb74'
    const units = 'imperial' //metric, imperial or standard
    const urlCoords = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}`

    async function ApiSearch(){
        //i need two fetch functions. one gets the coordinates from the city entered, and the second uses those coordinates to get the weather.
        const FetchCoords = await fetch(urlCoords)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                let lat:Number = res.coord.lat
                let lon:Number = res.coord.lon

                const urlOneCall = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${units}&exclude=minutely&appid=${APIkey}`
                const FetchWeather = fetch(urlOneCall)
                    .then(result => result.json())
                    .then(result => {
                        console.log(result)
                        let dailyArray = []
                        for (let i=0; i<8; i++){
                            dailyArray.push(result.daily[i].temp.max)
                        }

                        //inside a return so all returns at the same time
                        return (
                            setLattitude(lat),
                            setLongitude(lon),
                            setTemp(result.current.temp),
                            setDailyTemps(dailyArray)
                        )
                    })
            
            })
    }

    useEffect(() => {
        setCityName('Raleigh')
    },[])

    const SearchCity = event => {
        if (event.key === 'Enter') {
            ApiSearch();
        }
    }

    return(
    <>
    <div className='home-container'>
        <Nav/>

        <h1>{searchedCity}</h1>
        <h1>lat = {lattitude}</h1>
        <h1>lon = {longitude}</h1>
        <h3>temp = {temp}</h3>
        <h3>daily max = {dailyTemps}</h3>

    </div>
    </>
    )
}

export default App;