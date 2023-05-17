import React from "react";
import ClassButton from "./ClassButton";


class ClassDiv extends React.Component {
    render() {
        return <div>
            <h3>Class H3 tekstas</h3>
            <p>Class P tekstas</p>
            <ClassButton name="ClassButtonas ClassDiv'e" />
            </div>;
    }
}



export default ClassDiv;