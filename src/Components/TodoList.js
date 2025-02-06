import TodoItem from "./TodoItem";

const TodoList = ({ tasks, handleDeleteTask, handleToggleComplete }) => {

    const bra1 = " [";
    const bra2 = "];";
    const form2= "</form>";
    const return2 = ");";
    const todoFormComponent2 = "}";
    const exprtdflt = "export default TodoForm;";

    return (
        <div>
         <div>tasks ={bra1}</div>
          <ul>
            {tasks.map((task) => (
                 <TodoItem 
                 key={task.id} 
                 task={task} 
                 handleDeleteTask={handleDeleteTask}
                 handleToggleComplete={handleToggleComplete}
                 />
            ))}
          </ul>
         <div>{bra2}</div>
         <div>{form2}</div>
         <div>{return2}</div>
         <div>{todoFormComponent2}</div>
         <div>{exprtdflt}</div>
        </div>
    );
}

export default TodoList;