import React, { useEffect } from "react";
import CartComponent from "./cartComponent";
import Tomato from "../assets/Tomato.png";
import { useState } from "react";
import "./Cart.css";
import Logowhite from "./asssets/logowhite.png";
import { Link } from "react-router-dom";

const CartRow = () => {
  window.Cart = [
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
      imageUrl: Tomato,
      farmers: [
        { name: "Farmer Jake", price: 28 },
        { name: "Farmer Emily", price: 30 },
        { name: "Farmer Ryan", price: 29 },
      ],
    },
  ];

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
      <div
        className="offcanvas offcanvas-start"
        data-bs-backdrop="static"
        tabIndex="-1"
        id="buyAllOffcanvas"
        aria-labelledby="buyAllOffcanvasLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="buyAllOffcanvasLabel">
            Order Placed
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div>
            <h3>Price: xxxxxx </h3>
            <h5>Order successfully placed using FarmO.</h5>
            <br />
            <br />
            <h4>Thank you for using</h4>
            <img
              src={Logowhite}
              alt="FarmO-logo"
              className="support-logo"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartRow;
