import { useState } from "react";
import { nanoid } from "nanoid";

export const AddTodo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const addTodo = () => {
    const id = nanoid();
    setTodos([...todos, { id, input }]);
    setInput("");
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((obj) => obj.id !== id));
  };
  const handleCheckboxChange = (id) => {
    console.log(id);
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded-lg shadow-md space-y-4">
      <div className="space-x-3">
        <input
          type="text"
          placeholder="Enter item"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          onClick={addTodo}
        >
          Add
        </button>
      </div>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            className="px-4 py-2 bg-gray-100 rounded-md flex justify-between items-center shadow-sm"
            key={todo.id}
          >
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              checked={todo.checked || false}
              onChange={() => handleCheckboxChange(todo.id)}
            />
            <span
              className={`${todo.checked ? "ext-gray-700 line-through" : ""}`}
            >
              {todo.input}
            </span>
            <button
              className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
