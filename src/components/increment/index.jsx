import React from "react";
import "./styles.scss";

const Increment = ({ incrementNumber, decrementNumber, noOfOptions }) => (
  <div className="increment-control">
    <input
      value={noOfOptions}
      placeholder="Number of suggestions"
      className="value"
      onChange={() => {}}
    ></input>
    <span className="arrow increment" onClick={incrementNumber}>
      &#8710;
    </span>
    <span className="arrow decrement" onClick={decrementNumber}>
      &#8711;
    </span>
  </div>
);

export default Increment;
