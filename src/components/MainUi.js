import { useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import { nanoid } from "nanoid";
import { TodoList } from "./TodoList";

export const MainUi = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const handleAddTodo = () => {
    if (input) {
      const id = nanoid();
      setTodos([...todos, { id, input }]);
      setInput("");
    }
  };
  const handleUpdateTodo = (id, editedText) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, input: editedText } : todo
    );
    setTodos(updatedTodos);
  };
  const handleCheckboxChange = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    );
    setTodos(updatedTodos);
  };
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
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
