import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/router";

const App = () => (
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
