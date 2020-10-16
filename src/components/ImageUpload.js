import React,{ useState } from 'react'
import firebase from "firebase"
import { Button } from "@material-ui/core"
import { storage, db } from "../firebase"
import "../styles/ImageUpload.css"

function ImageUpload({username}) {
  const [image, setImage] = useState(null)
  const [caption, setCaption] = useState("")
  const [progress, setProgress] = useState(0)


  const handleChange = (e) => {
    if(e.target.files[0]){
      setImage(e.target.files[0])
    }
  }

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        //progress 
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress)
      },
      (error) => {
        //Error function
        console.log(error)
        alert(error.message)
      },
      () => {
        //Complete function
        storage
        .ref("images")
        .child(image.name)
        .getDownloadURL()
        .then(url => {
          //post image in db
          db.collection("posts").add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            caption: caption,
            imageUrl: url,
            username: username
          })
          setProgress(0);
          setCaption("");
          setImage(null)
        })
      }
    )
  }

  return (
    <div className="imageUpload">
      <progress value={progress} max="100"/>
      <input type="text" placeholder="Enter a caption..." onChange={(e)=> setCaption(e.target.value)} value={caption}/>
      <input type="file" onChange={handleChange}/>
      <Button onClick={handleUpload}>Upload</Button>
    </div>
  )
}

export default ImageUpload
