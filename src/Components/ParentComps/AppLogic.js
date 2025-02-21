import { useState } from "react";
import TodoForm from "../ChildComps/TodoForm";
import TodoList from "../ChildComps/TodoList";
import { LocalStorageList } from "../LogicComps/LocalStorageList";
const AppLogic = () => {
  const [tasks, setTasks] = useState([]);

  function handleAddTask(taskTitle) {
    const newTask = {
      id: Date.now(),
      title: taskTitle,
      completed: false
    };
    setTasks([...tasks, newTask]);
  }

  function handleDeleteTask(taskId) {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  }

  function handleToggleComplete(taskId) {
    const updatedTasks = tasks.map((task) => (task.id === taskId ? { ...task, completed: !task.completed } : task));
    setTasks(updatedTasks);
  }

  return (
    <div>
      <TodoForm handleAddTask={handleAddTask} />
      <TodoList tasks={tasks} handleToggleComplete={handleToggleComplete} handleDeleteTask={handleDeleteTask} />
      <LocalStorageList tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default AppLogic;
