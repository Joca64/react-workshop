import React from "react";

const ToDoApp = ({ counter, decrement, increment }) => (
    <div>
        <h1>ToDoApp works!</h1>
        <hr />
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <pre>{JSON.stringify(counter, null, 2)}</pre>
    </div>
);

export default ToDoApp;