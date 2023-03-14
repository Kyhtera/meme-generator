import React from "react";
import "../styles/Counter.css"

function Counter() {

    const [count, setCount] = React.useState(0);

    function add() {
        setCount(count + 1)
    }

    function subtract() {
        setCount(count - 1)
    }

    function reset() {
        setCount(0);
    }

    <button onClick={reset}> Reset </button>

    return (
        <div className="counter" >
            <button className="counter--minus" onClick={subtract}> - </button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={add}> + </button>

            <button className="reset" onClick={reset}>Reset</button>
        </div>
    )
}

export default Counter