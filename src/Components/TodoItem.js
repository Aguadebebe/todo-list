 

const TodoItem = ({ task, handleDeleteTask, handleToggleComplete }) => {

    const curly1 = "{";
    const id = "id: ";
    const title = "title: ";
    const curly2 = "},"
    
    return (
        <li>
          <button 
          onClick={() => handleDeleteTask(task.id)}
          className="delete"
          >
          Delete
          </button>
          <span onClick={() => handleToggleComplete(task.id)}> 
            <div>
             {curly1}
            </div> 
            <div>{id}</div>
            <div>{task.id},</div>
            <div>{title}</div>
            <div>{task.title}</div>
            <div className={task.completed ? "completed" : "uncompleted"}>
             {task.completed ? "Completed !" : "X"}
            </div>
            <div>{curly2}</div>
          </span>
        </li>
    );
}

export default TodoItem;