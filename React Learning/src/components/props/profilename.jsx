import React from 'react'

const Profilename = (props) => {
  console.log(props);
  
  return (
      <div className="profilecard">
        <img src="https://images.unsplash.com/photo-1768928955656-ee026c4baf15?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Display Pic" />
        <h1>{props.user}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor commodi atque autem deleniti quo minima tenetur, voluptate provident qui fuga cumque. Quisquam iure quis sapiente, sit eius, eaque incidunt, quaerat ipsa neque esse architecto.</p>
        <button>View Profile</button>
      </div>
  )
}

export default Profilename
