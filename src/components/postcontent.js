import { Avatar } from '@mui/material'
import React from 'react'
import PublicIcon from '@mui/icons-material/Public';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import ShareIcon from '@mui/icons-material/Share';
import "../style/postcontent.css"
const Postcontent = ({name,src1,time,title,src2}) => {
  return (
    <div className='postcontent'> 
    <div className='upper'>
      <div className='upper_left'>
        {<Avatar src={src1}/>}
          <div className='upper_left2'>
            <div className='name'>{name }</div>
            
              <div className='upper_left3'>
                  {time}
                  <PublicIcon style={{height:"10px"}}/>
              </div>
        </div>
      </div>
      <div upper_right>
        <MoreHorizIcon/> 
      </div>
    </div>
    <div className='middle'>
        {title} 
    </div>
    <div className='lower'>
        {<img src={src2}></img>}
    </div >
  <div className='lower_icon'>
    <div className='lower_icon_content'>
        <ThumbUpIcon/>
        Like
    </div>
    <div className='lower_icon_content'>
        <ModeCommentIcon/>
        Comment
    </div>
    <div className='lower_icon_content'>
        <ShareIcon/>
        Share
    </div>
  </div>
    </div>
  )
}

export default Postcontent