import React from "react";

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "It works!",
        };
    }

    render() {
        return (
            <div>
                <p>This is a test para</p>
                <p>Another testt</p>
                <h1>{ this.state.title }</h1>
            </div>
        );
    }
}
