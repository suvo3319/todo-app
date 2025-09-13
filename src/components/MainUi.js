import { useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import { nanoid } from "nanoid";
import { TodoList } from "./TodoList";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  deleteTodo,
  fetchTodos,
  statusTodo,
  updateTodo,
} from "../redux/todoSlicer";

export const MainUi = () => {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();
  const { todos, status } = useSelector((state) => state.todo);

  const handleAddTodo = () => {
    if (title) {
      const id = nanoid();
      const payload = { id, title };
      dispatch(addTodo(payload));
      setTitle("");
    }
  };
  const handleUpdateTodo = (id, editedText) => {
    const payload = { id, title: editedText };
    dispatch(updateTodo(payload));
  };
  const handleCheckboxChange = (id) => {
    const todo = todos.find((t) => t.id === id);
    if (!todo.editable) {
      dispatch(statusTodo(id));
    }
  };
  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  const handleAsyncData = () => {
    if (status === "idle") {
      dispatch(fetchTodos());
    }
  };
  return (
    <div className="max-w-screen-md mx-auto mt-10 p-4 border rounded-lg shadow-md space-y-4">
      <div className="space-x-3 flex items-center justify-center mr-10">
        <Input title={title} setTitle={setTitle} />
        <Button color="blue" onClick={handleAddTodo}>
          Add
        </Button>
        <Button color="green" onClick={handleAsyncData}>
          Get Todo
        </Button>
      </div>
      {status === "loading" && (
        <div className="w-full text-center py-3 bg-blue-50 text-blue-600 font-medium rounded-md shadow-sm animate-pulse">
          Loading...
        </div>
      )}

      {status === "error" && (
        <div className="w-full text-center py-3 bg-red-50 text-red-600 font-medium rounded-md shadow-sm border border-red-300">
          Something went wrong. Please try again.
        </div>
      )}

      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            className="px-4 py-2 bg-gray-100 rounded-md justify-between shadow-sm"
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
