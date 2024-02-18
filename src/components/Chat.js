import React from 'react'

const Chat = ({name,message}) => {
  return (
    <div className=' flex items-center bg-gray-200 my-2 rounded-lg shadow-md '>
        <img
        alt="Dp"
        className="h-7 bg-gray-300 rounded-full m-2"
        src="https://static.thenounproject.com/png/854888-200.png"
      ></img>
      <span className=' font-bold'>{name}: </span ><span className='px-2'>{message}</span>
    </div>
  )
}

export default Chat
