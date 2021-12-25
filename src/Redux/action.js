import { Add_Todo, Decrement_Counter, Increment_Counter } from "./actionTypes";

export const incrementCounter = (amount) => ({
  type: Increment_Counter,
  payload: amount
});

export const decrementCounter = (amount) => ({
  type: Decrement_Counter,
  payload: amount
});

export const addTodo = ({ title, status, id }) => ({
  type: Add_Todo,
  payload: {
    title,
    status,
    id
  }
});
