import React from 'react'

const Event = () => {

    function Btnclick() {     // Event trigger pe ye function chalega
        console.log("Hello Duniya");
    }
  return (
    <div>
        <button onClick={Btnclick}>Click Here</button>        {/* Event Listener Lgaana */}
    </div>
  )
}

export default Event