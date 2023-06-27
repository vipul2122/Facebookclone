import { Avatar } from '@mui/material'
import React from 'react'
import "../style/Sidebaroption.css"
const Sidebaroption = ({title,src,Icon}) => {
  return (
    
    <div className='sidebaroption'>
       {src && <Avatar src={src}/>}
       {Icon && <Icon/>}
       {title}
       </div>
       
    
  )
}

export default Sidebaroption