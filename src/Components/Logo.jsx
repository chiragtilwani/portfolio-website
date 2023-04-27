import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:'1rem'
  },
  span:{
    fontSize:'2rem',
    color:'var(--yellow)',
    fontWeight:'bold',
    fontFamily: 'Castoro Titling',
    letterSpacing:'.1rem',
    cursor: 'pointer'
  }
});

const Logo = () => {
  const classes = useStyles();
  const logoName = 'Chirag';
  const logoOpen ='<';
  const logoClose ='/>'
  return (
    <div className={classes.container}>
      <span className={classes.span}><span  style={{color:'var(--red)'}}>{logoOpen}</span> {logoName} <span style={{color:'var(--red)'}}> {logoClose}</span></span>
    </div>
  );
};

export default Logo;
