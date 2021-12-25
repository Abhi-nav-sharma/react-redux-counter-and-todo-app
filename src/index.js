import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import AppContextProvider from "./Context/AppContextProvider";
import { store } from "./Redux/store";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <AppContextProvider store={store}>
      <App />
    </AppContextProvider>
  </StrictMode>,
  rootElement
);
