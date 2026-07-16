import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  const n = anecdotes.length
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(n).fill(0))

  return (
    <>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}<br />
      This anecdote has {votes[selected]} vote(s).<br />
      <Button text="Vote!" function={vote(votes, setVotes, selected)}/>
      <Button text="Next anecdote!" function={next (selected, setSelected)}/>
      <h1>Anecdote with most votes</h1>
      <MostVoted votes={votes} anecdotes={anecdotes}/>
    </>
    
  )
}
const next = (selected, setSelected) => {
  const random = () => {
    let temp = Math.floor(Math.random()*8)
    console.log("new: " + temp)
    setSelected(temp)
    console.log("old: " + selected)
  }
  return random
}

const vote = (votes, setVotes, selected) => {
  const newVote = () => {
    let temp=[...votes]
    temp[selected]++
    setVotes(temp)
  }
  console.log(votes)
  return newVote
}

const MostVoted = (props) => {
  const max = props.votes.indexOf(Math.max(...props.votes))
  return(
    <>
      {props.anecdotes[max]}<br />
      This anecdote has {Math.max(...props.votes)} vote(s).
    </>
  )
}

const Button = (props) => {

  return (
    <>
      <button onClick={props.function}>{props.text}</button>
    </>
  )
}

export default App