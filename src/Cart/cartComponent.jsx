import "./Cart.css";

const CartComponent = ({ productDetails, onRemoveClick }) => {
  const { name, lowestPrice } = productDetails;

  return (
    <div className="Cart">
      <h2 className="Cart-title">{name}</h2>
      <p className="Cart-price">Lowest Price: {lowestPrice}</p>
      <div className="Cartbutton-container">
        <button onClick={onRemoveClick}>Remove</button>
      </div>
    </div>
  );
};

export default CartComponent;
