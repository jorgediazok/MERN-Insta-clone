import React from 'react'
import Avatar from "@material-ui/core/Avatar"
import "../styles/Post.css"

function Post() {
  return (
    <div className="post">
      <div className="post__header">
      <Avatar className="post__avatar" alt="jorgediazok" src="/static/images/avatar/1.jpg" />
      <h3>Username</h3>  
      </div>      
    <img className="post__image" src="https://edteam-media.s3.amazonaws.com/blogs/original/3a0fa242-1b90-42bf-831d-5ea432759ab0.jpg" alt="react"/>
    <h4 className="post__text"><strong>jorgediazok</strong> Learning React is easy 🚀 </h4>
    </div>
  )
}

export default Post
