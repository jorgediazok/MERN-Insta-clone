import React,{useState} from 'react';
import Post from "./components/Post"
import './App.css';

function App() {

  const [posts, setPosts] = useState([
    {
      username:"jorgediazok",
      caption:"Learning React is really simple 🚀", 
      imageUrl:"https://edteam-media.s3.amazonaws.com/blogs/original/3a0fa242-1b90-42bf-831d-5ea432759ab0.jpg"
    },
    {
      username:"jorgediazok",
      caption:"Learning Angular is not that simple 🐓",
      imageUrl:"https://dmm40cf0lyret.cloudfront.net/wp-content/uploads/2020/08/Agencia-desarrollo-Angular-JS.jpg"
    },
    {
      username:"jorgediazok",
      caption:"Learning Vue is quiet ok 🏃",
      imageUrl:"https://victorroblesweb.es/wp-content/uploads/2017/03/vuejs2-victorroblesweb.jpg"
    }

  ])

  return (
    <div className="app">
      <div className="app__header">
        <img className="app__headerImage" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt=""/>
      </div>
      {posts.map(post=>(
        <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
      ))}

    </div>
  );
}

export default App;
