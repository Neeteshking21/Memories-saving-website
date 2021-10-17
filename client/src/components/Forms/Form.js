import React, {useState, useEffect} from 'react'
import FileBase from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux'
import { Typography } from '@mui/material'
import useStyle from './Style'
import {createPost, updatePost} from '../../actions/posts'

// GET THE CURRENT ID

const Form = ({currentId, setCurrentId}) => {
  const classes = useStyle() 
  const post = useSelector((state)=> currentId ? state.posts.find((p) =>p._id === currentId) :null)
  const [postData, setPostData] = useState({
    creator:'', title:'', message:'', tags:'', selectedFile:''
  })

  useEffect(()=>{
    if(post) setPostData(post)
  }, [post])
  const dispatch = useDispatch()

  const handleSubmit = (evt) =>{
      evt.preventDefault()

      if(currentId){
        dispatch(updatePost(currentId, postData))
        console.log(`updatePost`)
        setCurrentId(null)
        setPostData({creator:'', title:'', message:'', tags:'', selectedFile:''})
        
      }
      else{
        dispatch(createPost(postData))  }

      setPostData({creator:'', title:'', message:'', tags:'', selectedFile:''})
  }

  return (
    <div className={classes.container} onSubmit={handleSubmit}>
      <form action="/" method="POST">
        <div className={classes.form}>
        <Typography variant="h6">{currentId ?` Editing `: `Creating` } a Memory</Typography>
          <input type="text" name="creator" placeholder="creator" value={postData.creator} onChange={(e)=>setPostData({...postData,creator: e.target.value})} />
          <input type="text" name="title" placeholder="Title" value={postData.title} onChange={(e)=>setPostData({...postData,title: e.target.value})} />
          <input type="text" name="message" placeholder="Message" value={postData.message} onChange={(e)=>setPostData({...postData, message: e.target.value})} />
          <input types="text" name="tag" placeholder="Tag" value={postData.tags} onChange={(e)=>setPostData({...postData, tags: e.target.value})} />
          <FileBase type="file" multiple={false} onDone={({base64})=>setPostData({...postData, selectedFile:base64})} />
          <input type="submit" value="Submit" />
          <input type="reset" value="Reset" />
        </div>
      </form>
    </div>
  )
}
 
export default Form
