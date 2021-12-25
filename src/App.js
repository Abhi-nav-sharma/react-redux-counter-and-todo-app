import { useContext } from "react";
import Counter from "./Components/Counter";
import Todo from "./Components/Todo";
import { AppContext } from "./Context/AppContextProvider";
import "./styles.css";

export default function App() {
  const { getState } = useContext(AppContext)[1];
  const { counter } = getState();
  return (
    <div className="App">
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <Counter />
      <h1>Todo App</h1>
      <Todo />
    </div>
  );
}
