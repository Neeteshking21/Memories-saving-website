import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material'
import { Favorite, Delete, MoreHoriz } from '@mui/icons-material/';
import useStyles from './Style'
import moment from 'moment'

const Post = ({post}) => {
    const classes = useStyles()
    return (
        
        <Card className={classes.card}>
          <CardMedia component="img" height="200" src={post.selectedFile} title={post.title}  />
            <div className={classes.overlay}>
              <Typography variant="h6">{post.creator}</Typography>
              <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
          </div>
          <div className={classes.overlay2}>
              <Button style={{color:'white'}} size="small" onClick={()=>{}}>
                  <MoreHoriz fontSize="default"/>
              </Button>
          </div>
          <div className={classes.details}>
              <Typography variant="body2" color="textSecondary"> {post.tags.map(tag=>`#${tag} `)} </Typography>
          </div>
          <CardContent>
              <Typography className={classes.title} variant="h5" gutterBottom> {post.message} </Typography>
          </CardContent>

          <CardActions className={classes.CardActions}>
            <Button size="small" color="primary" onClick={()=>{}}>
                <Favorite fontSize="small"/>
                Like
                {post.likeCount}
            </Button>    
            <Button size="small" color="primary" onClick={()=>{}}>
                <Delete fontSize="small"/>
                Delete 
            </Button>    
          </CardActions>    
        
      </Card>
    )
}

export default Post