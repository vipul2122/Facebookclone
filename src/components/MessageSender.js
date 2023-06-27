import { Avatar, IconButton,Modal } from '@mui/material'
import React, { useState } from 'react'
import "../style/MessageSender.css"
import VideoCallIcon from '@mui/icons-material/VideoCall';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import CloseIcon from '@mui/icons-material/Close';

import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
const MessageSender = () => {
        const [open,setOpen]=useState(false)
        const handleClose=()=>{
          setOpen(false)
        }
        const handleOpen=()=>{
                setOpen(true)
        }
       
  return (
        <>
        <Modal open={open} onClose={handleClose} >
                <div className='modal_pop'>
                        <form>
                <div className='modalHeading'>
                        <h3>create post</h3>
                        <IconButton onClick={handleClose}>
                                <CloseIcon/>
                        </IconButton>
                         </div>
                         <div className='modalHearder__top'>
                                <Avatar/>
                                <h4>Vipul kumar</h4>
                         </div>
                         <div className='modalBody'>
                                <textarea rows="5" placeholder='whats on your mind Vipul ?'></textarea>
                         </div>
                         <div className='modalfooter'>
                                <div className='modalfooterleft'>
                                        <h4>Add to your post</h4>
                                </div>
                                <div className='modalfooterRight'>
                                <IconButton>
                                  <PhotoLibraryIcon fontSize='large' style={{color:"lightgreen"}}/>      
                                </IconButton>
                                <IconButton>
                                  <VideoCameraBackIcon fontSize='large' style={{color:"red"}}/>      
                                </IconButton>
                                <IconButton>
                                  <EmojiEmotionsIcon fontSize='large' style={{color:"yellow"}}/>      
                                </IconButton>
                                          
                                </div>
                         
                            </div>
                              <input type="submit" className='post__submit' value="POST"></input>
                         </form>
                         </div>
        </Modal>
    <div className='MessageSender'>
        <div className='MessageSender_upper'>
           <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKRzHHirDMQU_v0RHsILVKVt2O2RzpYR_EA_wiH5XaZQiOO_SBqb_8clGzD2cNXMTFoB0&usqp=CAU'/>
           <input type='text' placeholder='Whats on your Mind' onClick={handleOpen}></input>
        </div>
        <div className='MessageSender_lower'>
            <div topclassName='Messangeroption'> 
                    <VideoCallIcon style={{color:"red"}}/>
                    <p>Live video</p>
            </div>
            <div className='Messangeroption'> 
                    <PhotoLibraryIcon style={{color:"orange"}}/>
                    <p>Photo/Video</p>
            </div>
            <div className='Messangeroption'> 
                    <SentimentVerySatisfiedIcon style={{color:"orange"}}/>
                    <p>Feeling/Activity</p>
            </div>
       </div>

    </div>
    </>
  )
}

export default MessageSender