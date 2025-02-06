

const TodoItem = ({ task, handleDeleteTask, handleToggleComplete }) => {
    return (
        <li>
         
        <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
         <span onClick={() => handleToggleComplete(task.id)}> 
          {task.title}
         </span>
         <div className={task.completed ? "completed" : "uncompleted"}>
         {task.completed ? "Completed !" : "X"}
         </div>
        </li>
    );
}

export default TodoItem;