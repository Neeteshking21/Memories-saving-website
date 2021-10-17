import { makeStyles } from '@mui/styles'

export default makeStyles(() => ({
  appBar: {
    backgroundColor:'white',
    height: 'fit-content',
    marginTop: '10px',
    padding: '0.5rem',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  },
  heading: {
    letterSpacing: '3px',
    fontFamily: 'monospace',
    fontSize: '30px',
    fontWeight: '900',
  },
  img: {
    height: '50px',
    width: 'auto',
  },
  body:{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline'
  },
}))
