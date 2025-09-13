// import { createStore } from "redux";
// import { todoReducer } from "./todoReducer";

import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlicer";
// export const store = createStore(todoReducer);

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
