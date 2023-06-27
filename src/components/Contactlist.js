import { Avatar, AvatarGroup } from '@mui/material'
import React from 'react'

const Contactlist = ({name,src}) => {
  return (
    <div style={{display:"flex",alignItems:"center", gap:"10px"}}>
      {<Avatar src={src} style={{height:"40px"}}/>}
        <h5>{name}</h5> 

    </div>
  )
}

export default Contactlist