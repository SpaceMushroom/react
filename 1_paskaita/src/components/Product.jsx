import PropTypes from "prop-types";

function Product(props) {
    return <div>
        <span
            style = {{
                color: "grey"
            }}
        >{props.title}</span>
        <span>{props.subtitle}</span>
        <span>★★★★★</span>
        <span>{props.price}</span>
    </div>
}

Product.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    price: PropTypes.string,
}

export default Product