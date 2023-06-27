import React from 'react'
import "../style/Header.css"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Avatar } from '@mui/material';
const Header = () => {
  return (
    <div className='Header'>
        
        <div className='Header__left'>
            <img  className="fb img"src='https://img.freepik.com/premium-vector/blue-social-media-logo_197792-1759.jpg'></img>
            <div className='Header__search'>
            <SearchOutlinedIcon/>
            <input type='text' placeholder='Search Facebook'></input>
            </div>
        </div>
        
        <div className='Header__middle'>
            <div className='middle__icons_active'>
                <HomeOutlinedIcon/>
            </div>
            <div className='middle__icons'>
                <OndemandVideoOutlinedIcon/>
            </div>
            <div className='middle__icons'>
                <PeopleAltOutlinedIcon/>
            </div>
            <div className='middle__icons'>
                <SportsEsportsOutlinedIcon/>
            </div>
        </div>


        <div className='Header__right'>
            <div className='right__icons_avtr'>
                 <Avatar src="https://pixels.com/images/overview/apparel/mensTshirts002.jpg" />
                 <h5>Vipul kumar</h5>
            </div>
            <div className='right__icons'>
                 <AppsOutlinedIcon/>
                 
            </div>"
            <div className='right__icons'>
                 <MessageIcon/>
                 
            </div>
            <div className='right__icons'>
                 <NotificationsIcon />
                 
            </div>
            <div className='right__icons'>
                 <ArrowDropDownIcon />
                 
            </div>

        </div>

    </div>
  )
}

export default Header