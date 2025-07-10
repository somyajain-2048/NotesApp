// import ReactDOM from "react-dom/client";
// // import App from "./App";
// import App3 from "./App3";
// // import { ThemeProvider } from "./ThemeContext";

// import { AuthProvider } from "./App3";
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <AuthProvider>
//     {/* <App /> */}
//     {/* <App2 /> */}
//     <App3 />
//   </AuthProvider>
// );

// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App3 from "./App3.jsx"; // ✅ this already includes <AuthProvider>

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App3 />
  </React.StrictMode>
);
