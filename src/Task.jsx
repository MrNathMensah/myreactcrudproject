import React from 'react'


const Task=({text, date}) => {


  return (
    <>
        <h3>{text}</h3>
        <p>{date}</p>

    </>
  )
}

export default Task
