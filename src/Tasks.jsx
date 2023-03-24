import React from 'react'
import { useState } from 'react'
import Task from './Task';

const Tasks=({tasks})=> {

  return (
    tasks.map((task)=>{
        return (
            <Task key={task.id} text={task.text} date={task.date}/>
        )
    })
//     <div>
//          {
//             tasks.map((list)=>{
//             return(
//                 <p> {`${list.id}  ${list.text}  ${list.date}`}</p>
//             )
// })
//         }
//     </div>
  )
}

export default Tasks