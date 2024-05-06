import React, { useState } from "react";

export default function UseState() {
  // Initialize the state with a default value of 0
  const [count, setCount] = useState(0);
  const [objectstate, setObjectState] = useState({ age: 19, siblingsNum: 4 });

  // Function to increment the count
  const incrementCount = () => {
    setCount(count + 1);
  };

  const handleClick = (val) => {
    setObjectState({
      ...objectstate,
      [val]: objectstate[val] + 1,
    });
  };

  const { age, siblingsNum } = objectstate;

  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>

      <div>
        <p>Today I am {age} Years of Age</p>
        <p>I have {siblingsNum} siblings</p>

        <div>
          <button onClick={handleClick.bind(null, "age")}>Get older!</button>
          <button onClick={handleClick.bind(null, "siblingsNum")}>
            More siblings!
          </button>
        </div>
      </div>
    </div>
  );
}
