import "./Signup.css"
import { useSignup } from "../../hooks/useSignup"

import React, { useState } from 'react'

export default function Signup() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [displayName,setDisplayName] = useState('')
  const [thumbnail, setThumbnail] = useState(null)
  const [thumbnailError, setThumbnailError] = useState(null)
  const {signup, isPending,error} = useSignup()

  const handleSubmit= (e)=> {
    e.preventDefault()
    signup(email,password,displayName,thumbnail);
  }

  const handleFileChange= (e) => {
    setThumbnail(null)
    //first file slected, in this variable i have all the images datas
    let selected = e.target.files[0]
    //check type and size and not undefined->not chosen

    if(!selected){
      setThumbnailError('Please select a file')
      //if it fails dont check the other ifs
      return
    }
    if(!selected.type.includes("image")){
      setThumbnailError('Selected file must be an image')
      return
    }
    if(selected.size > 100000){
      setThumbnailError('Image file size must be less than 100kb')
      return
    }

    setThumbnailError(null)
    setThumbnail(selected)
    console.log("thumbnail updated");
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Sign up</h2>
      <label>
        <span>email:</span>
        <input 
        required
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        />
      </label>

      <label>
        <span>password:</span>
        <input 
        required
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        />
      </label>

      <label>
        <span>display name:</span>
        <input 
        required
        type="text"
        onChange={(e) => setDisplayName(e.target.value)}
        value={displayName}
        />
      </label>

      {/* //image uploader */}
      <label>
        <span>profile thumbnail:</span>
        <input 
        required
        type="file"
        onChange={handleFileChange}
        />
        {thumbnailError && <div className="error">{thumbnailError}</div> }
      </label>
      {!isPending && <button className="btn">Sign up</button>}
      {isPending && <button className="btn" disabled>loading</button>}
      {error && <div className="error">{error}</div> }
    </form>
  )
}
