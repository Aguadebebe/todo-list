import TodoItem from "./TodoItem";
import MapColorChars from "../MapColorChars";
import { colors2 } from  "../ColorArrays";
import { colors5 } from "../ColorArrays";
import { colors9 } from  "../ColorArrays";
import { colors11 } from  "../ColorArrays";
import { colors12 } from  "../ColorArrays";
 
const TodoList = ({ tasks, handleDeleteTask, handleToggleComplete }) => {

    const bra1 = "tasks = [";
    const bra2 = "];";
    const form2= "</form>";
    const return2 = ");";
    const todoFormComponent2 = "}";
    const exprtdflt = "export default TodoForm;";

    return (
        <div>
          <MapColorChars text={bra1} colors={colors11} />
          
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
          
          <MapColorChars text={bra2} colors={colors12} />
          <MapColorChars text={form2} colors={colors9} />        
          <MapColorChars text={return2} colors={colors5} />
          <div style={{ color: "yellow" }}>{todoFormComponent2}</div>
          <MapColorChars text={exprtdflt} colors={colors2} />
        </div>
    );
}

export default TodoList;