import React, { useState } from "react";

const Inputs = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const handleClick = () => {
    setAge((prevAge) => +prevAge + 10);
  };

  return (
    <div>
      <span>First name:</span>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <span>Age:</span>
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button onClick={handleClick}>Add +10 years</button>
      <span>
        <h3>{{ name } ? `${name} age is: ${age}` : `Your age is: ${age}`}</h3>
      </span>
    </div>
  );
};

export default Inputs;
