import weatherapi from '../services/weatherapi'

import {useState, useEffect} from 'react'

const CountryDetails = ({ country }) => {
  //console.log(country)

  const [coords, setCoords] = useState(null)
  const [weather, setWeather] = useState(null)

  const capital = country.capital
  const languages = Object.values(country.languages)

  useEffect(() => {
    weatherapi.getcoordinates(capital[0]).then(response => setCoords(response[0]))
  }, [])

  useEffect(() => {
    if (!coords) return
    weatherapi.getweather(coords).then(response => setWeather(response))
  }, [coords])

  return (
    <>
        <h1>Official: {country.name.official}</h1>
        <h2>Common: {country.name.common}</h2>
        <p>Capital - {capital}</p>
        <p>Aera - {country.area}</p>
        <h2>Languages</h2>
        <ul>{languages.map(language => (<li key={language}>{language}</li>))}</ul>
        <h2>Flag</h2>
        <img src={country.flags.png}/>
        <Weatherdata weather={weather} capital={capital}/>
    </>
  )
}

const Weatherdata = (props) => {
    if (props.weather === null) return null
    else {
        const temp = Math.round(props.weather.main.temp) - 273
        const iconurl = `https://openweathermap.org/payload/api/media/file/${props.weather.weather[0].icon}.png`
        return (
        <>
            <h2>Weather in {props.capital}</h2>
            <p>Temperature - {temp}° Celsius</p>
            <img src={iconurl}/>
            <p>Wind - {props.weather.wind.speed} m/s</p>
        </>
    )
}
}

export default CountryDetails