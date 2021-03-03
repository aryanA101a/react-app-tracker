import Header from "./components/Header";
import { useState } from "react";
import Tasks from "./components/Tasks";
import Addtask from "./components/Addtask";

function App() {
  const addTask = (task) => {
    const id=Math.floor(Math.random()*10000)
    const newTask={id,...task}
    setTasks([...tasks,newTask])
    console.log(task);
  };
  const toogleRemainder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, remainder: !task.remainder } : task
      )
    );
  };
  const onDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appoinment",
      day: "Feb 5th at 2:30",
      remainder: true,
    },
  ]);
  const [showAddTask,setShowAddTask]=useState(false)
  return (
    <div className="container">
      
      <Header title="Task Tracker" changeBtnAppearance={showAddTask} onAdd={()=>setShowAddTask(!showAddTask)} />
      {showAddTask && <Addtask onAdd={addTask} />}
      <Tasks tasks={tasks} onDelete={onDelete} onToggle={toogleRemainder} />
    </div>
  );
}

export default App;
