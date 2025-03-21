import {useState, useEffect} from 'react';
import axios from 'axios';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';

function App(){

  const [tasks, setTasks]= useState([]);

  useEffect(()=>{
    fetchTasks();
  },[])

  const fetchTasks=async()=>{
    try{
      const fetchedtasks= await axios.get('http://localhost:5000/tasks')
      setTasks(fetchedtasks.data);
    }
    catch(err){
console.error("Error fetching tasks", err);
    }
  }

  return(
    <div>
      <h1>Task Manager</h1>
      <AddTaskForm refreshTask={fetchTasks}/>
      <TaskList tasks={tasks}/>
    </div>
  )
}

export default App;