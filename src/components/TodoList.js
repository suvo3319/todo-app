import { useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";

export const TodoList = ({
  todo,
  handleCheckboxChange,
  handleDelete,
  handleUpdateTodo,
}) => {
  const [editedText, setEditedText] = useState(todo.input);
  const [isEdit, setIsEdit] = useState(false);
  const handleEditToggle = () => {
    if (isEdit) {
      handleUpdateTodo(todo.id, editedText);
    } else {
      setEditedText(todo.input);
    }
    setIsEdit((prev) => !prev);
  };
  return (
    <>
      <input
        type="checkbox"
        className="form-checkbox h-5 w-5 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
        checked={todo.checked || false}
        onChange={() => handleCheckboxChange(todo.id)}
      />
      <span className={`${todo.checked ? "ext-gray-700 line-through" : ""}`}>
        {isEdit ? (
          <Input input={editedText} setInput={setEditedText} />
        ) : (
          todo.input
        )}
      </span>
      <span className="space-x-3">
        <Button color="gray" onClick={handleEditToggle}>
          {isEdit ? "Save" : "Edit"}
        </Button>
        <Button color="red" onClick={() => handleDelete(todo.id)}>
          Delete
        </Button>
      </span>
    </>
  );
};
