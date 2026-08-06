import axios from 'axios'

const apikey = import.meta.env.VITE_WeatherAPI
const api = 'http://api.openweathermap.org/'
const iconapi = 'https://openweathermap.org/payload/api/media/file/'

const getweather = (coords) => {
    const request = axios.get(`${api}data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${apikey}`)
    return request.then(response => response.data)
}

const getcoordinates = (name) => {
    const request = axios.get(`${api}geo/1.0/direct?q={${name},&limit=1&appid=${apikey}`)
    return request.then(response => response.data)
}

export default {getcoordinates, getweather}