import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card/Card";
import "./pages.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((responce) => {
        setIsLoading(false);

        setUsers(responce);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <Header />
      <div className="cardsContainer">
        {isLoading && <p>Loading...</p>}
        {!isLoading && users.length === 0 && <p>API not working...</p>}
        {users.map((user) => (
          <Card
            key={user.id}
            id={user.id}
            name={user.name}
            email={user.email}
            website={user.website}
            phone={user.phone}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Users;
