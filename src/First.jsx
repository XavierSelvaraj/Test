import React from "react";
const First = ({ count, onHandleChange }) => {
  console.log("First called");

  return (
    <div>
      <div>Count - {count}</div>
      <button onClick={onHandleChange}>Add</button>
    </div>
  );
};

export default React.memo(First);
