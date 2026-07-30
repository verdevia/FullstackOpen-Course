import connect from '../services/persons'
import Notification from './Notification'

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
          const tempPerson = (props.persons.find((person) => person.id === tempId))
          connect.put({id: tempId, number: props.newNumber, name: props.newName})
          .then(() => {
            props.setPersons(props.persons.map(person => person.id === tempId ? { ...person, number: props.newNumber} : person))
            props.setMessage({name:`Contact "${tempPerson.name}" was updated!`, class:'successful'})
            props.setNewName('')
            props.setNewNumber('')
          })
          .catch(error => {
            props.setMessage({name:`Contact ${tempPerson.name} has already been removed from server!`, class:'failed'})
          })
        }
        }
      else {
        connect.upload(newContact).then((retperson) => {
          props.setPersons(props.persons.concat(retperson))
          props.setMessage({name:`Contact "${retperson.name}" was added to the phonebook!`, class:'successful'})
          props.setNewName('')
          props.setNewNumber('')
        })
      }
    }
    return (
      <>
        <h2>Add a new</h2>
        <Notification message={props.message} setMessage={props.setMessage} />
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