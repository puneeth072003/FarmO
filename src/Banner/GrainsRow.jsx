import React from "react";
import ProductComponent from "./productComponent";
import Deep from "../assets/Flowers/Deep Red Chrysanthemum.png";
import jasmin from "../assets/Flowers/jasmine.jpg";
import mogra from "../assets/Flowers/mogra.png";
import open from "../assets/Flowers/Open Chrysanthemum.png";
import Pink from "../assets/Flowers/Pink Chrysanthemum.png";
import Ros from "../assets/Flowers/Pink Rose.png";
import Pompom from "../assets/Flowers/Pompom Chrysanthemum.png";
import Red from "../assets/Flowers/Red Dahlia.png";
import RedRose from "../assets/Flowers/Red Rose.png";
import Yellow from "../assets/Flowers/Yellow Chrysanthemum.png";
import oran from "../assets/Flowers/Orange Dahlia.png";
const GrainsRow = () => {
  window.grains = [
    {
      id: 1,
      name: "Red Chrysanthemum",
      price: 20,
      imageUrl: Deep,
      farmers: [
        { name: "Farmer Tim", price: 18 },
        { name: "Farmer Lisa", price: 19 },
        { name: "Farmer Alex", price: 20 },
      ],
    },
    {
      id: 2,
      name: "jasmin",
      price: 30,
      imageUrl: jasmin,
      farmers: [
        { name: "Farmer Jake", price: 28 },
        { name: "Farmer Emily", price: 30 },
        { name: "Farmer Ryan", price: 29 },
      ],
    },
    {
      id: 3,
      name: "Mogra",
      price: 40,
      imageUrl: mogra,
      farmers: [
        { name: "Farmer Sophia", price: 38 },
        { name: "Farmer Noah", price: 40 },
        { name: "Farmer Grace", price: 39 },
      ],
    },
    {
      id: 4,
      name: "Open Chrysanthemum",
      price: 20,
      imageUrl: open,
      farmers: [
        { name: "Farmer Lily", price: 18 },
        { name: "Farmer Aiden", price: 20 },
        { name: "Farmer Mason", price: 19 },
      ],
    },
    {
      id: 5,
      name: "Pink Chrysanthemum",
      price: 20,
      imageUrl: Pink,
      farmers: [
        { name: "Farmer Harper", price: 18 },
        { name: "Farmer Ethan", price: 19 },
        { name: "Farmer Ava", price: 20 },
      ],
    },
    {
      id: 6,
      name: "Pink Rose",
      price: 20,
      imageUrl: Ros,
      farmers: [
        { name: "Farmer Jackson", price: 18 },
        { name: "Farmer Scarlett", price: 19 },
        { name: "Farmer Liam", price: 20 },
      ],
    },
    {
      id: 7,
      name: "Pompom",
      price: 20,
      imageUrl: Pompom,
      farmers: [
        { name: "Farmer Isabella", price: 18 },
        { name: "Farmer Henry", price: 19 },
        { name: "Farmer Jackson", price: 20 },
      ],
    },
    {
      id: 8,
      name: "Red Dahlia",
      price: 20,
      imageUrl: Red,
      farmers: [
        { name: "Farmer Addison", price: 18 },
        { name: "Farmer Oliver", price: 19 },
        { name: "Farmer Lily", price: 20 },
      ],
    },
    {
      id: 9,
      name: "Red Rose",
      price: 20,
      imageUrl: RedRose,
      farmers: [
        { name: "Farmer Ethan", price: 18 },
        { name: "Farmer Amelia", price: 19 },
        { name: "Farmer Benjamin", price: 20 },
      ],
    },
    {
      id: 10,
      name: "Yellow Chrysanthemum",
      price: 20,
      imageUrl: Yellow,
      farmers: [
        { name: "Farmer Mia", price: 18 },
        { name: "Farmer Samuel", price: 19 },
        { name: "Farmer Zoe", price: 20 },
      ],
    },
    {
      id: 11,
      name: "Orange Chrysanthemum",
      price: 20,
      imageUrl: oran,
      farmers: [
        { name: "Farmer Leo", price: 18 },
        { name: "Farmer Ava", price: 19 },
        { name: "Farmer Lucas", price: 20 },
      ],
    },
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
    return window.grains.find((product) => product.id === productID);
  };

  return (
    <div>
      <h1>Flowers</h1>
      <div className="product-box">
        {window.grains.map((product) => (
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

export default GrainsRow;
