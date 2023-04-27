import {makeStyles} from '@mui/styles'

const useStyles =makeStyles({
    container:{
        height:'100vh',
    }
})
const Projects = () => {
    const classes=useStyles()
  return (
    <div className={classes.container} id = 'projects'>

    </div>
  )
}

export default Projects