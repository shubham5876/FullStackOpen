import { useState } from 'react'

const Header = ({ heading }) => <h1>{heading}</h1>

const Button = ({ handleClick, label }) => <button onClick={handleClick}>{label}</button>

const AnecdotesView = ({ anecdote, votes }) => {
  return (<>
    <div>{anecdote}</div>
    <div>has {votes} votes</div>
  </>
  )
}

const App = () => {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(8).fill(0))

  const getRandomNumber = () => setSelected(Math.floor(Math.random() * 8))

  const handleOnClickVote = () => {
    let copyVotes = [...votes]
    copyVotes[selected] += 1
    setVotes([...copyVotes])
  }
  console.log('selected nnumber is... ', selected);
  console.log(votes);
  return (
    <div>
      <Header heading={'Anecdote of the day'} />
      <AnecdotesView anecdote={anecdotes[selected]} votes={votes[selected]} />
      <Button handleClick={handleOnClickVote} label={'vote'} />
      <Button handleClick={getRandomNumber} label={'next Anecdote'} />
      <Header heading={'Anecdote with most votes'} />
      <AnecdotesView anecdote={anecdotes[votes.indexOf(Math.max(...votes))]} votes={votes[votes.indexOf(Math.max(...votes))]} />
    </div>
  )
}

export default App