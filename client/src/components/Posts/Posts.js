import React from 'react'
import { CircularProgress, Grid } from '@mui/material';
import useStyles from './Style'
import { useSelector } from 'react-redux'
import Post from './Post/Post.js'

const Posts = () => {

    const posts = useSelector((state)=> state.posts)
    const classes = useStyles() 
    return (
        !posts.length ? <CircularProgress/>: (
            
            <Grid className={classes.container} container alignItems="stretch" spacing={3} >
                {posts.map((post) =>(
                    <Grid key={post._id} item xs={12} sm={6}>
                        <Post post={post}/>
                    </Grid>
                ))}
            </Grid>
            
        )
    )
}

export default Posts
