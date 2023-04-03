import React from "react";
import ReacDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = ReacDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
    <App />
  </React.StrictMode>
)