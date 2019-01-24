import React from "react";
import "./style.css";

function Counter(props) {
  return (<h1 className="counter">
    <strong>Score:</strong> {props.score}
    
  </h1>);
}

export default Counter;
