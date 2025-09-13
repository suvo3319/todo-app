import { useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import { useDispatch } from "react-redux";
import { editTodo } from "../redux/todoSlicer";

export const TodoList = ({
  todo,
  handleCheckboxChange,
  handleDelete,
  handleUpdateTodo,
}) => {
  const [editedText, setEditedText] = useState(todo.title);
  const dispatch = useDispatch();
  const handleEditToggle = () => {
    if (todo.editable) {
      handleUpdateTodo(todo.id, editedText);
    }
    dispatch(editTodo(todo.id));
  };
  return (
    <div className="flex items-start justify-between gap-2 w-full">
      <input
        type="checkbox"
        className="form-checkbox h-5 w-5 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
        checked={todo.completed || false}
        onChange={() => handleCheckboxChange(todo.id)}
      />
      <div className="flex justify-between gap-2 flex-1">
        <span
          className={`truncate break-words whitespace-normal ${
            todo.completed ? "text-gray-700 line-through" : ""
          }`}
        >
          {todo.editable ? (
            <Input title={editedText} setTitle={setEditedText} />
          ) : (
            todo.title
          )}
        </span>
        <span className="flex items-center space-x-3">
          <Button color="gray" onClick={handleEditToggle}>
            {todo.editable ? "Save" : "Edit"}
          </Button>
          <Button color="red" onClick={() => handleDelete(todo.id)}>
            Delete
          </Button>
        </span>
      </div>
    </div>
  );
};
