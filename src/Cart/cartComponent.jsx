import "./Cart.css";

const CartComponent = ({ productDetails, onRemoveClick }) => {
  const { name, price } = productDetails;

  return (
    <div className="Cart">
      <h2 className="Cart-title">{name}</h2>
      <p className="Cart-price">Avg price: {price}</p>
      <div className="Cartbutton-container">
        <button onClick={onRemoveClick}>Remove</button>
      </div>
    </div>
  );
};

export default CartComponent;
