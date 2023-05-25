import PropTypes from "prop-types";
import Button from "./Button";
import { BsArrowLeftSquare, BsArrowRightSquare } from "react-icons/bs";

import PlusMinus from "./PlusMinus";

const Product = (props) => {
  return (
    <div
      style={{
        display: "flex",
        margin: "2rem",
        gap: "2rem",
      }}
    >
      <div>
        <img
          style={{ maxWidth: "100%", minWidth: "400px" }}
          src={props.src}
          alt={"Photo of" + props.title}
        />
      </div>
      <div style={{ maxWidth: "40%" }}>
        <div
          style={{
            display: "flex",
          }}
        >
          <div
            style={{
              fontSize: "2rem",
              fontFamily: "Arial Narrows",
            }}
          >
            {props.title}
          </div>
          <div
            style={{
              display: "flex",
              gap: "5px",
              marginLeft: "1rem",
            }}
          >
            <BsArrowLeftSquare size={"2rem"} />
            <BsArrowRightSquare size={"2rem"} />
          </div>
        </div>
        <div
          style={{
            fontSize: "1.5rem",
            fontWeight: "600",
            padding: "1rem 0",
          }}
        >
          {props.price.toFixed(2) + " $"}
        </div>
        <div>{props.description}</div>
        <div
          style={{
            fontWeight: "600",
          }}
        >
          Availability:{" "}
          <span
            style={{
              fontWeight: "400",
              color: "grey",
            }}
          >
            {props.availability + " in stock"}
          </span>
        </div>
        <br />
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div>
            <PlusMinus />
          </div>
          <Button title="Add to cart" />
        </div>
        <br />
        <div>{"Category: " + props.category}</div>
      </div>
    </div>
  );
};

Product.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.element.isRequired,
  availability: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
};

export default Product;
