import React from 'react'

const Event = () => {
    function Btnclick() {     // Event trigger pe ye function chalega
        console.log("Hello");
    }
  return (
    <>
    <div>
        <button onClick={Btnclick}>Click Here</button>        {/* Event Listener Lgaana */}

        {/* 2nd Tarika: Function bnaake likhna. */}
        <button className='bg-black' onClick={function() {
          console.log("Dab GYaa Button");
        }}>Button Dabaao Yahaa...</button>

        {/* Input Event: */}
        <input onChange={function (val) {
          console.log(val.target.value);
        }} type="text" placeholder='Enter Name'/>
    </div>
    </>
  )
}

export default Event