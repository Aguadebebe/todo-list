import TodoItem from "./TodoItem";

const TodoList = ({ tasks, handleDeleteTask, handleToggleComplete }) => {
    return (
        <div>
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
        </div>
    );
}

export default TodoList;