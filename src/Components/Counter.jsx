import { useContext } from "react";
import { AppContext } from "../Context/AppContextProvider";
import { incrementCounter, decrementCounter } from "../Redux/action";

export default function Counter() {
  const { dispatch } = useContext(AppContext)[1];
  const handleIncrement = () => {
    dispatch(incrementCounter(1));
  };
  const handleDecrement = () => {
    dispatch(decrementCounter(1));
  };
  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}
