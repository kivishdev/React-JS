import React from 'react'
import LeftContent from './LeftContent.jsx'
import RightContent from './RightContent.jsx'

const Page1Content = (props) => {
  console.log('Ye rhaa Page1 Contents ka',props.users);
  
  return (
    <div className='px-10 py-10 flex gap-10 items-center justify-between h-[80vh] bg-white'>
      <LeftContent />
      <RightContent users = {props.users}/>
    </div>
  )
}

export default Page1Content