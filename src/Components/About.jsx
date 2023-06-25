import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import helloImg from '../assets/images/hello-img.png'
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
    height: "100%",
    display: "flex",
    alignItems: "center",
    position: "relative",
  },
  left: {
    width: "40%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  right: {
    width: "60%",
    backgroundColor: "var(--secondary-color)",
    padding: "2rem",
    borderRadius: ".5rem 0 0 .5rem",
  },
  aboutMethod: {
    fontSize: "2rem",
    marginBottom: "1rem",
  },
  about: {
    margin: "1rem 0rem 1rem 3rem",
    fontSize: "1.3rem",
    letterSpacing: ".1rem",
    lineHeight: "1.5rem",
  },
  reactIcon: {
    width: "5rem ",
    position: "absolute",
    top: "-5rem",
  },
});
const About = () => {
  const classes = useStyles();
  const openCurly = "{";
  const closeCurly = "}";

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className={classes.container} id="about">
      <div className={classes.innerContainer}>
        <div className={classes.left} data-aos="flip-left">
        <img src={helloImg} alt='' />
        </div>
        <div className={classes.right} data-aos="flip-right">
          <span className={classes.aboutMethod}>
            <span style={{ color: "var(--blue)" }}>chirag</span>.about{" "}
            <span style={{ color: "var(--red)" }}>( ) {openCurly}</span>
          </span>
          <p className={classes.about}>
            🧑‍💻 I'm{" "}
            <span style={{ color: "var(--green)", textTransform: "uppercase" }}>
              full stack dev
            </span>{" "}
            looking to solve real worlds problem;
            <br />
            <br />
            👥 I have a passion for{" "}
            <span style={{ color: "var(--green)" }}>
              learning and sharing my knowledge
            </span>{" "}
            with others as publicly as possible;
            <br />
            <br />
            🕵️ Looking for an{" "}
            <span style={{ color: "var(--green)" }}>internship</span> in a
            reputed company to utilize my engineering skills that can contribute
            to the company’s growth as well as enhance my knowledge by exploring
            new things;
            <br />
            <br />
            🤝 If you found value in something I have created, please feel free
            to get in touch{" "}
            <Link
              to="https://www.linkedin.com/in/chirag-tilwani-482a84205/"
              target="_blank"
              style={{ color: "var(--green)", textDecoration: "none" }}
            >
              @chiragtilwani
            </Link>
            ;
          </p>
          <span
            style={{
              color: "var(--red)",
              marginLeft: "1rem",
              fontSize: "2rem",
            }}
          >
            {closeCurly}
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
