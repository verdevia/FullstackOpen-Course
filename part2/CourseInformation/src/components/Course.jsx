const Course = (props) => {
  const courses = props.courses
  //console.log(courses.length)
    return (
      courses.map((course) => (
      <div key={course.id}>
        <Header name={course.name}/>
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
      </div>))
  )
}

const Header = (props) => (<><h1>{props.name}</h1></>)

const Content = (props) => {
  console.log(props)
  const parts = props.parts.map((part) => (<div key={part.id}><Part name={part.name} exercises={part.exercises}/></div>))
  return parts
}

const Part = (props) => (<><p>{props.name} {props.exercises}</p></>)

const Total = (props) => {
  const total = props.parts.reduce((acc, current) => acc + current.exercises, 0)
  return (
    <>
      <p>Total of {total} exercises</p>
    </>
  )
}

export default Course