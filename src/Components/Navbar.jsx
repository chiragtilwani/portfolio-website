import { makeStyles } from "@mui/styles";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

import Logo from "./Logo";
import Resume from '../assets/ChiragTilwaniResume023.pdf'

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
    <div className={classes.innerContainer} id="home">
      <div className={classes.logo}>
        <HashLink to="/#home" smooth className={classes.link}>
          {" "}
          <Logo />
        </HashLink>
      </div>
      <div className={classes.linkContainer}>
        <HashLink to="/#home" smooth className={classes.link}>
          .home<span style={{ color: "var(--red)" }}>( )</span>
        </HashLink>
        <HashLink to="/#about" smooth className={classes.link}>
          .about<span style={{ color: "var(--red)" }}>( )</span>
        </HashLink>
        <Link
          to={Resume}
          target="_blank"
          className={classes.link}
          download
        >
          .resume<span style={{ color: "var(--red)" }}>( )</span>
        </Link>
        <HashLink to="/#skills" smooth className={classes.link}>
          .skills<span style={{ color: "var(--red)" }}>( )</span>
        </HashLink>
        <HashLink to="/#projects" smooth className={classes.link}>
          .projects<span style={{ color: "var(--red)" }}>( )</span>
        </HashLink>
        <HashLink to="/#contact" smooth className={classes.link}>
          .contact<span style={{ color: "var(--red)" }}>( )</span>
        </HashLink>
      </div>
    </div>
  );
};

export default Navbar;
