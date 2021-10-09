import React from 'react'
import Form from './components/Forms/Form'
import Posts from './components/Posts/Posts'
import {Container, AppBar, Typography, Grow, Grid} from '@mui/material'

const App = () => {
    return (
       <Container maxWidth="lg">              
         <AppBar position="static" color="inherit">
           <Typography varaint="h2" align="center">Memories</Typography>
           <img src="./" alt="memories" height="60" />
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