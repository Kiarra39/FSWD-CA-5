import {useState} from 'react';
import axios from 'axios';

function AddTaskForm({refreshTask}){
    const [title, setTitle]= useState('');
    const [description, setDescription]=useState('');

    const handleSubmit = async (e) =>{
        e.preventDefault();
        if(!title|| !description)
            return;
        try{
            await axios.post('http://localhost:5000/tasks', {title,description});
            setTitle('');
            setDescription('');
            refreshTask();
        }
        catch(err){
            console.error('Error adding task', err);
        }
    }
    return(
        <div>
        <form onSubmit = {handleSubmit}>
        <input 
        type="text"
        placeholder=" Task Title"
        value={title}
        onChange={(e)=> setTitle(e.target.value)}
        required
        />
        <input
        type="text"
        placeholder="Task Description"
        value={description}
        onChange={(e)=>setDescription(e.target.value)}
        required
        />

<button type="submit">Add Task</button>
        </form>
        </div>
    )
    
}

export default AddTaskForm;