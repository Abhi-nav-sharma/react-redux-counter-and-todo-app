import { useContext, useEffect } from "react";
import { AppContext } from "../Context/AppContextProvider";
import { addTodo } from "../Redux/action";
import TodoInput from "./TodoInput";
import { v4 as uuid } from "uuid";
import TodoItem from "./TodoItem";

export default function Todo() {
  const { getState, dispatch } = useContext(AppContext)[1];
  const { todos } = getState();
  const Addtodo = (task) => {
    const payload = {
      title: task,
      status: false,
      id: uuid()
    };
    const action = addTodo(payload);
    dispatch(action);
  };
  return (
    <div>
      <TodoInput handleAdd={Addtodo} />
      {todos.map((item) => {
        return (
          <TodoItem key={item.id} title={item.title} status={item.status} />
        );
      })}
    </div>
  );
}
