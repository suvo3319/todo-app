import { useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import { nanoid } from "nanoid";
import { TodoList } from "./TodoList";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, status, updateTodo } from "../redux/todoSlicer";

export const MainUi = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleAddTodo = () => {
    if (input) {
      const id = nanoid();
      const payload = { id, input };
      dispatch(addTodo(payload));
      setInput("");
    }
  };
  const handleUpdateTodo = (id, editedText) => {
    const payload = { id, input: editedText };
    dispatch(updateTodo(payload));
  };
  const handleCheckboxChange = (id) => {
    dispatch(status(id));
  };
  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  return (
    <div className="max-w-lg mx-auto mt-10 p-4 border rounded-lg shadow-md space-y-4">
      <div className="space-x-3 flex items-center justify-center mr-10">
        <Input input={input} setInput={setInput} />
        <Button color="blue" onClick={handleAddTodo}>
          Add
        </Button>
      </div>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            className="px-4 py-2 bg-gray-100 rounded-md flex justify-between items-center shadow-sm"
            key={todo.id}
          >
            <TodoList
              todo={todo}
              handleCheckboxChange={handleCheckboxChange}
              handleDelete={handleDelete}
              handleUpdateTodo={handleUpdateTodo}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
