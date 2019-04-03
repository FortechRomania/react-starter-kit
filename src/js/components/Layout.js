import React from "react";
import Counter from "./Counter";

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "It works!",
        };
    }

    render() {
        return (
            <div style={ { textAlign: "center" } }>
                <h1>{ this.state.title }</h1>
                <Counter />
            </div>
        );
    }
}
