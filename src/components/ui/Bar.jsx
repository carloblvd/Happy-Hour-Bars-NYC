import React from "react";

const Bar = ({ bar }) => {
  return (
    <>
      <div className="container">
        <div className="row">{bar.barName}</div>
      </div>
    </>
  );
};

export default Bar;
