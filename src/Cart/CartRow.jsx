import React, { useEffect } from "react";
import CartComponent from "./cartComponent";
import Tomato from "../assets/Tomato.png";
import { useState } from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import FinalModal from "./FinalModal";

const CartRow = () => {
  window.Cart = window.cart;
  const [cart, setCart] = useState(window.Cart);

  const [cartEmpty, setCartEmpty] = useState(true);
  // Function to handle removing an item from the cart
  const handleRemove = (productId) => {
    // Update the state to remove the item
    setCart((cart) => cart.filter((item) => item.id !== productId));
  };

  useEffect(() => {
    console.log("Cart has changed:", cart);
  }, [cart]);

  let prevCart = window.cart;
  window.bought = prevCart.length;
  const BuyAll = () => {
    // Clear the entire cart

    setCart([]);
    setCartEmpty(false);

    console.log("Cart Empty now..!!!");
  };

  return (
    <div>
      <div className="Cart-box">
        {cart.map((product) => (
          <CartComponent
            key={product.id}
            productDetails={product}
            onRemoveClick={() => handleRemove(product.id)}
          />
        ))}
      </div>
      <div>
        <h3>
          {cartEmpty
            ? "You can buy all the Items above by clicking this button below"
            : "There is nothing in the Cart to buy"}
        </h3>
        <br />
        {cartEmpty ? (
          <button
            onClick={() => {
              BuyAll();
              document.getElementById("buyAllOffcanvas").classList.add("show");
            }}
            className="buyAllButton"
            data-bs-toggle="offcanvas"
            data-bs-target="#buyAllOffcanvas"
          >
            Buy All
          </button>
        ) : (
          <Link to="/product">
            <button className="buyAllButton">Browse products</button>
          </Link>
        )}
      </div>

      {/* Offcanvas Markup */}
      <FinalModal price="20" />
    </div>
  );
};

export default CartRow;
