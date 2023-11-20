import React from "react";
import CartRow from "./CartRow";
import "./Cart.css";

const Cart = () => {
  return (
    <>
      <div className="Cart-page">
        <h1>Shopping Cart</h1>
        <CartRow />
      </div>
    </>
  );
};

export default Cart;
