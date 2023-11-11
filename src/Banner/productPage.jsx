import React from "react";
import "./Banner.css";
import Banner from "../assets/banner.jpg";
import VegetablesRow from "./vegetablesRow";
import FruitsRow from "./FruitsRow";
import GrainsRow from "./GrainsRow";
const ProductPage = () => {
  return (
    <>
      <img src={Banner} alt="Banner" className="productpage-banner" />
      <div className="product-page">
        <VegetablesRow />
        <FruitsRow />
        <GrainsRow />
      </div>
    </>
  );
};

export default ProductPage;
