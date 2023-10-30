import { useState } from "react"

const Header = ({ text }) => <h1>{text}</h1>

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  if (all === 0)
    return <p>No feedback given</p>

  return (
    <table>
      <tbody>
        <StatisticLine stat={'good'} value={good} />
        <StatisticLine stat={'neutral'} value={neutral} />
        <StatisticLine stat={'bad'} value={bad} />
        <StatisticLine stat={'all'} value={all} />
        <StatisticLine stat={'average'} value={(good - bad) / all} />
        <StatisticLine stat={'positive'} value={good / all * 100 + '%'} />
      </tbody>
    </table>
  )
}


const StatisticLine = ({ stat, value }) => <tr><td>{stat}</td><td>{value}</td></tr>

const App = () => {

  const header1 = 'give feedback'
  const header2 = 'statistics'

  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleBadClick = () => setBad(bad + 1)
  const handleeutralClick = () => setNeutral(neutral + 1)

  return (
    <div>
      <Header text={header1} />
      <Button handleClick={handleGoodClick} text={'Good'} />
      <Button handleClick={handleeutralClick} text={'Neutral'} />
      <Button handleClick={handleBadClick} text={'Bad'} />
      <Header text={header2} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}
export default App
