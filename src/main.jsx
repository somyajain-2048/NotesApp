import ReactDOM from "react-dom/client";
// import App from "./App";
import App2 from "./App2";
import { ThemeProvider } from "./ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    {/* <App /> */}
    <App2 />
  </ThemeProvider>
);
