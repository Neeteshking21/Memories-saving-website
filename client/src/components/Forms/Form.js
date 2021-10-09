import React from 'react'
import {TextField} from '@mui/material'
import useStyle from './Style'

const Form = () => {
  const classes = useStyle()
  return (
    <div className={classes.container}>
      <form action="/" method="POST">
        <div className={classes.form}>
          <input type="text" placeholder="Creator" />
          <input type="text" placeholder="Title" />
          <input type="text" placeholder="Message" />
          <input types="text" placeholder="Tag" />
          <input type="file" />
          <input type="submit" value="Submit" />
          <input type="reset" value="Reset" />
        </div>
      </form>
    </div>
  )
}

export default Form
