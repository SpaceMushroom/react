import React, { useState } from "react";
import GetJoke from "./GetJoke";
import category from "./Category";
import "./ChuckJokes.css";

const ChuckJokes = () => {
  const options = category; // nusicopinu array iš https://api.chucknorris.io/jokes/categories ir priskiriu kintamajam options
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  }; // funkcija kurios pagalba pasirinkus vieną iš options vykdoma setSelectedOption ir nustatoma reikšmė selectedOption

  return (
    <div className="options">
      <p>
        Select category and get random joke about <strong>Chuck Norris</strong>
      </p>
      <select value={selectedOption} onChange={handleChange}>
        <option value="">Select a category</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}{" "}
        {/* map naudojamas array paduoti į options */}
      </select>
      {selectedOption && (
        <p>
          Selected category:<strong> {selectedOption}</strong>
        </p> // Atvaizduoja pasirinkta Categorija(option)
      )}
      <GetJoke selectedOption={selectedOption} />
      {/* Fetchinam Joke */}
    </div>
  );
};

export default ChuckJokes;
