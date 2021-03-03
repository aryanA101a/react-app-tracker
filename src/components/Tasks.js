import React from 'react'
import Task from './Task'
const Tasks = ({tasks,onDelete,onToggle}) => {
    return (
        <>{tasks.map((task)=>(<Task onToggle={onToggle} onDelete={onDelete} task={task} key={task.id}/>))}</>
    )
}

export default Tasks
