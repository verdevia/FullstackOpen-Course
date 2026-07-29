import connect from '../services/persons'

const AddForm = (props) => {
    const addContact = (event) => {
    event.preventDefault()
  }

  const handleFormName = (event) => props.setNewName(event.target.value)

  const handleFormNumber = (event) => props.setNewNumber(event.target.value)

  const submitButton = () => {
      const newContact = {name: props.newName, number: props.newNumber}
      if (props.newName === "" || props.newNumber === "")
        window.alert(`Missing input!`) 
      else if (props.persons.some((person) => person.name === props.newName))
        {
        if (window.confirm(`${props.newName} is already added to phonebook! Update number?`)) {
          const tempId = props.persons.find(person => person.name === props.newName)?.id
          connect.put({id: tempId, number: props.newNumber, name: props.newName})
          .then(() => props.setPersons(props.persons.map(person => person.id === tempId ? { ...person, number: props.newNumber} : person)))
        }
        }
      else {
        connect.upload(newContact).then((retperson) => props.setPersons(props.persons.concat(retperson)))
      }
    }
    return (
      <>
        <h2>Add a new</h2>
        <form onSubmit={addContact}>
        <div>
        Name: <input value={props.newName} onChange={handleFormName}/>
        </div>
        <div>
        Number: <input value={props.newNumber} onChange={handleFormNumber}/>
        </div>
        <div>
        <button type="submit" onClick={submitButton}>Add</button>
        </div>
        </form>
      </>
    )
}
export default AddForm