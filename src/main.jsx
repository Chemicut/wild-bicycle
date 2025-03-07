import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../src/index.css"; // Global CSS styling

// Select the root DOM node from index.html
const rootElement = document.getElementById("root");

// Create a React root using ReactDOM.createRoot
const root = ReactDOM.createRoot(rootElement);

// Render the App component inside StrictMode for highlighting potential issues
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);