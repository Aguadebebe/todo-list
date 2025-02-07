import TodoItem from "./TodoItem";
import ExportTodoForm from "./ExportTodoForm";
import Return2 from "./Return2";
import { colors5 } from "./Return2";
import { colors2 } from "./ExportTodoForm";
import FormForm2 from "./FormForm2";
import { colors9 } from "./FormForm2";
import Task1 from "./Task1";
import { colors11 } from "./Task1";
import Semi from "./Semi";
import { colors12 } from "./Semi";
 
const TodoList = ({ tasks, handleDeleteTask, handleToggleComplete }) => {

    const bra1 = "tasks = [";
    const bra2 = "];";
    const form2= "</form>";
    const return2 = ");";
    const todoFormComponent2 = "}";
    const exprtdflt = "export default TodoForm;";

    return (
        <div>
          <Task1 text={bra1} colors11={colors11} />
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
          <Semi text={bra2} colors12={colors12} />
          <FormForm2 text={form2} colors9={colors9} />        
          <Return2 text={return2} colors5={colors5} />
         <div style={{ color: "yellow" }}>{todoFormComponent2}</div>
         <ExportTodoForm text={exprtdflt} colors2={colors2} />
        </div>
    );
}

export default TodoList;