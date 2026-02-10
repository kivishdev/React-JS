import React from "react";
import Card  from "./components/01_JSX/card";
import Navbar from "./components/01_JSX/Navbar";
import Profilename from "./components/props/profilename.jsx";
import Event from "./components/Event Listener/Event.jsx";

function ReactApp() {
  return (
    // Isko bolte hai fragment. Jahaa hum 2 cheezo ko ek saath import kr sktee hai.
    <>
      <Navbar />
      <Card />
      <div className="parent">
      <Profilename user="Naamu" age= {18}/>
      <Profilename user="Naman" age= {21}/>
   </div> 
      <Event />
  </>
  );
}

export default ReactApp;
