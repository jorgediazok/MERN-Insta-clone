import React,{ useState, useEffect } from 'react'
import firebase from "firebase"
import Avatar from "@material-ui/core/Avatar"
import FavoriteSharpIcon from "@material-ui/icons/FavoriteSharp"
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline"
import SendIcon from "@material-ui/icons/Send"
import { db } from "../firebase"
import "../styles/Post.css"

function Post({imageUrl, postId, caption, username, user}) {
  const [comments, setComments] = useState([])
  const [comment, setComment] = useState("")

  //use effect to get posts

  useEffect(()=>{
    let unsubscribe;
    if(postId){
      unsubscribe = db
      .collection("posts")
      .doc(postId)
      .collection("comments")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot)=>{
        setComments(snapshot.docs.map((doc)=>doc.data()))
      })
    }
    
    return () => {
      unsubscribe();
    };

  },[postId])

  //event functions

  const postComment = (e) =>{
    e.preventDefault();
    db.collection("posts").doc(postId).collection("comments").add({
      text: comment,
      username: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp() 
    });
    setComment("")
  }

    
  return (
    <div className="post">

      <div className="post__header">
      <Avatar className="post__avatar" alt="jorgediazok" src="/static/images/avatar/1.jpg" />
      <h3>{username}</h3>  
      </div>      

    <img className="post__image" src={imageUrl} alt="react"/>

    <div className="post__icons">
      <FavoriteSharpIcon className="post__icon"/>
      <ChatBubbleOutlineIcon className="post__icon"/>
      <SendIcon className="post__icon"/>
    </div>

    <h4 className="post__text"><strong>{username} </strong>{caption}</h4>

    
    <div className="post__comments">
        {comments.map((comment)=>(
          <p>
            <strong>{comment.username} </strong>{comment.text}
          </p>
        ))}
   </div>
    
    {user && (
      <form className="post__commentBox">
      <input type="text" className="post__input" placeholder="Add a comment..." value={comment} onChange={(e)=>setComment(e.target.value)}/>
      <button disabled={!comment} className="post__button" type="submit" onClick={postComment}>Post</button>
    </form>
    )}
    
  </div>

  )
}

export default Post
