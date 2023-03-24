import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Tasks from './Tasks';
import AddTask from './AddTask';
import { useState } from 'react';

function App() {

  const [tasks, setTasks] = useState([
    {
        id:1,
        text: 'Sweeping',
        date: 'Monday 1st January',
    },
    {
        id:2,
        text: 'Fetching Water',
        date: 'Monday 1st January',
    },
    {
        id:3,
        text: 'Cooking',
        date: 'Monday 1st January',
    },
    {
        id:4,
        text: 'Weeding',
        date: 'Monday 1st January',
    },
    {
        id:5,
        text: 'Market',
        date: 'Monday 1st January',
    }
]);

  const addData = ()

  return (
    <>
     <Header/>
     <AddTask onAdd ={addData}/>
     <Tasks tasks={tasks}/>
    </>
  );
}

export default App;
