import React from 'react'

const Button = ({name}) => {
  return (
    <div className='cursor-pointer' >
      <h1 className='m-2 p-2 rounded-xl text-center bg-gray-200'>{name}</h1>
    </div>
  )
}

export default Button
