import React, { useState } from "react";

const InputBackground = () => {
  const [value, setValue] = useState("");
  const [color, setColor] = useState("white");

  const handleInputChange = (e) => {
    setValue(e.target.value);
    updateColor(e.target.value);
  };

  const updateColor = (inputValue) => {
    if (inputValue.length > 3) {
      setColor("yellow");
    } else if (inputValue.length > 6) {
      setColor("green");
    } else if (inputValue.length > 9) {
      setColor("red");
    } else {
      setColor("white");
    }
  };

  return (
    <div style={{ backgroundColor: color }}>
      <input type="text" value={value} onChange={handleInputChange} />
    </div>
  );
};

export default InputBackground;
