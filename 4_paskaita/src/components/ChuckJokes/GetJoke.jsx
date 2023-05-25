import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import "./ChuckJokes.css";

// reikalaujam vieno props selectedOption
const GetJoke = ({ selectedOption }) => {
  const [joke, setJoke] = useState("");
  //panaudojam useEffect fetchui
  useEffect(() => {
    // if'as dėl error per pirmą užkrovi
    if (selectedOption) {
      fetch(
        `https://api.chucknorris.io/jokes/random?category=${selectedOption}`
      )
        .then((resp) => resp.json())
        .then((response) => {
          console.log(response);
          setJoke(response.value);
        })
        .catch((error) => console.error(error));
    }
  }, [selectedOption]);

  return (
    <>
      <strong>{joke}</strong>
    </>
  );
};

GetJoke.propTypes = {
  selectedOption: PropTypes.string.isRequired,
};

export default GetJoke;
