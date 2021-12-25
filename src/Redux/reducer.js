import { Add_Todo, Decrement_Counter, Increment_Counter } from "./actionTypes";

export default function reducer(state, action) {
  switch (action.type) {
    case Increment_Counter: {
      return { ...state, counter: state.counter + action.payload };
    }
    case Decrement_Counter: {
      return { ...state, counter: state.counter - action.payload };
    }
    case Add_Todo:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    default:
      return state;
  }
}
