import React from "react";
import "./Banner.css";
import Banner from "../assets/banner.jpg";
import VegetablesRow from "./vegetablesRow";
import FruitsRow from "./FruitsRow";
import GrainsRow from "./GrainsRow";
const ProductPage = () => {
  return (
    <div className="product-page">
      <img src={Banner} alt="Banner" className="productpage-banner" />
      <VegetablesRow />
      <FruitsRow />
      <GrainsRow />
    </div>
  );
};

export default ProductPage;
