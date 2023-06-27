import React from 'react'
import "../style/Feed.css"
import Storyreels from './Storyreels' 
import MessageSender from './MessageSender'
import Post from './Post'
const Feed = () => {
  return (
    <div className='feed'>
        <Storyreels/>
        <MessageSender/>
         <Post/>
    </div>
  )
}

export default Feed