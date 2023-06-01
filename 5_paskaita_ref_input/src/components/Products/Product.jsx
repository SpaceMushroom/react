import PropTypes from "prop-types";

const Product = ({ id, image, title, price, deleteItem }) => {
  return (
    <div>
      <div className="product">
        <img src={image} alt={title} />
        <h3>€ {price}</h3>
        <p>{title}</p>
        <button onClick={() => deleteItem(id)}>Ištrinti</button>
      </div>
    </div>
  );
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default Product;
