import React from 'react'
import { useState } from 'react'

function AddTask() {

    const [task, setTask] = useState("");
    const [date,setDate] = useState("");
  return (
    <div>
        <form>
            <div>
                <label>Task</label>
                <input type='text' value={task} onChange={(e) => setTask(e.target.value)}/>
            </div>
            <div>
                <label>Date and Time</label>
                <input type='text' value={date} onChange={(e) => setDate(e.target.value)}/>
            </div>
            <div>
                <input type="submit" value="Add Task"/>
            </div>
        </form>
       {console.log(task)}
        {date}
    </div>
  )
}

export default AddTask