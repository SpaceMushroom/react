import PropTypes from "prop-types";
import React from "react";

class ClassButton extends React.Component {
    render() {
        return <h1>Helo, {this.props.name}</h1>;
    }
}


ClassButton.propTypes = {
    name: PropTypes.string
}

ClassButton.defaultProps = {
    name: "ClassButton"
}

export default ClassButton;