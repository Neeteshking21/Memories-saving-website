import React, {useState} from 'react'
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux'
import useStyle from './Style'
import {createPost} from '../../actions/posts'


const Form = () => {
  const classes = useStyle()
  const [postData, setPostData] = useState({
    creator:'', title:'', message:'', tags:'', selectedFile:''
  })

  const dispatch = useDispatch()

  const handleSubmit = (evt) =>{
      evt.preventDefault()
      console.log(evt)
      dispatch(createPost(postData))  
      console.log(`After dispatch`)
      setPostData({creator:'', title:'', message:'', tags:'', selectedFile:''})
  }

  return (
    <div className={classes.container} onSubmit={handleSubmit}>
      <form action="/" method="POST">
        <div className={classes.form}>
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
