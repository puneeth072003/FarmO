import "./Banner.css";

const ProductComponent = ({ productDetails, onBuyClick, onAddToCartClick }) => {
  const { name, price, imageUrl } = productDetails;

  return (
    <div className="product">
      <img src={imageUrl} alt={name} className="product-img" />
      <h2 className="product-title">{name}</h2>
      <p className="product-price">Avg price: {price}</p>
      <div className="button-container">
        <button onClick={onBuyClick}>Buy Now</button>
        <button onClick={onAddToCartClick}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductComponent;
