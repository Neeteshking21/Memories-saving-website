import React from 'react'
import Form from './components/Forms/Form'
import Posts from './components/Posts/Posts'
import {Container,Grow, Grid} from '@mui/material'
import Memories from './images/images.png'
import useStyles from './Style'

const App = () => {

    const classes = useStyles();

    return (
       <Container maxWidth="lg"  >              
         <header className={classes.appBar} position="static" color="inherit" bgcolor="black">
           <p className={classes.heading} varaint="h2" align="center">Memories</p>
           <img src={Memories} className={classes.img} alt="memories" height="300" width="300" />
         </header>
         <Grow in>
           <div >
            <Grid className={classes.body} container alignItems="stretch" spacing={3}>
              <Grid item xs={12} sm={7}>
                <Posts />
                <Posts />
                <Posts /> 
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form />
              </Grid>
            </Grid>
           </div>
         </Grow>
       </Container>
    )
}

export default App 