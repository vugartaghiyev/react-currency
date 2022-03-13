import ReactDOM from "react-dom";
import App from "./App";
import "./styles/global.css";
import ContextProvider from "./context";

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById("root")
);
