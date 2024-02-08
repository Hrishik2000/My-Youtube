import React from 'react'
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';



const Body = () => {
  
  

  return (
    <div className='flex'>
      <Sidebar/>
      {/* to show dynamic data from router */}
      <Outlet/>
   
    </div>
  )
}

export default Body
