import React from "react";
import Navbar from "./Navbar/Navbar";
import { Support } from "./Support bar/Support.jsx";
import { BrowserRouter } from "react-router-dom";
import Content from "./Router/Content.jsx";

const App = () => {
  window.cart = [];
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Content />
      </BrowserRouter>
      <Support />
    </div>
  );
};

export default App;
