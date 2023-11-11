import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import React from "react";
import ProductPage from "../Banner/productPage";
const Content = () => {
  return (
    <div>
      <Routes>
        <Route path="/product" element={<ProductPage />} />
      </Routes>
    </div>
  );
};

export default Content;
