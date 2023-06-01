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

export default Product;
