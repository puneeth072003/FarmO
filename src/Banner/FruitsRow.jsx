import React from "react";
import ProductComponent from "./productComponent";
import Tomato from "../assets/tomato.png";

const FruitsRow = () => {
  //Buy operations
  const handleBuyClick = (productID) => {
    console.log("Buy Now clicked of ID" + productID);
  };

  //Cart operation
  const handleAddToCartClick = (productID) => {
    console.log("Add to Cart clicked of ID" + productID);
    window.cart.push(getProduct(productID));
    console.log(cart);
  };

  //Remove from the cart operation
  const removeFromCartButton = (productID) => {
    window.cart = window.cart.filter((item) => item.id !== productID);
    console.log(cart);
  };

  //To fetch particular productID
  const getProduct = (productID) => {
    return window.fruits.find((product) => product.id === productID);
  };

  return (
    <div>
      <h1>Fruits</h1>
      <div className="product-box">
        {window.fruits.map((product) => (
          <ProductComponent
            key={product.id}
            productDetails={product}
            onBuyClick={() => handleBuyClick(product.id)}
            onAddToCartClick={() => handleAddToCartClick(product.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default FruitsRow;
