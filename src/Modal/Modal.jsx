import React from "react";
import "./Modal.css";
import Modal from "react-modal";
import { useState } from "react";

const BuyModalComponent = ({
  isOpen,
  closeModal,
  productInfo,
  farmersData,
}) => {
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [selectedFarmer, setSelectedFarmer] = useState(null);

  const handleQuantityChange = (event) => {
    setSelectedQuantity(parseInt(event.target.value, 10));
  };

  const handleFarmerChange = (event) => {
    setSelectedFarmer(event.target.value);
  };

  const handlePurchase = () => {
    console.log(
      `Purchase confirmed: ${selectedQuantity} units from Farmer ${selectedFarmer}`
    );
    closeModal();
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
          <h3>{productInfo.name}</h3>
          <p>Quantity: {productInfo.quantity}</p>
          <ul>
            {farmersData.map((farmer) => (
              <li key={farmer.id}>
                {farmer.name}: ${farmer.price} per unit
              </li>
            ))}
          </ul>
        </div>

        <div className="modal-body">
          <h3>{productInfo.name}</h3>

          {/* Quantity selection */}
          <label htmlFor="quantity">Quantity:</label>
          <br />
          <input
            type="number"
            id="quantity"
            value={selectedQuantity}
            onChange={handleQuantityChange}
            min="1"
          />

          {/* Farmer selection */}
          <br />
          <label htmlFor="farmer">Select Farmer:</label>
          <br />
          <select
            id="farmer"
            value={selectedFarmer}
            onChange={handleFarmerChange}
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
