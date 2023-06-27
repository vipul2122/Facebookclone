import { Avatar } from '@mui/material'
import React from 'react'
import "../style/Storyreels.css"
const Storyreels = () => {
  return (
    <div className='Storyreels'> 
        <div className='Story' style={{backgroundImage:`url(https://t4.ftcdn.net/jpg/05/63/65/35/360_F_563653592_k7e8EzAVj7lWkLot04cI5AIKH7o5K7f1.jpg)`}}>
       <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKRzHHirDMQU_v0RHsILVKVt2O2RzpYR_EA_wiH5XaZQiOO_SBqb_8clGzD2cNXMTFoB0&usqp=CAU'/>  
       <h4>Vipul</h4>
    </div>
    <div className='Story' style={{backgroundImage:`url(https://wallpapers.com/images/featured/yy6cb4fn6wfemejj.jpg)`}}>
       <Avatar src='https://herviewfromhome.com/wp-content/uploads/2018/10/shutterstock_408952252-768x512.jpg'/>  
       <h4>Anand</h4>
    </div>
    <div className='Story' style={{backgroundImage:`url(https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__480.jpg)`}}>
       <Avatar src='https://images.unsplash.com/photo-1499244571948-7ccddb3583f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJlc3QlMjBwaWN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60'/>  
       <h4>Babli</h4>
    </div>
    <div className='Story' style={{backgroundImage:`url(https://a.storyblok.com/f/191576/1000x667/7d49efe683/hero-slider-after.png)`}}>
       <Avatar src='https://images.unsplash.com/photo-1579273168832-1c6639363dad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60'/>  
       <h4>Akriti</h4>
    </div>
    <div className='Story' style={{backgroundImage:`url(https://w0.peakpx.com/wallpaper/437/536/HD-wallpaper-ms-dhoni-msdhoni-thlla-thumbnail.jpg)`}}>
       <Avatar src="https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"/>  
       <h4>Uday</h4>
    </div>
    </div>
  )
}

export default Storyreels