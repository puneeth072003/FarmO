import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import React from "react";
import ProductPage from "../Banner/productPage";
import Cart from "../Cart/Cart";
import Weather from "../weather/weather";
const Content = () => {
  return (
    <div>
      <Routes>
        <Route path="/product" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>
    </div>
  );
};

export default Content;
