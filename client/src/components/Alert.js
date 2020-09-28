import React from "react";

// Alert function if user types in something other then a recipe item
const Alert = ({alert}) => {
  return (
    <div className="alert">
      <h3>{alert}</h3>
    </div>
  );
};

// Export Alert
export default Alert;
