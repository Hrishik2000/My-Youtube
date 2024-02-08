import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const buttonList = ["All","Music","Trending","Comedy","Drama","DIY","JavaScript","Engineering","Travel","Love","Google","Vertiv","Technology","Success"];
  return (
    <div className='flex justify-center'>
      {buttonList.map((item)=>{
           return <Button key={item} name={item}/>
      })}
      
    </div>
  )
}

export default ButtonList;;
