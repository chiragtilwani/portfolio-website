import {makeStyles} from '@mui/styles'

const useStyles =makeStyles({
    container:{
        height:'100vh',
    }
})
const About = () => {
    const classes=useStyles()
  return (
    <div className={classes.container} id="about">
about
    </div>
  )
}

export default About