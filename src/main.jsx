import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../src/index.css";

// Seleziona il nodo root di index.html
const rootElement = document.getElementById("root");

// Crea un root React
const root = ReactDOM.createRoot(rootElement);

// Monta l'app dentro il root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
