import React from "react";
import Router from "./router/router";
import { BrowserRouter } from "react-router-dom";

type Props = {};

const Pages = (props: Props) => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

export default Pages;
