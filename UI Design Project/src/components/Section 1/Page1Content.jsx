import React from 'react'
import LeftContent from './LeftContent.jsx'
import RightContent from './RightContent.jsx'

const Page1Content = (props) => {
  
  return (
    <div className=' flex gap-10 items-center justify-between h-[80vh] bg-white'>
      <LeftContent />
      <RightContent users = {props.users}/>
    </div>
  )
}

export default Page1Content