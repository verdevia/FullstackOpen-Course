import { useState } from 'react'

import List from './components/List'
import AddForm from './components/AddForm'

const App = () => {
  const [persons, setPersons] = useState([{name: "John", number: "4"}]) 
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