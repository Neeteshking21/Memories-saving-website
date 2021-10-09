import React from 'react'
import Form from './components/Forms/Form'
import Posts from './components/Posts/Posts'
import {Container, AppBar, Typography, Grow, Grid} from '@mui/material'
import Memories from './images/images.png'
import useStyles from './Style'

const App = () => {

    const classes = useStyles();

    return (
       <Container maxWidth="lg"  >              
         <AppBar className="appbar" position="static" color="inherit" bgcolor="black">
           <Typography varaint="h2" align="center">Memories</Typography>
           <img src={Memories} alt="memories" height="300" width="300" />
         </AppBar>
         <Grow in>
           <Container>
            <Grid container justify="space-between" alignItems="stretch" spacing={3}>
              <Grid item xs={12} sm={7}>
                <Posts />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form />
              </Grid>
            </Grid>
           </Container>
         </Grow>
       </Container>
    )
}

export default App 