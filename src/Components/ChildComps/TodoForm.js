import { useState } from "react";
import MapColorChars from "../LogicComps/MapColorChars";
import { colors0 } from "../LogicComps/ColorArrays";
import { colors2 } from "../LogicComps/ColorArrays";
import { colors6 } from "../LogicComps/ColorArrays";
import { colors8 } from "../LogicComps/ColorArrays";

const TodoForm = ({ handleAddTask }) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    setInputValue(event.target.value);
    if (error) setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() === "") {
      setError(true);
      return;
    } else {
      handleAddTask(inputValue);
      setInputValue("");
      setError(false);
    }
  };

  const addTask = "<button>Add Task</button>";
  const inputEl1 = "<input value={inputValue} onChange={handleChange}>";
  const inputEl2 = " /> ";
  const form1 = "<form onSubmit={handleSubmit}>";
  const return1 = "return (";
  const formComponent1 = "const TodoForm = ({ handleAddTask }) => {";

  return (
    <div>
      <MapColorChars text={formComponent1} colors={colors0} />
      <MapColorChars text={return1} colors={colors2} />
      <form onSubmit={handleSubmit}>
        <label>
          <MapColorChars text={form1} colors={colors6} />
          <MapColorChars text={inputEl1} colors={colors8} />
          <input
            value={inputValue}
            type="text"
            placeholder="Please enter a task"
            onChange={handleChange}
            className="input"
          />
        </label>
        <div>{inputEl2}</div>
        {error && <p className="form-error">Please enter a Task!</p>}
        <button type="submit" className="add-task">
          {addTask}
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
