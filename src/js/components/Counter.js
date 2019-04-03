import React, { useState } from "react";

const Counter = () => {
    const [ count, setCount ] = useState( 0 );
    return (
        <div>
            <h3>Counter with React Hooks</h3>
            <p>You clicked {count} times</p>
            <button onClick={ () => setCount( count + 1 ) }>
            Click me
            </button>
        </div>
    );
};

export default Counter;
