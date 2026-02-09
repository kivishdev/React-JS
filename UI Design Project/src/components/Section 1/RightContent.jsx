import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard.jsx'
const RightContent = (props) => {
  
  return (
    <div id='right' className='h-full w-2/3 p-4 flex flex-nowrap gap-5 overflow-scroll bg-white'>
      {props.users.map(function (data, idx) {
        return <RightCard key = {idx} CardNum = {data.num} CardImg = {data.img} CardTag = {data.tag} CardCss = {data.css}/>
      })}
    </div>
  )
}

export default RightContent