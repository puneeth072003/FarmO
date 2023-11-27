import React from "react";
import "./Modal.css";
import Modal from "react-modal";
import { useState } from "react";
import { useEffect } from "react";
import FinalModal from "../Cart/FinalModal";

const BuyModalComponent = ({
  isOpen,
  closeModal,
  productInfo,
  farmersData,
}) => {
  // const [selectedQuantity, setSelectedQuantity] = useState(1);
  // const [selectedFarmer, setSelectedFarmer] = useState(null);

  // const handleQuantityChange = (event) => {
  //   setSelectedQuantity(parseInt(event.target.value, 10));
  // };

  // const handleFarmerChange = (event) => {
  //   setSelectedFarmer(event.target.value);
  // };
  // ####################################################
  Modal.setAppElement("#root");
  const handlePurchase = () => {
    console.log(
      `Purchase confirmed: ${selectedQuantity} units from Farmer ${selectedFarmer}`
    );
  };
  const [selectedFarmer, setSelectedFarmer] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [purchaseConfirm, setpurchaseConfirm] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const handleQuantityChange = (event) => {
    console.log("Quantity changed");
    setSelectedQuantity(parseInt(event.target.value, 10));
    // Calculate price whenever quantity changes
    calculateTotalPrice();
  };

  const handleFarmerChange = (event) => {
    console.log("Farmer changed");
    setSelectedFarmer(event.target.value);
    // Calculate price whenever farmer changes
    calculateTotalPrice();
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [selectedFarmer, selectedQuantity]);

  const calculateTotalPrice = () => {
    let farmer = farmersData.find((f) => f.name === selectedFarmer);
    if (farmer) {
      let pricePerKg = farmer.price;
      let total = pricePerKg * selectedQuantity;
      console.log("Price is being calcualted");
      setTotalPrice(total);
    } else {
      setTotalPrice(0);
    }
  };

  const handleFinalPurchase = () => {
    if (name && address) {
      calculateTotalPrice();
      closeModal();
      setpurchaseConfirm(true);
      handleAdditionalInfoSubmit();
    } else {
      alert("Order Failure");
    }
  };

  const handleAdditionalInfoSubmit = () => {
    window.buyChart.push({
      product: productInfo.name,
      farmerName: selectedFarmer,
      quantity: selectedQuantity,
      customer: name,
      customerAddress: address,
      price: totalPrice,
    });
    console.log(window.buyChart);
    console.log("Purchase confirmed!");
    setpurchaseConfirm(true);
    alert("Order Placed");
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Purchase Details Modal"
      className="custom-modal"
    >
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">Purchase Details</h2>
          <button
            type="button"
            className="btn-close"
            onClick={closeModal}
            aria-label="Close"
          ></button>
        </div>
        <div className="modal-body">
          <h2>{productInfo.name}</h2>
          <h4>Diffrent prices:</h4>
          <p>{productInfo.quantity}</p>
          <ul>
            {farmersData.map((farmer) => (
              <li key={farmer.id}>
                {farmer.name}: ₹{farmer.price} per kg
              </li>
            ))}
          </ul>
        </div>

        <div className="modal-body">
          <h4>What you are purchasing</h4>
          {/* Quantity selection */}
          <label htmlFor="quantity">Quantity: (in Kg)</label>
          <br />
          <input
            type="number"
            id="quantity"
            value={selectedQuantity}
            onChange={(e) => {
              handleQuantityChange(e);
              calculateTotalPrice();
            }}
            min="1"
          />

          {/* Farmer selection */}
          <br />
          <label htmlFor="farmer">Select Farmer:</label>
          <br />
          <select
            id="farmer"
            value={selectedFarmer}
            onChange={(e) => {
              handleFarmerChange(e);
              calculateTotalPrice();
            }}
          >
            <option value="" disabled>
              Select a farmer
            </option>
            {farmersData.map((farmer) => (
              <option key={farmer.id} value={farmer.id}>
                {farmer.name}
              </option>
            ))}
          </select>
          <br />
          <br />
          <h2>
            <b>Total: ₹{totalPrice}</b>
          </h2>
        </div>
        <h2>
          <b>Shipping Details</b>
        </h2>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <br />
        <br />
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={closeModal}
          >
            Close
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleFinalPurchase}
          >
            Confirm Purchase
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default BuyModalComponent;
