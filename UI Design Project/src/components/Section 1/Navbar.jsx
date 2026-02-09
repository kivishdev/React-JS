import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-2 px-10'>
        <h4 className='bg-black text-white rounded-full px-2 py-2 uppercase text-xs'>Target Audience</h4>
        <button className='bg-gray-100 px-6 py-2 uppercase rounded-full tracking-wider text-xs'>Digital Banking Platform</button>
    </div>
  )
}

export default Navbar