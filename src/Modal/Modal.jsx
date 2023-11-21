import React from "react";
import "./Modal.css";
import Modal from "react-modal";
import { useState } from "react";
import { useEffect } from "react";

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
  const handlePurchase = () => {
    console.log(
      `Purchase confirmed: ${selectedQuantity} units from Farmer ${selectedFarmer}`
    );
    closeModal();
  };
  const [selectedFarmer, setSelectedFarmer] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

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
  }, [selectedFarmer]);

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
            onClick={handlePurchase}
          >
            Confirm Purchase
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default BuyModalComponent;
