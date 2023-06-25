import { makeStyles } from "@mui/styles";
import { BsFillArrowUpRightSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const useStyles = makeStyles({
  container: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  innerContainer: {
    width: "100%",
    height: "70%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  helloWorldAndNameContainer: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    height: "100%",
    flexDirection: "column",
    backgroundColor: "var(--secondary-color)",
    padding: "2rem",
    borderRadius: "0 .5rem   .5rem 0",
  },
  helloWorld: {
    marginLeft: "1rem",
    fontSize: "4rem",
    width: "30%",
    marginBottom: "1rem",
  },
  name: {
    marginLeft: "1rem",
    fontSize: "3rem",
    marginBottom: "1rem",
  },
  "@-webkit-keyframes focus-in-contract": {
    "0%": {
      letterSpacing: "1em",
      filter: "blur(12px)",
      opacity: 0,
    },
    "100%": {
      filter: "blur(0px)",
      opacity: 1,
    },
  },
  "@keyframes focus-in-contract": {
    "0%": {
      filter: "blur(12px)",
      letterSpacing: "1em",
      opacity: 0,
    },
    " 100%": {
      filter: "blur(0px)",
      opacity: 1,
    },
  },
  nameSpan: {
    animation:
      "$focus-in-contract 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
    position: "absolute",
    marginLeft: "1rem",
    color: "var(--yellow)",
  },
  aboutMethod: {
    marginLeft: "1rem",
    fontSize: "1.2rem",
    letterSpacing: ".1rem",
    marginBottom: ".5rem",
  },
  about: {
    marginLeft: "3rem",
    fontSize: "1.2rem",
    letterSpacing: ".1rem",
  },
  btn: {
    width: "7rem",
    height: "3rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    fontSize: "1.2rem",
    fontWeight: "bold",
    backgroundColor: "var(--yellow)",
    borderRadius: ".5rem",
    textDecoration: "none",
    color: "black",
    letterSpacing: ".05rem",
    marginLeft: "1rem",
    border: ".2rem solid black",
    "&:hover": {
      color: "var(--yellow)",
      backgroundColor: "black",
      transitionDuration: ".5s",
    },
  },
  iFrameContainer: {
    width: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  iframe: {
    width: "35rem",
    height: "30rem",
  },
});

const Home = () => {
  const classes = useStyles();

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className={classes.container} id="home">
      <div className={classes.innerContainer}>
        <div
          className={classes.helloWorldAndNameContainer}
          data-aos="fade-right"
        >
          <h1 className={classes.helloWorld}>
            Hello <span style={{ color: "var(--red)" }}>World!</span>
          </h1>
          <h2 className={classes.name}>
            I'm <span className={classes.nameSpan}>Chirag Tilwani ;</span>
          </h2>
          <Link
            to="/ChiragTilwaniResume023.pdf"
            target="_blank"
            className={classes.btn}
          >
            Resume <BsFillArrowUpRightSquareFill />
          </Link>
        </div>
        <div className={classes.iFrameContainer} data-aos="fade-left">
        <iframe className={classes.iframe} src="https://embed.lottiefiles.com/animation/68377" title='boy coding'></iframe>
        </div>
      </div>
    </div>
  );
};

export default Home;
