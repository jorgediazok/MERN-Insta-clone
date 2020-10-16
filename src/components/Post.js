import React,{useState} from 'react'
import Avatar from "@material-ui/core/Avatar"
import "../styles/Post.css"

function Post({imageUrl, caption, username}) {
  const [comments, setComments] = useState([])
  
  return (
    <div className="post">
      <div className="post__header">
      <Avatar className="post__avatar" alt="jorgediazok" src="/static/images/avatar/1.jpg" />
      <h3>{username}</h3>  
      </div>      
    <img className="post__image" src={imageUrl} alt="react"/>
    <h4 className="post__text"><strong>{username} </strong>{caption}</h4>
    </div>
  )
}

export default Post
