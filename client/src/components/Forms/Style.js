// Style your form from here

import { makeStyles } from '@mui/styles'

export default makeStyles(()=>({ 
    container:{
        marginTop: '4vw',
        width: 'fit-content',
    },
    form:{
        display:'flex',
        flexDirection: 'column',
        flexWrap:'wrap',
        justifyContent: 'center',
        '& input':{
            height:"40px",
            width:'auto',
            marginTop:'1vw',
            outline:'none',
            border:'0',
            borderBottom:'1px solid green',
            borderRadius:'5px',
        },
        '& input[type=submit]':{
            backgroundColor:'#7bff7b6b',
            letterSpacing: '4px',
            cursor:'pointer',
            '&:hover':{
                letterSpacing: '8px',
                transition:'all 0.3s',
            }
        },
        '& input[type=reset]':{
            backgroundColor:'#ff937b6b',
            letterSpacing: '4px',
            cursor:'pointer',
            '&:hover':{
                letterSpacing: '8px',
                transition:'all 0.3s',
                backgroundColor:'#ff937b6b'
            }
        }

    }
}))