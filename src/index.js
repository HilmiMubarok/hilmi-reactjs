import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import 'flowbite';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);