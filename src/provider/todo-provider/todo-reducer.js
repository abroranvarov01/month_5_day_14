import { ADD_USER, DELETE_USER, EDIT_USER } from "./todo-types";
export const todoReducer = (state, action) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state, users: [...state.users, action.value] };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((item) => item.id !== action.id),
      };
    case EDIT_USER:
      return {
        ...state,
        users: state.users.map((item) =>
          item.id === action.id ? { ...item, ...action.value } : item
        ),
      };
    default:
      return state;
  }
};
