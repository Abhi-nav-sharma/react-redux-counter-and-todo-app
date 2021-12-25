import { createStore } from "redux";
import reducer from "./reducer";
const initState = {
  counter: 1,
  todos: [
    {
      title: "Learn redux",
      status: false,
      id: 1
    }
  ]
};
export const store = createStore(reducer, initState);
