import { useState, useEffect } from 'react'

import List from './components/List'

import connect from './services/api'

const App = () => {
  useEffect(() => {connect.get("all").then(countries => setCountries(countries))}, [])

  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])
  
  const searchHandler = (event) => setSearch(event.target.value)

  return (
    <main>
      <p>Find countries <input value={search} onChange={searchHandler}/></p>
      <List countries={countries} setCountries={setCountries} search={search} setSearch={setSearch} />
    </main>
  )
}

export default App
