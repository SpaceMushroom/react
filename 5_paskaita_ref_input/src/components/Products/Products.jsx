// Fetchinsins duomenys su useEffect();
// Kol neužsikrovė duomenys iš fetch - rodys "Loading.." tekstą (čia naudosim conditional rendering);
// Kai pasikraus - duomenys bus išsaugoti useState ir iš ten - atsivaizduos puslapyje;
// Paspaudus delete mygtuką - ištrinins įrašas (pasileis funkciją, kuri update'ins useState prafiltruodama array).

import { useState, useEffect } from "react";
import "./Products.css";

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://golden-whispering-show.glitch.me")
      .then((resp) => resp.json())
      .then((response) => {
        setTimeout(() => {
          //setTimeout kad užlaikyti data užsikrovimą iš
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
          <div key={item.id} className="product">
            <img src={item.image} alt={item.title} />
            <h3>€ {item.price}</h3>
            <p>{item.title}</p>
            <button onClick={() => deleteItem(item.id)}>Ištrinti</button>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Products;
