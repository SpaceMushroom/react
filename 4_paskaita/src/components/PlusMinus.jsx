import { useState } from "react";

const PlusMinus = () => {
  const [number, setNumber] = useState(1);
  const minNumber = 1;
  const maxNumber = 10;

  const minusNumber = () => {
    setNumber((prevNumber) => Math.max(prevNumber - 1, minNumber));
  };

  const plusNumber = () => {
    setNumber((prevNumber) => Math.min(prevNumber + 1, maxNumber));
  };

  return (
    <div>
      <button style={{ padding: "0.4rem" }} onClick={minusNumber}>
        -
      </button>
      <button style={{ padding: "0.4rem" }}>{number}</button>
      <button style={{ padding: "0.4rem" }} onClick={plusNumber}>
        +
      </button>
    </div>
  );
};

export default PlusMinus;
