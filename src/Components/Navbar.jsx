import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

import Logo from "./Logo";


const useStyles = makeStyles({
  container: {
    position: "sticky",
    width: "100vh",
    backgroundColor: "var(--secondary-color)",
    top: 0,
    height: "3rem",
  },
  innerContainer: {
    position: "sticky",
    top: 0,
    backgroundColor: "var(--secondary-color)",
    height: "3rem",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex:2
  },
  linkContainer: {
    marginRight: "1rem",
    display: "flex",
    width: "32rem",
    alignItems: "center",
    justifyContent: "space-between",
  },
  link: {
    color: "var(--yellow)",
    textDecoration: "none",
    letterSpacing: ".1rem",
    fontFamily: "Castoro Titling",
  },
});

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.innerContainer} >
      <div className={classes.logo}>
        <Link to="/"  className={classes.link}>
          {" "}
          <Logo />
        </Link>
      </div>
      <div className={classes.linkContainer}>
        <Link to="/"  className={classes.link}>
          .home<span style={{ color: "var(--red)" }}>( )</span>
        </Link>
        <Link to="/about" smooth className={classes.link}>
          .about<span style={{ color: "var(--red)" }}>( )</span>
        </Link>
        <Link to="/skills" smooth className={classes.link}>
          .skills<span style={{ color: "var(--red)" }}>( )</span>
        </Link>
        <Link to="/projects" smooth className={classes.link}>
          .projects<span style={{ color: "var(--red)" }}>( )</span>
        </Link>
        <Link to="/contact" smooth className={classes.link}>
          .contact<span style={{ color: "var(--red)" }}>( )</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
