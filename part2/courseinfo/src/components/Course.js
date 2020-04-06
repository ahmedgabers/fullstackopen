import React from 'react'

const Header = (props) => {
  return (
    <div>
        <h1>{props.course.name}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      {  props.course.map(
        course => 
        <p key={course.id}>
          {course.name} {course.exercises}
          </p>
        )}
    </div>
  )
}

const Total = (props) => {
  const sum = 
  props.course.reduce(
    (s, c) => s + c.exercises
    , 0
    )
  
  return (
    <div>
      <b><p>
        total of {sum} exercises 
      </p></b>
    </div>
  )
}


const Course = ({course}) => {
  return (
    <div>
      <Header course={course}/>
      <Content course={course.parts}/>
      <Total course={course.parts}/>
    </div>
  )
}
export default Course