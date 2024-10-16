import React, { useContext } from "react";
import { TodoProviderWrapper } from "../../provider/todo-provider/todo-provider";
import {
  DELETE_USER,
  EDIT_USER,
} from "../../provider/todo-provider/todo-types";

export const CardWrapper = () => {
  const { data, dispatch } = useContext(TodoProviderWrapper);

  const deleteItem = (id) => {
    dispatch({ type: DELETE_USER, id });
  };

  const editItem = (id) => {
    const editData = prompt(
      data?.users?.find((item) => item.id === id)?.user_name
    );
    if (editData) {
      dispatch({ type: EDIT_USER, id, value: { user_name: editData } });
    }
  };

  return (
    <div className="">
      {data?.users?.map((item) => (
        <div className="card" key={item.id}>
          <h1 className="title">{item.user_name}</h1>
          <div className="btn_wrapper">
            <button className="delete_btn" onClick={() => deleteItem(item.id)}>
              Delete
            </button>
            <button className="edit_btn" onClick={() => editItem(item.id)}>
              Edit
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
