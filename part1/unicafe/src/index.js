import React, { useState } from 'react'
import ReactDOM from 'react-dom'



const Statistic = ({good,neutral,bad, scoreTotal, scoreAverage, scorePositive}) => {
  

  if(good===0 && neutral === 0 && bad === 0){
    return(
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  else{
    return (
      <div>
        <h1>statistics</h1>   
          <table>
            <thead>
              <tr>
                <td>good</td>
                <td>{good}</td>
              </tr>
              <tr>
                <td>neutral</td>
                <td>{neutral}</td>
              </tr>
              <tr>
                <td>bad</td>
                <td>{bad}</td>
              </tr>
              <tr>
                <td>all</td>
                <td>{scoreTotal}</td>
              </tr>
              <tr>
                <td>average</td>
                <td>{scoreAverage}</td>
              </tr>
              <tr>
                <td>positive</td>
                <td>{scorePositive}</td>
              </tr>
            </thead>
          </table>
      </div>
    )
  }

}

const Button = (props) => {
  if(props.text === 'good') {
    return(<button onClick={props.plusGood}>{props.text}</button>)
  } else if (props.text === 'neutral') {
    return (<button onClick={props.plusNeutral}>{props.text}</button>)
  } else if (props.text === 'bad') {
    return (<button onClick={props.plusBad}>{props.text}</button>)
  } 

}


const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const plusGood = (newGood) => setGood(newGood)
  const plusNeutral = (newNeutral) => setNeutral(newNeutral)
  const plusBad = (newBad) => setBad(newBad)

  let scoreTotal = good+neutral+bad
  let scoreAverage = (good-bad)/scoreTotal
  let scorePositive = (good/scoreTotal) * 100


  return (
    <div>
      <h1>give feedback</h1>
      <Button plusGood={() => plusGood(good + 1)} text="good"  />
      <Button plusNeutral={() => plusNeutral(neutral + 1)} text="neutral"  />
      <Button plusBad={() => plusBad(bad + 1)} text="bad"  />
      <Statistic good={good} neutral={neutral} bad={bad}
               scoreTotal={scoreTotal}
               scoreAverage={scoreAverage}
               scorePositive={scorePositive}
      />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)