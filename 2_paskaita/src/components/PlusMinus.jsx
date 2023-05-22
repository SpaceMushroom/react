import { useState } from "react";

const PlusMinus = () => {
  const [number, setNumber] = useState(0);

  const minusNumber = () => {
    setNumber((prevNumber) => prevNumber - 1);
  };

  const plusNumber = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };

  return (
    <div>
      <h1>
        <button onClick={minusNumber}>-</button>
        {number}
        <button onClick={plusNumber}>+</button>
      </h1>
    </div>
  );
};

export default PlusMinus;
