import React, { useEffect, useState } from 'react'
import Form from './components/Forms/Form'
import Posts from './components/Posts/Posts'
import {Container,Grow, Grid} from '@mui/material'
import { useDispatch } from 'react-redux'
import Memories from './images/images.png'
import useStyles from './Style'
import {getPost} from './actions/posts'

const App = () => {

    const [currentId, setCurrentId] = useState(null)
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(()=>{
      dispatch(getPost())
    }, [dispatch])

    return (
       <Container maxWidth="lg"  >              
         <header className={classes.appBar} position="static" color="inherit" bgcolor="black">
           <p className={classes.heading} varaint="h2" align="center">Memories</p>
           <img src={Memories} className={classes.img} alt="memories" height="300" width="300" />
         </header>
         <Grow in>
           <div style={{marginTop:'10vh'}}>
            <Grid className={classes.body} container alignItems="stretch" spacing={3}>
              <Grid item xs={12} sm={7} className={classes.post}>
                <Posts setCurrentId={setCurrentId} />  
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form currentId={currentId} setCurrentId={setCurrentId} />
              </Grid>
            </Grid>
           </div>
         </Grow>
       </Container>
    )
}

export default App 