function TaskList({tasks}){
    return(
        <div>
            <h2>List of Tasks</h2>
            <ul>
                {tasks.map(task=>(
                    <li key={task._id}>
                       <p> Task Title: {task.title}</p>
                        Description: {task.description}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TaskList;
