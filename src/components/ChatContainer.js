import React, { useEffect } from 'react'
import Chat from "./Chat"
import { useDispatch, useSelector } from 'react-redux'
import { setMessages } from './utils/chatSlice'
import { generateRandomName,generateRandomText } from './utils/helper'

const ChatContainer = () => {
    const dispatch = useDispatch();
    const liveChatData = useSelector(store=> store.chat.messages)
    //console.log(liveChatData)
    useEffect(()=>{

        const i = setInterval(()=>{
            dispatch(setMessages({
                name: generateRandomName(),
                message: generateRandomText()
            }))
        },500)

        return ()=>{
            clearInterval(i);
        }

    },[]);

   

  return (
    
      <div>
        {liveChatData.map((msgData,i)=> <Chat  key={i}  name={msgData.name} message={msgData.message}></Chat> )}
        
        
      </div>

  )
}

export default ChatContainer