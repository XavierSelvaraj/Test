import React from "react";
const Second = ({ count, onHandleSecondChange }) => {
  console.log("Second called");

  return (
    <div>
      <div>Count - {count}</div>
      <button onClick={onHandleSecondChange}>Add</button>
    </div>
  );
};

export default React.memo(Second);
