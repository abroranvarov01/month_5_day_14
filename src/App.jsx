import { useForm } from "react-hook-form";
import { CardWrapper } from "./components/card/card-wrapper";
import { TodoProviderWrapper } from "./provider/todo-provider/todo-provider";
import React from "react";
import { ADD_USER } from "./provider/todo-provider/todo-types";
import { nanoid } from "nanoid";

function App() {
  const { register, handleSubmit, reset } = useForm();
  const { dispatch, data } = React.useContext(TodoProviderWrapper);

  const submit = (data) => {
    dispatch({ type: ADD_USER, value: { ...data, id: nanoid() } });
    reset();
  };

  return (
    <>
      <div className="container">
        <div className="box">
          <form className="form" onSubmit={handleSubmit(submit)}>
            <input className="input" {...register("user_name")} type="text" />
            <br />
            <input className="input" {...register("last_name")} type="text" />
            <br />
            <button className="send_btn" type="submit">send</button>
          </form>
          <CardWrapper />
        </div>
      </div>
    </>
  );
}

export default App;
