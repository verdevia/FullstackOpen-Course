import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <h1>Feedback panel</h1>
      <div>
        <Button onClick={() => setGood(good+1)} text="Good"/>
        <Button onClick={() => setNeutral(neutral+1)} text="Neutral"/>
        <Button onClick={() => setBad(bad+1)} text="Bad"/>
      </div>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </>
  )
}

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) => (
  <tr>
    <td>{props.name}:</td>
    <td>{props.value}</td>
  </tr>
)

const Statistics = (props) => {
  let total = props.good + props.neutral + props.bad;
  let average = (props.good*1 + props.neutral*0 + props.bad*(-1))/total
  let positive = (props.good/total)*100 + "%"

  if (total == 0) {
    return (
      <>
      <h1>Statistics</h1>
      <p>No feedback given yet!</p>
      </>
    )
  }
  else {
    return (
    <>
    <h1>Statistics</h1>
      <table>
        <tbody>
          <StatisticLine name="Good" value={props.good}/>
          <StatisticLine name="Neutral" value={props.neutral}/>
          <StatisticLine name="Bad" value={props.bad}/>
          <StatisticLine name="All reviews" value={total}/>
          <StatisticLine name="Average" value={average}/>
          <StatisticLine name="Positive" value={positive}/>
        </tbody>
      </table>
    </>
  )
  } 
}

export default App