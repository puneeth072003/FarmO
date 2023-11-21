import React from "react";
import Navbar from "./Navbar/Navbar";
import { Support } from "./Support bar/Support.jsx";
import { BrowserRouter } from "react-router-dom";
import Content from "./Router/Content.jsx";

const App = () => {
  window.cart = [];
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Content />
        <Support />
      </BrowserRouter>
    </div>
  );
};

export default App;
