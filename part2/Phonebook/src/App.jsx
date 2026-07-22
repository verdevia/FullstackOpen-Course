import { useState, useEffect } from 'react'
import axios from 'axios'

import List from './components/List'
import AddForm from './components/AddForm'

const App = () => {
  useEffect(() => {
    console.log('JSON Effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  return (
    <>
      <h2>Phonebook</h2>
      <AddForm newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} persons={persons} setPersons={setPersons}/>
      <List persons={persons} search={search} setSearch={setSearch}/>
    </>
  )
}

export default App