import TodoItem from "./TodoItem";
import MapColorChars from "../LogicComps/MapColorChars";
import { colors1 } from "../LogicComps/ColorArrays";
import { colors3 } from "../LogicComps/ColorArrays";
import { colors7 } from "../LogicComps/ColorArrays";
import { colors9 } from "../LogicComps/ColorArrays";
import { colors10 } from "../LogicComps/ColorArrays";

const TodoList = ({ tasks, handleDeleteTask, handleToggleComplete }) => {
  const bra1 = "tasks = [";
  const bra2 = "];";
  const form2 = "</form>";
  const return2 = ");";
  const todoFormComponent2 = "}";
  const exprtdflt = "export default TodoForm;";

  return (
    <div>
      <MapColorChars text={bra1} colors={colors9} />

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

      <MapColorChars text={bra2} colors={colors10} />
      <MapColorChars text={form2} colors={colors7} />
      <MapColorChars text={return2} colors={colors3} />
      <div style={{ color: "yellow" }}>{todoFormComponent2}</div>
      <MapColorChars text={exprtdflt} colors={colors1} />
    </div>
  );
};

export default TodoList;
