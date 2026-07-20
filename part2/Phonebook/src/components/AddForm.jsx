const AddForm = (props) => {
    const addContact = (event) => {
    event.preventDefault()
  }

  const handleFormName = (event) => props.setNewName(event.target.value)

  const handleFormNumber = (event) => props.setNewNumber(event.target.value)

  const submitButton = () => {
    if (props.newName === "" || props.newNumber === "")
      window.alert(`Missing input!`) 
    else if (props.persons.some((person) => person.name === props.newName))
      window.alert(`${props.newName} is already added to phonebook!`)
    else if (props.persons.some((person) => person.number === props.newNumber))
      window.alert(`Number ${props.newNumber} is already in the phonebook!`)
    else {
      props.setPersons(props.persons.concat({name: props.newName, number: props.newNumber}))
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