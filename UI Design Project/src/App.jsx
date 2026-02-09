import React from 'react'
import Section1 from './components/Section 1/Section1.jsx'
import Section2 from './components/Section 2/Section2.jsx'
const App = () => {
  const users =[
    {
      num: 1,
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      tag: 'Satisfied' 
  },
    {
    num: 2,
    img: 'https://images.unsplash.com/photo-1507206130118-b5907f817163?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro: '',
    tag: 'UnderBanked'
  },
    {
    num:3,
    img: 'https://images.unsplash.com/photo-1600275669283-4bf2bb8a990c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro: '', 
    tag: 'UnderServed'
  },
  {
      num: 4,
      img: 'https://images.unsplash.com/photo-1541560052-5e137f229371?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '', 
      tag: 'UnderWork'
  },
  {
      num: 5,
      img: 'https://images.unsplash.com/photo-1701794713505-fd5f8fcc3abf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Ds',
      intro: '',
      tag: 'Underright'
  },
  ]
  return (
    <div>
    <Section1 users={users} />
    <Section2 />
    </div>
  )
}

export default App