import React from "react";
import Logowhite from "./asssets/logowhite.png";

const FinalModal = ({ price }) => {
  return (
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
          <h3>Total Price: Rs {price}</h3>
          <h5>Order successfully placed using FarmO.</h5>
          <br />
          <br />
          <h4>Thank you for using</h4>
          <img src={Logowhite} alt="FarmO-logo" className="support-logo"></img>
        </div>
      </div>
    </div>
  );
};

export default FinalModal;
