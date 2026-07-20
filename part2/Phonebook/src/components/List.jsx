const List = (props) => {

    const handleFormSearch = (event) => props.setSearch(event.target.value)

    return (
    <>
        <h2>SearchBar</h2>
        <input value={props.search} onChange={handleFormSearch}/>
        <h2>Numbers</h2>
        <FilteredRender persons={props.persons} search={props.search}/>
    </>
    )
}

const FilteredRender = (props) => {
    return props.persons.map((person) => {if (person.name.toLowerCase().includes(props.search.toLowerCase()) || (person.number.includes(props.search))) return (<Person key={person.name} name={person.name} number={person.number}/>)})
}
const Person = (props) => {
    return (<li>{props.name}: {props.number}</li>)
}
export default List