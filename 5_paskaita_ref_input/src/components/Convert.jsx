import React, { useState } from "react";

const Convert = () => {
  const [weight, setWeight] = useState();
  const [grams, setGrams] = useState(0);
  const [tons, setTons] = useState(0);
  const [pounds, setPounds] = useState(0);

  const handleWeight = (e) => {
    setWeight(e.target.value);
    setGrams(+e.target.value * 1000);
    setTons(+e.target.value / 1000);
    setPounds((+e.target.value * 2.20462262185).toFixed(2));
  };

  return (
    <div>
      <span>Enter number in kilograms to convert:</span>
      <input type="number" value={weight} onChange={handleWeight} />
      <div>
        <p>
          Weight in tons: <strong>{tons}</strong> t
        </p>
        <p>
          Weight in grams: <strong>{grams}</strong> g
        </p>
        <p>
          Weight in punds: <strong>{pounds}</strong> lb
        </p>
      </div>
    </div>
  );
};

export default Convert;
