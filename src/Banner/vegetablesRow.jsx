import React from "react";
import ProductComponent from "./productComponent";
import Tomato from "../assets/tomato.png";
import Apple from "../assets/apple.png";
import Avocado from "../assets/avocado.png";
import Beetroot from "../assets/beetroot.png";
import Brinjal from "../assets/brinjal.png";
import Broccoli from "../assets/brocoli.png";
import Cabbage from "../assets/cabbage.png";
import Carrot from "../assets/carrot.png";
import Corn from "../assets/corn.png";
import Cucumber from "../assets/cucumber.png";
import Grape from "../assets/grape.png";
import Guava from "../assets/guava.png";
import Ladyfinger from "../assets/ladyfinger.png";
import Lemon from "../assets/lemon.png";
import Mango from "../assets/mango.png";
import Onion from "../assets/onion.png";
import Orange from "../assets/orange.png";
import Papaya from "../assets/papaya.png";
import Pineapple from "../assets/pineapple.png";
import Pomegranate from "../assets/pomegranate.png";
import Potato from "../assets/potato.png";
import Pumpkin from "../assets/pumpkin.png";
import RedChilli from "../assets/redchilli.png";
import Strawberry from "../assets/strawberry.png";
import Watermelon from "../assets/watermelon.png";

import { useState } from "react";
import ModalComponent from "../Modal/Modal";

