import PropTypes from "prop-types";

const Button = (props) => {
  return props.variant === "text" ? (
    <button
      onClick={props.click}
      style={{
        color: "rgb(107, 107, 222)",
        backgroundColor: "white",
        border: "none",
        margin: "1rem",
        padding: "0.5rem",
        borderRadius: "0.2rem",
      }}
    >
      {props.title}
    </button>
  ) : props.variant === "contained" ? (
    <button
      onClick={props.click}
      style={{
        color: "white",
        backgroundColor: "rgb(107, 107, 222)",
        border: "none",
        margin: "1rem",
        padding: "0.5rem",
        borderRadius: "0.2rem",
      }}
    >
      {props.title}
    </button>
  ) : (
    <button
      onClick={props.click}
      style={{
        color: "rgb(107, 107, 222)",
        backgroundColor: "white",
        margin: "1rem",
        padding: "0.5rem",
        borderRadius: "0.2rem",
        borderColor: "rgb(107, 107, 222)",
      }}
    >
      {props.title}
    </button>
  );
};

export default Button;
