import React from "react";
import CardPracice  from "./components/01_JSX/card";

function ReactApp() {
  return (
    // Isko bolte hai fragment.
    <>
      <div id="dad">Hello 1</div>
      <div>Hello 2</div>
      <div id="chacha">Hello Chacha</div>
      <CardPracice />
    </>
  );
}

export default ReactApp;
