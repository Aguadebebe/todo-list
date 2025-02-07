import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
const AppLogic = () => {
    const [tasks, setTasks] = useState([]);

    function handleAddTask(taskTitle) {
        const newTask = {
            id: Date.now(),
            title: taskTitle,
            completed: false
        }
         setTasks([...tasks, newTask]);
    }

    function handleDeleteTask(taskId) {
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTasks); 
    } 

    function handleToggleComplete(taskId) {
        const updatedTasks =  tasks.map((task) => 
        task.id === taskId ? { ...task, completed: !task.completed } : task)
        setTasks(updatedTasks)
    }

    return (
        <div> 
          <TodoForm 
           handleAddTask={handleAddTask}
          />
          <TodoList 
           tasks={tasks}
           handleToggleComplete={handleToggleComplete}
           handleDeleteTask={handleDeleteTask}
          />
        </div>
    );
}

export default AppLogic;