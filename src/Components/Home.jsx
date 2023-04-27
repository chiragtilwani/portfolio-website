import {makeStyles} from '@mui/styles'

const useStyles =makeStyles({
    container:{
        height:'100vh',
    }
})
const Home = () => {
    const classes=useStyles()
  return (
    <div className={classes.container} >

    </div>
  )
}

export default Home