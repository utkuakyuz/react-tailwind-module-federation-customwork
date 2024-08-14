import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";

import Header from "layout/Header";
import Footer from "layout/Footer";

const App = () => (
  <div className="main-holder">
    <React.Suspense fallback="Loading Header...">
      <Header name="Utku" />
    </React.Suspense>
    <div className="shell">Hello</div>
    <Footer />
  </div>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
