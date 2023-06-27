import React from 'react'
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Feed from './components/Feed'
import Rightsidebar from './components/Rightsidebar'
import "./App.css"
const App = () => {
  return (
    <div >
      <Header/>
        <div className='app__body'>
            <Sidebar/>
             <Feed/>
             <Rightsidebar/>
      </div>
    </div>
  )
}

export default App