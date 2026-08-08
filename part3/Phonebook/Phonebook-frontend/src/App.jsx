import { useState, useEffect } from 'react'

import connect from './services/persons'

import List from './components/List'
import AddForm from './components/AddForm'

const App = () => {
  useEffect(() => {
    connect.get().then((persons) => setPersons(persons))
  }, [])
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')
  const [message, setMessage] = useState({name: '', class: ''})

  return (
    <>
      <h2>Phonebook</h2>
      <AddForm newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} persons={persons} setPersons={setPersons} message={message} setMessage={setMessage}/>
      <List persons={persons} setPersons={setPersons} search={search} setSearch={setSearch}/>
    </>
  )
}

export default App