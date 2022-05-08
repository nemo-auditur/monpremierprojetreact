import React from "react";
import "./index.css";

const Component2 = ({ maPremiereProps }) => {
  const array = ["A", "B", "C", "D", "E", "F"];
  return (
    <>
      <div className="containerComponent2">
        Component2
        <div>{maPremiereProps}</div>
        {array.map((item) => {
          return <div>{item}</div>;
        })}
      </div>
    </>
  );
};
export default Component2;
