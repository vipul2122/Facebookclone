import React from 'react'
import '../style/Rightsidebar.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from '@mui/material';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import SearchIcon from '@mui/icons-material/Search';
import Contactlist from './Contactlist';
const Rightsidebar = () => {
  return (
    <div className='Widget'>
     <div className='Widget__header'> 
     <div className='Widget__headerLeft'>
      <h4>Your pages</h4>
     </div>
      < MoreHorizIcon/>
     </div>
     <div className='widget__body'>
          <div className='widget__bodyoptions'>
            <Avatar src="https://github.githubassets.com/images/modules/profile/achievements/starstruck-default.png"/>
            <h4 style={{fontWeight:"bold"}}>Camel Coder</h4>
          </div>
          <div className='widget__bodyoptions' style={{paddingLeft:"10px"}}>
            <NotificationsIcon style={{height:"15px"}}/>
            <h4>4 notifications</h4>
          </div>
          <div className='widget__bodyoptions' style={{paddingLeft:"10px"}}>
          <VolumeUpIcon style={{height:"15px"}}/>
            <h4>create promotion</h4>
          </div>
       </div>
       <div className='Widget_contact'>
        <div className='Widget_contact_header'>
           <h4>Contacts</h4>
           <div className='Widget_contacticon' >
             <VideoCallIcon/>
             <SearchIcon/>
            <MoreHorizIcon/>
        </div>
        </div>
        <Contactlist name="Vivek Yadav" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxM1szNr_08Bc70yc7uo0lwI5XkyHVLq7ABQ&usqp=CAU"/>
        <Contactlist name="Michael clarke" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvP2wQyCBJWFSZI_eeharZadslP8SjLzdOYg&usqp=CAU"/>
        <Contactlist name="Pratibha sharma" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5We3ufUNn7NgBg6wTg5FPQiBlL42hO9vtZg&usqp=CAU"/>
        <Contactlist name="Peace is the moto of life" src="https://www.businessinsider.in/photo/86634604/buy-best-3d-wallpapers-in-india.jpg?imgsize=257466"/>
        <Contactlist name="Photographer_KING" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPg3YSmqjlfpocavPYZ8wIrinJ2jJkdChm5A&usqp=CAU"/>
        <Contactlist name="Vivek Yadav" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxM1szNr_08Bc70yc7uo0lwI5XkyHVLq7ABQ&usqp=CAU"/>
        <Contactlist name="Vivek Yadav" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxM1szNr_08Bc70yc7uo0lwI5XkyHVLq7ABQ&usqp=CAU"/>
       
        </div>
     
      </div>
    
  )
}

export default Rightsidebar