import React,{useState} from 'react'
import {Button} from "@material-ui/core"
import "../styles/ImageUpload.css"

function ImageUpload() {
  const [caption, setCaption] = useState("")
  const [url, setUrl] = useState("")
  const [progress, setProgress] = useState(0)
  const [image, setImage] = useState("")


  const handleChange = () => {

  }

  const handleUpload = () => {

  }

  return (
    <div className="imageUpload">
      <input type="text" placeholder="Enter a caption..." onChange={(e)=> setCaption(e.target.value)} value={caption}/>
      <input type="file" onChange={handleChange}/>
      <Button onClick={handleUpload}>Upload</Button>
    </div>
  )
}

export default ImageUpload
