import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <button
      style={{
        color: "white",
        backgroundColor: "rgb(107, 107, 222)",
        border: "none",
        margin: "1rem",
        padding: "0.5rem 2rem",
        borderRadius: "0.2rem",
      }}
    >
      {props.title}
    </button>
  );
};

Button.propTypes = { title: PropTypes.string };

export default Button;
