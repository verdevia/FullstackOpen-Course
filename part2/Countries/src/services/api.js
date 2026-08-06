import axios from 'axios'

const api = 'https://studies.cs.helsinki.fi/restcountries/api/'

const get = (name) => {
    const request = axios.get(`${api}${name}`)
    return request.then(response => response.data)
}

export default {get}