import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const App = (props) => {
const [selected, setSelected] = useState(0)
let maxVotes = Math.max(...copyVotes)

const incrVotes = () => {
  copyVotes[selected] += 1
}

  return (
    <div>
      <div><h1>Anecdote of the day</h1></div>
      <div>
          {props.anecdotes[selected]}
          has {copyVotes[selected]} votes
      </div>  
      <div>
          <button onClick={() => setSelected(Math.floor(Math.random() * 6))}>next anecdote</button>
          <button onClick={incrVotes}>vote</button>
      </div>
      <br></br>
      <div><h1>Anecdote with most votes</h1></div>
      <div>
          {props.anecdotes[copyVotes.indexOf(maxVotes)]} has {maxVotes}
      </div>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const votes = new Array(anecdotes.length + 1).join('0').split('').map(parseFloat)
let copyVotes = [...votes]



ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)