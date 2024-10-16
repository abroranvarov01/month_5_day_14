import { todoReducer } from "./todo-reducer";

import React from "react";

export const TodoProviderWrapper = React.createContext();

const initialState = {
  count: 0,
  users: [],
};
export const TodoProvider = ({ children }) => {
  const [data, dispatch] = React.useReducer(todoReducer, initialState);
  return (
    <TodoProviderWrapper.Provider value={{ data, dispatch }}>
      {children}
    </TodoProviderWrapper.Provider>
  );
};
