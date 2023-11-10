import React from "react";
import ProductComponent from "./productComponent";
import Tomato from "../assets/tomato.png";

const VegetablesRow = () => {
  window.products = [
    { id: 1, name: "Tomato", price: 20, imageUrl: Tomato },
    { id: 2, name: "Tomato", price: 20, imageUrl: Tomato },
    { id: 3, name: "Tomato", price: 20, imageUrl: Tomato },
    { id: 4, name: "Tomato", price: 20, imageUrl: Tomato },
    { id: 5, name: "Tomato", price: 20, imageUrl: Tomato },
    { id: 6, name: "Tomato", price: 20, imageUrl: Tomato },
    { id: 7, name: "Tomato", price: 20, imageUrl: Tomato },
    { id: 8, name: "Tomato", price: 20, imageUrl: Tomato },
    { id: 9, name: "Tomato", price: 20, imageUrl: Tomato },
    { id: 10, name: "Tomato", price: 20, imageUrl: Tomato },
    { id: 11, name: "Tomato", price: 20, imageUrl: Tomato },
    { id: 12, name: "Tomato", price: 20, imageUrl: Tomato },
  ];

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
    return window.products.find((product) => product.id === productID);
  };

  return (
    <div>
      <h1>Vegetables</h1>
      <div className="product-box">
        {window.products.map((product) => (
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

export default VegetablesRow;
