//Les imports
// Il est obligatoire d'importer React
import React from "react";
import "./index.css";

//La déclaration du composant
const Component1 = () => {
  const integer = 1;
  const string = "Hello World";
  const array = ["student", "teacher"];
  const myFunction = () => {
    return <div>Ma fonction</div>;
  };
  //Le "return" dans lequel nous allons trouvé le html
  return (
    <>
      <div className="containerComponent1">
        Component1
        <div>{integer}</div>
        <div>{string}</div>
        <div>{array}</div>
        <div>{myFunction()}</div>
      </div>
    </>
  );
};
// L'export du composant pour qu'il puisse être utilisé dans App
export default Component1;
