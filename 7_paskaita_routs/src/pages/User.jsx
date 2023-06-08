import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Map from "../components/Map";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import "./pages.css";

const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { idArray, blockUser, unblockUser } = useContext(UserContext);

  useEffect(() => {
    setIsLoading(true);

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((resp) => resp.json())
      .then((response) => {
        setIsLoading(false);

        setUser(response);
      })
      .catch((error) => console.error(error));
  }, [id]);

  const isBlocked = idArray.includes(Number(id));

  const handleBlock = () => {
    blockUser(Number(id));
  };

  const handleUnblock = () => {
    unblockUser(Number(id));
  };

  console.log(Array, idArray);
  console.log(typeof id);
  console.log(isBlocked);

  return (
    <div>
      <Header />
      <div className="cardContainer">
        {isLoading && <p>Loading...</p>}
        {!isLoading && user === null && <p>API not working...</p>}
        {!isLoading && user !== null && (
          <>
            <div className="userContainer">
              <div className={isBlocked ? "userData redCard" : "userData"}>
                <div>
                  <strong>User data:</strong>{" "}
                  {isBlocked ? (
                    <button className="button" onClick={handleUnblock}>
                      Unblock
                    </button>
                  ) : (
                    <button className="button" onClick={handleBlock}>
                      Block
                    </button>
                  )}
                </div>
                <p>
                  Full name: <strong>{user.name}</strong>
                </p>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <p>Website: {user.website}</p>
              </div>
              <div className={isBlocked ? "userData redCard" : "userData"}>
                <h3>Company:</h3>
                <p>Name: {user.company.name}</p>
                <p>CatchPhrase: {user.company.catchPhrase}</p>
                <p>Business services: {user.company.bs}</p>
              </div>
              <div className={isBlocked ? "userData redCard" : "userData"}>
                <h3>Address:</h3>
                <p>City: {user.address.city}</p>
                <p>Street: {user.address.street}</p>
                <p>Suite: {user.address.suite}</p>
                <p>Zipcode: {user.address.zipcode}</p>
              </div>
            </div>
            <div>
              <h3>Coordinates on map:</h3>
              <Map lat={user.address.geo.lat} lng={user.address.geo.lng} />
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default User;
