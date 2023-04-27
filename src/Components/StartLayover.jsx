import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    position: "absolute",
    top: 0,
    width: "100vw",
    height: "100vh",
    zIndex: 2,
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transitionDuration:'1s'
  },
  "@keyframes borderTopBottom":{
    '0%':{
      width: "0%",
    },
    '100%':{
      width: "100%",
    }
  },
  "@keyframes borderLeftRight":{
    '0%':{
      height: "0%",
    },
    '100%':{
      height: "100%",
    }
  },
  
  borderTop:{
    backgroundColor:'#3e3e3e',
    height:'.1rem',
    animation: "$borderTopBottom 5s infinite alternate",
  },
  borderRight:{
    position:'absolute',
    backgroundColor:'#3e3e3e',
    right:0,
    bottom:0,
    width:'.1rem',
    animation: "$borderLeftRight 5s infinite alternate",
  },
  borderBottom:{
    position:'absolute',
    backgroundColor:'#3e3e3e',
    height:'.1rem',
    right:0,
    bottom:0,
    animation: "$borderTopBottom 5s infinite alternate",
  },
  borderLeft:{
    backgroundColor:'#3e3e3e',
    float:'left',
    width:'.1rem',
    animation: "$borderLeftRight 5s infinite alternate",
  },
  innerContainer:{
    position:'relative',
    width:'90%',
    height:'90%',
  },
  "@keyframes stroke": {
    "0%": {
      fill: " rgba(72,138,20,0)",
      stroke: " #3e3e3e",
      strokeDashoffset: "25%",
      strokeDasharray: "0 50%",
      strokeWidth: 2,
    },
    "70% ": { fill: " rgba(72,138,20,0)", stroke: " #3e3e3e" },
    "80%": {
      fill: " rgba(72,138,20,0)",
      stroke: " #3e3e3e",
      strokeWidth: 3,
    },
    "100%": {
      fill: "#726b6b",
      stroke: "rgba(54,95,160,0)",
      strokeDashoffset: "-25%",
      strokeDasharray: "50% 0",
      strokeWidth: 0,
    },
  },
  svg: {
    fontFamily: "Russo One, sans-seri",
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  text: {
    textTransform: "uppercase",
    animation: "$stroke 5s infinite alternate",
    strokeWidth: 2,
    stroke: " #3e3e3e",
    fontSize: "140px",
  },
  startBtn:{
    width:'6rem',
    height:'6rem',
    backgroundColor:'#3e3e3e',
    color:'white',
    position:'absolute',
    bottom:'5rem',
    left:'46%',
    borderRadius:'50%',
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight:'bold',
    fontSize:'1.5rem',
    letterSpacing:'.15rem',
    cursor:'pointer',
    boxShadow:'0 0 .5rem 0 rgba(62, 62, 62, 1)',
    '&:active':{
      boxShadow:'inset 0 0 .5rem 0 white',
    }
  }
});

const StartLayover = (props) => {
  const classes = useStyles();
  console.log(props)
  function handleClick(){
    props.handleStart()
  }
  return (
    <div className={classes.container} style={{top: props.top}}>
      <div className={classes.innerContainer}>
        <div className={classes.borderTop}></div>
        <div className={classes.borderRight}></div>
        <div className={classes.borderLeft}></div>
        <div className={classes.borderBottom}></div>
        <svg viewBox="0 0 1320 300" className={classes.svg}>
          <text
            className={classes.text}
            x="50%"
            y="50%"
            dy=".35em"
            text-anchor="middle"
          >
            chirag
          </text>
        </svg>
        <div className={classes.startBtn} onClick={handleClick}>Start</div>
      </div>
    </div>
  );
};

export default StartLayover;
