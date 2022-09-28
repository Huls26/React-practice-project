import { useState, useReducer } from "react";
import "./counterUseReducer.css";

export default function Counter() {
    let initialCount = {
        count: 0,
    }

    function reducer(state, action) {
        switch (action.type) {
            case 'increment':
              return {count: state.count + 1};
            case 'decrement':
              return {count: state.count - 1};
            case 'reset':
                return initialCount;   
            default:
              throw new Error();
          }
    }

    let [state, dispatch] = useReducer(reducer, initialCount);

    console.log(state)
    return (
        <div className="counter-container">
            <button className="reset" onClick={() => dispatch({type: "reset"})}>reset</button>
            <button className="decrement" onClick={() => dispatch({type: "decrement"})}>-</button>
            <h1 className="count-number">{ state.count }</h1>
            <button className="increment" onClick={() => dispatch({type: "increment"})}>+</button>
        </div>
    )
}

