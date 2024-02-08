import React from 'react'
import { useDispatch } from 'react-redux'
import {setToggleMenue} from './utils/appSlice'

const Header = () => {

  const distatch = useDispatch();

  const ToggleMenueHandeler = ()=>{
    distatch(setToggleMenue())
  }



  return (
    <div className='grid grid-flow-col m-2 shadow p-2'>
      <div className='flex h-8 col-span-1  '>
        <img onClick={() =>ToggleMenueHandeler()} className='p-1 cursor-pointer '  alt='menue' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png'></img>
       <a href='/'><img  className="mx-2 p-1 h-8" alt='logo' src='https://vectorseek.com/wp-content/uploads/2021/01/YouTube-Logo-Vector.png'></img></a> 

      </div>
      <div className='col-span-10 text-center'>
        <input className='w-1/2 border border-gray-500 p-2 rounded-l-full ' type='text'></input> 
        <button className='border border-gray-500 p-2 rounded-r-full'>search</button>
      </div>
      <div className='col-span-1 '>
        <img className='h-8' alt="profile" src='https://static.thenounproject.com/png/854888-200.png'></img>
      </div> 
    
    </div>
  )
}

export default Header;
