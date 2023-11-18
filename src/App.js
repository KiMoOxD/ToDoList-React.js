import './App.css';
import React from 'react';
import Task from "./Compos/Task"

function App() {
  let [tasks, setTasks] = React.useState([])
  let taskList = tasks.map((el, index) => {
    
    return <Task key={index} name={el} id={index} tasks={tasks} setTasks={setTasks}/>
  })

  let [taskTitle, setTaskTitle] = React.useState('')

  function handleChange(e) { 
    console.log(e.target.value)
    setTaskTitle(e.target.value)
   }

  function handleClick(e) { 
    let newarr = tasks;
    newarr.push(taskTitle);
    setTasks([...newarr])
    setTaskTitle('');
  }

  return (
    <div className="App">
      <div className='tasks' >
        <div>
          <input type='text' onChange={handleChange} value={taskTitle}></input>
          <button onClick={handleClick}>Add Task</button>
        </div>
        {tasks.length >= 1 ? taskList :  <div className='noTasks'>You've No Tasks to do...</div>}
      </div>
    </div>
  );
}

export default App;
