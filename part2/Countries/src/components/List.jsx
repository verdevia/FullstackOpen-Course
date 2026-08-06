import weatherService from '../services/weatherapi.js'

import CountryDetails from './CountryDetails.jsx'

import {useState, useEffect} from 'react'

const List = (props) => {
  if (props.search === "") return 'Time to search!'

  const filteredCountries = props.countries.filter((country) =>
    country.name.official.toLowerCase().includes(props.search.toLowerCase())
  )

  const filteredLength = filteredCountries.length

  //console.log(props.countries)
  
  if (filteredLength > 10) {
    return 'Too many matches! Make the filter more specific.'
  }

  if (filteredLength === 0) {
    return 'No matches found!'
  }

  if (filteredLength === 1) {
    return <CountryDetails country={filteredCountries[0]} />
  }

  return filteredCountries.map((country) => (
    <div key={country.ccn3}>
      <Country country={country} setSearch={props.setSearch} />
    </div>
  ))
}

const Country = (props) => (<p>{props.country.name.official} <button onClick={() => props.setSearch(props.country.name.official)}>Show</button></p>)



export default List