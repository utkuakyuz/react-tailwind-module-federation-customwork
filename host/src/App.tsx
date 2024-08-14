import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import ErrorBoundary from "./SafeComponent";

import Header from "layout/Header";
import Footer from "layout/Footer";
import Pages from "pages/Pages";
import { logoutUser } from "layout/utils";

const App = () => {
  const logoutHandler = logoutUser;
  return (
    <div className="main-holder">
      <ErrorBoundary>
        <Header name="Utku Akyüz" />
      </ErrorBoundary>
      <Pages />
      {/* <div className="shell">Hello</div> */}
      <ErrorBoundary>
        <Footer />
      </ErrorBoundary>
    </div>
  );
};
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
