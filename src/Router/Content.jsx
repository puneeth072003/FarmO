import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import React from "react";
import ProductPage from "../Banner/productPage";
import Cart from "../Cart/Cart";
const Content = () => {
  return (
    <div>
      <Routes>
        <Route path="/product" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default Content;
