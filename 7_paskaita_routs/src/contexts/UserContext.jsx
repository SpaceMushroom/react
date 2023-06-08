import { useState, createContext } from "react";

const UserContext = createContext({
  idArray: () => [],
  blockUser: () => null,
  unblockUser: () => null,
});

const UserProvider = ({ children }) => {
  const [idArray, setIdArray] = useState([]);

  const blockUser = (id) => {
    setIdArray((prevIdArray) => [...prevIdArray, id]);
  };

  const unblockUser = (id) => {
    setIdArray((prevIdArray) => prevIdArray.filter((itemId) => itemId !== id));
  };

  return (
    <UserContext.Provider value={{ idArray, blockUser, unblockUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
