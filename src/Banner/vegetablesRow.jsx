import React from "react";
import ProductComponent from "./productComponent";
import Tomato from "../assets/tomato.png";
import { useState } from "react";
import ModalComponent from "../Modal/Modal";

const VegetablesRow = () => {
  const VegefarmersData = [
    { id: 1, name: "Farmer John", price: 18 },
    { id: 2, name: "Farmer Jane", price: 20 },
    { id: 3, name: "Farmer Mike", price: 17.5 },
    { id: 4, name: "Farmer Sarah", price: 19 },
    { id: 5, name: "Farmer Bob", price: 18.8 },
  ];

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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProductID, setSelectedProductID] = useState(null);

  //Buy operations
  const handleBuyClick = (productID) => {
    console.log("Buy Now clicked of ID " + productID);
    setSelectedProductID(productID);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProductID(null);
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
        <ModalComponent
          isOpen={isModalOpen}
          closeModal={closeModal}
          productInfo={window.products}
          farmersData={VegefarmersData}
        />
      </div>
    </div>
  );
};

export default VegetablesRow;
