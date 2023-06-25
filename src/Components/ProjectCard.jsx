import CarouselComponent from "./Carousel";
import { makeStyles } from "@mui/styles";
import {AiFillGithub} from 'react-icons/ai'
import {BsLink45Deg} from 'react-icons/bs'
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  container: {
    margin: "2rem auto",
    width: "40%",
    height:'fit-content',
    borderRadius: ".3rem",
    position:'relative',
    boxShadow:'     rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;',
    '&:hover':{
      '& $nameAndLinkContainer':{
        height:'100%',
        visibility:'initial'
      }
    }
  },
  nameAndLinkContainer:{
    position: "absolute",
    bottom:'0',
    background:"linear-gradient(90.21deg, #5a3b73 -5.91%, #4a2fbdb3 111.58%)",
    width:'100%',
    height:'0',
    zIndex:2,
    transition:'height .2s ,visibility .1s',
    
    display:'flex',
    flexDirection: 'column',
    visibility:'hidden',
    justifyContent: 'center',
    padding:'1rem'
  },
  name:{
    fontSize:'2rem',
    fontWeight:'bold',
  },
  linkIcons:{
    width:'3rem',
    display:'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize:'2rem'
  }
});

const ProjectCard = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <CarouselComponent images={props.project.imgs} />
      <div className={classes.nameAndLinkContainer}>
        <span className={classes.name}>{props.project.name}</span>
        <p style={{margin:0}}>{props.project.desc}</p>
        <div className={classes.linkIcons}>
          <Link to={props.project.git} target="_blank" title="git"><AiFillGithub /></Link> 
          <Link to={props.project.demo} target="_blank" title="demo"><BsLink45Deg /></Link> 
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
