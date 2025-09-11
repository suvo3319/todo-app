import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: action.payload.id,
        input: action.payload.input,
        checked: false,
      });
    },
    updateTodo: (state, action) => {
      const todo = state.todos.find((t) => t.id === action.payload.id);
      if (todo) {
        todo.input = action.payload.input;
      }
    },
    status: (state, action) => {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) {
        todo.checked = !todo.checked;
      }
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload);
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, updateTodo, status, deleteTodo } = todoSlice.actions;
