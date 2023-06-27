import React from 'react'
import  "../style/Sidebar.css"
import Sidebaroption from './Sidebaroption'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Sidebar = () => {
  return (
    <div className='Sidebar'>
        <Sidebaroption src="https://pixels.com/images/overview/apparel/mensTshirts002.jpg" title="Vipul Kumar"/>
        <Sidebaroption  src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/JImmn6ZVxeo.png"title={"Covid 19    Information centre"}/>
        <Sidebaroption  src="https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/-UR-mdYpyXa.png"title={"Friends"}/>
        <Sidebaroption src="https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/NCc4ln3EAaS.png" title={"Groups"}/>
        <Sidebaroption src="https://static.xx.fbcdn.net/rsrc.php/v3/yA/r/8L2T81pQAIa.png" title={"Watch"}/>
        <Sidebaroption Icon={ArrowDropDownIcon} title={"See more"}/>
        
    </div>
  )
}

export default Sidebar