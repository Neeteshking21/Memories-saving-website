import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material'
import { Favorite, Delete, Edit } from '@mui/icons-material/';
import useStyles from './Style'
import moment from 'moment'

const Post = ({post, setCurrentId}) => {
    const classes = useStyles()
    return (
        
        <Card className={classes.card}>
          <CardMedia component="img" height="200" src={post.selectedFile} title={post.title}  />
            <div className={classes.overlay}>
              <Typography variant="h6">{post.creator}</Typography>
              <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
          </div>
          <div className={classes.details}>
              <Typography variant="body2" color="textSecondary"> {post.tags.map(tag=>`#${tag} `)} </Typography>
          </div>
          <CardContent>
              <Typography className={classes.title} variant="textSecondary" gutterBottom> {post.message} </Typography>
          </CardContent>

          <CardActions className={classes.CardActions}>
            <Button size="small" color="secondary" onClick={()=>{}}>
                <Favorite fontSize="small"/>
                {post.likeCount}
            </Button>    
            <Button size="small" color="primary" onClick={()=>{}}>
                <Delete fontSize="small"/> 
            </Button>    
            <Button size="small" color="primary" onClick={()=> setCurrentId(post._id) }>
                <Edit fontSize="small"/> 
            </Button>    
          </CardActions>    
        
      </Card>
    )
}

export default Post
