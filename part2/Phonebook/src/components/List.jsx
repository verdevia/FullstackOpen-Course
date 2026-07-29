import connect from '../services/persons'

const List = (props) => {

    const handleFormSearch = (event) => props.setSearch(event.target.value)

    return (
    <>
        <h2>SearchBar</h2>
        <input value={props.search} onChange={handleFormSearch}/>
        <h2>Numbers</h2>
        <FilteredRender persons={props.persons} setPersons={props.setPersons} search={props.search}/>
    </>
    )
}

const FilteredRender = (props) => {
    return props.persons.map((person) => {if (person.name.toLowerCase().includes(props.search.toLowerCase()) || (person.number.includes(props.search))) return (<Person persons={props.persons} setPersons={props.setPersons} key={person.name} name={person.name} number={person.number} id={person.id}/>)})
}
const Person = (props) => {
    const deletePerson = (id) => {
        if (window.confirm(`Delete contact: ${props.name}?`))
        {
            connect.remove(id)
            props.setPersons(props.persons.filter((person) => person.id !== id))
        }
    }
    return (<li>{props.name}: {props.number} <button onClick={() => deletePerson(props.id)}>Delete</button></li>)
}
export default List