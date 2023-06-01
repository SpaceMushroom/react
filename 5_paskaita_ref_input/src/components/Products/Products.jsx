// Fetchinsins duomenys su useEffect();
// Kol neužsikrovė duomenys iš fetch - rodys "Loading.." tekstą (čia naudosim conditional rendering);
// Kai pasikraus - duomenys bus išsaugoti useState ir iš ten - atsivaizduos puslapyje;
// Paspaudus delete mygtuką - ištrinins įrašas (pasileis funkciją, kuri update'ins useState prafiltruodama array).
import Product from "./Product";
import { useState, useEffect } from "react";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetch("https://golden-whispering-show.glitch.me")
      .then((resp) => resp.json())
      .then((response) => {
        setIsLoading(false);
        setProducts(response);
      })
      .catch((error) => console.error(error));
  }, []);

  const removeProduct = (id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((item) => item.id !== id)
    );
  };

  const deleteItem = (id) => {
    fetch(`https://golden-whispering-show.glitch.me/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        removeProduct(id);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="container">
      {isLoading && <p>Loading...</p>}
      {!isLoading && products.length === 0 && <p>No products found..</p>}
      {products.map((item) => (
        <Product
          key={item.id}
          id={item.id}
          image={item.image}
          title={item.title}
          price={item.price}
          deleteItem={deleteItem}
        />
      ))}
    </div>
  );
};

export default Products;