const VegetablesRow = () => {
  window.products = [
    {
      id: 1,
      name: "Tomato",
      price: 20,
      imageUrl: Tomato,
      farmers: [
        { name: "Farmer Tim", price: 18 },
        { name: "Farmer Lisa", price: 19 },
        { name: "Farmer Alex", price: 20 },
      ],
    },
    {
      id: 2,
      name: "Potato",
      price: 30,
      imageUrl: Potato,
      farmers: [
        { name: "Farmer Jake", price: 28 },
        { name: "Farmer Emily", price: 30 },
        { name: "Farmer Ryan", price: 29 },
        { name: "Farmer Jake", price: 28 },
      ],
    },
    {
      id: 3,
      name: "Ladyfinger",
      price: 40,
      imageUrl: Ladyfinger,
      farmers: [
        { name: "Farmer Sophia", price: 38 },
        { name: "Farmer Noah", price: 40 },
        { name: "Farmer Grace", price: 39 },
      ],
    },
    {
      id: 4,
      name: "Pumpkin",
      price: 20,
      imageUrl: Pumpkin,
      farmers: [
        { name: "Farmer Lily", price: 18 },
        { name: "Farmer Aiden", price: 20 },
        { name: "Farmer Mason", price: 19 },
      ],
    },
    {
      id: 5,
      name: "Onion",
      price: 20,
      imageUrl: Onion,
      farmers: [
        { name: "Farmer Harper", price: 18 },
        { name: "Farmer Ethan", price: 19 },
        { name: "Farmer Ava", price: 20 },
      ],
    },
    {
      id: 6,
      name: "Broccoli",
      price: 20,
      imageUrl: Broccoli,
      farmers: [
        { name: "Farmer Jackson", price: 18 },
        { name: "Farmer Scarlett", price: 19 },
        { name: "Farmer Liam", price: 20 },
      ],
    },
    {
      id: 7,
      name: "Red Chilli",
      price: 20,
      imageUrl: RedChilli,
      farmers: [
        { name: "Farmer Isabella", price: 18 },
        { name: "Farmer Henry", price: 19 },
        { name: "Farmer Jackson", price: 20 },
      ],
    },
    {
      id: 8,
      name: "Carrot",
      price: 20,
      imageUrl: Carrot,
      farmers: [
        { name: "Farmer Addison", price: 18 },
        { name: "Farmer Oliver", price: 19 },
        { name: "Farmer Lily", price: 20 },
      ],
    },
    {
      id: 9,
      name: "Beetroot",
      price: 20,
      imageUrl: Beetroot,
      farmers: [
        { name: "Farmer Ethan", price: 18 },
        { name: "Farmer Amelia", price: 19 },
        { name: "Farmer Benjamin", price: 20 },
      ],
    },
    {
      id: 10,
      name: "Brinjal",
      price: 20,
      imageUrl: Brinjal,
      farmers: [
        { name: "Farmer Mia", price: 18 },
        { name: "Farmer Samuel", price: 19 },
        { name: "Farmer Zoe", price: 20 },
      ],
    },
    {
      id: 11,
      name: "Cabbage",
      price: 20,
      imageUrl: Cabbage,
      farmers: [
        { name: "Farmer Leo", price: 18 },
        { name: "Farmer Ava", price: 19 },
        { name: "Farmer Lucas", price: 20 },
      ],
    },
    {
      id: 12,
      name: "Cucumber",
      price: 20,
      imageUrl: Cucumber,
      farmers: [
        { name: "Farmer William", price: 18 },
        { name: "Farmer Grace", price: 19 },
        { name: "Farmer Elijah", price: 20 },
      ],
    },
  ];

  window.fruits = [
    {
      id: 1,
      name: "Apple",
      price: 20,
      imageUrl: Apple,
      farmers: [
        { name: "Farmer John", price: 18 },
        { name: "Farmer Jane", price: 20 },
        { name: "Farmer Mike", price: 17.5 },
        { name: "Farmer Sarah", price: 19 },
        { name: "Farmer Bob", price: 18.8 },
      ],
    },
    {
      id: 2,
      name: "Avocado",
      price: 20,
      imageUrl: Avocado,
      farmers: [
        { name: "Farmer Alex", price: 22 },
        { name: "Farmer Lisa", price: 21 },
        { name: "Farmer Tom", price: 19.5 },
      ],
    },
    {
      id: 3,
      name: "Corn",
      price: 20,
      imageUrl: Corn,
      farmers: [
        { name: "Farmer Carol", price: 18.5 },
        { name: "Farmer David", price: 20.5 },
        { name: "Farmer Emily", price: 19 },
      ],
    },
    {
      id: 4,
      name: "Grapes",
      price: 20,
      imageUrl: Grape,
      farmers: [
        { name: "Farmer Jack", price: 17 },
        { name: "Farmer Olivia", price: 19.5 },
        { name: "Farmer Henry", price: 18 },
      ],
    },
    {
      id: 5,
      name: "Guava",
      price: 20,
      imageUrl: Guava,
      farmers: [
        { name: "Farmer Zoe", price: 21 },
        { name: "Farmer William", price: 19 },
        { name: "Farmer Ava", price: 20.5 },
      ],
    },
    {
      id: 6,
      name: "Lemon",
      price: 20,
      imageUrl: Lemon,
      farmers: [
        { name: "Farmer Sophie", price: 19 },
        { name: "Farmer Ethan", price: 18.5 },
        { name: "Farmer Mia", price: 20 },
      ],
    },
    {
      id: 7,
      name: "Mango",
      price: 20,
      imageUrl: Mango,
      farmers: [
        { name: "Farmer Noah", price: 19.5 },
        { name: "Farmer Isabella", price: 20 },
        { name: "Farmer Liam", price: 18 },
      ],
    },
    {
      id: 8,
      name: "Orange",
      price: 20,
      imageUrl: Orange,
      farmers: [
        { name: "Farmer Amelia", price: 21 },
        { name: "Farmer James", price: 19 },
        { name: "Farmer Harper", price: 20.5 },
      ],
    },
    {
      id: 9,
      name: "Papaya",
      price: 20,
      imageUrl: Papaya,
      farmers: [
        { name: "Farmer Elijah", price: 18 },
        { name: "Farmer Evelyn", price: 20 },
        { name: "Farmer Benjamin", price: 19.5 },
      ],
    },
    {
      id: 10,
      name: "Pineapple",
      price: 20,
      imageUrl: Pineapple,
      farmers: [
        { name: "Farmer Scarlett", price: 20.5 },
        { name: "Farmer Samuel", price: 19 },
        { name: "Farmer Grace", price: 18.5 },
      ],
    },
    {
      id: 11,
      name: "Pomegranate",
      price: 20,
      imageUrl: Pomegranate,
      farmers: [
        { name: "Farmer Jackson", price: 18 },
        { name: "Farmer Lily", price: 19.5 },
        { name: "Farmer Aiden", price: 20 },
      ],
    },
    {
      id: 12,
      name: "Strawberry",
      price: 20,
      imageUrl: Strawberry,
      farmers: [
        { name: "Farmer Addison", price: 20.5 },
        { name: "Farmer Sebastian", price: 19 },
        { name: "Farmer Aubrey", price: 18 },
      ],
    },
    {
      id: 13,
      name: "Watermelon",
      price: 20,
      imageUrl: Watermelon,
      farmers: [
        { name: "Farmer Leo", price: 19 },
        { name: "Farmer Sofia", price: 18.5 },
        { name: "Farmer Lucas", price: 20 },
      ],
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProductID, setSelectedProductID] = useState(null);

  // Buy operations
  const handleBuyClick = (productID) => {
    console.log("Buy Now clicked of ID " + productID);
    setSelectedProductID(productID);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProductID(null);
  };

  // Cart operation
  const handleAddToCartClick = (productID) => {
    console.log("Add to Cart clicked of ID" + productID);
    window.cart.push(getProduct(productID));
    console.log(window.cart);
    alert("Added to cart");
  };

  // Remove from the cart operation
  const removeFromCartButton = (productID) => {
    window.cart = window.cart.filter((item) => item.id !== productID);
    console.log(cart);
  };

  // To fetch a particular product based on productID
  const getProduct = (productID) => {
    return window.products.find((product) => product.id === productID);
  };

  const selectedProduct = getProduct(selectedProductID);

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
        {isModalOpen && selectedProduct && (
          <ModalComponent
            isOpen={isModalOpen}
            closeModal={closeModal}
            productInfo={selectedProduct}
            farmersData={selectedProduct.farmers}
          />
        )}
      </div>
    </div>
  );
};

export default VegetablesRow;
