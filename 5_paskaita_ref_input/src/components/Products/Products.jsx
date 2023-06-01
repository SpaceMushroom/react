// Fetchinsins duomenys su useEffect();
// Kol neužsikrovė duomenys iš fetch - rodys "Loading.." tekstą (čia naudosim conditional rendering);
// Kai pasikraus - duomenys bus išsaugoti useState ir iš ten - atsivaizduos puslapyje;
// Paspaudus delete mygtuką - ištrinins įrašas (pasileis funkciją, kuri update'ins useState prafiltruodama array).
import Product from "./Product";
import { useState, useEffect } from "react";
import "./Products.css";

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://golden-whispering-show.glitch.me")
      .then((resp) => resp.json())
      .then((response) => {
        setTimeout(() => {
          //setTimeout kad užlaikyti data užsikrovimą iš API
          setData(response);
        }, 2000);
      })
      .catch((error) => console.error(error));
  }, []);

  const deleteItem = (id) => {
    fetch(`https://golden-whispering-show.glitch.me/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error deleting item from API.");
        }
        setData((currentData) => currentData.filter((item) => item.id !== id));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="container">
      {data.length > 0 ? (
        data.map((item) => (
          <Product
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            deleteItem={deleteItem}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Products;
