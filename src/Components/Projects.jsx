import { makeStyles } from "@mui/styles";
import { useState } from "react";

import { projects } from "../assets/Data/Projects";
import ProjectCard from "./ProjectCard";

const useStyles = makeStyles({
  container: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  categoryContainer: {
    width: "40%",
    height: "3rem",
    borderRadius: "1.5rem",
    display: "flex",
  },
  category: {
    width: "50%",
    height: "100%",
    backgroundColor: "rgb(255 255 255 / 10%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
    "&:hover": {
      "& $categoryOverlay": {
        bottom: 0,
        transitionDuration: ".2s",
      },
    },
  },
  categoryOverlay: {
    width: "100%",
    height: "100%",
    position: "absolute",
    background: "linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)",
    bottom: "-3rem",
  },
  categoryName: {
    zIndex: 2,
    letterSpacing: ".1rem",
    fontSize: "1.2rem",
  },
  projectContainer: {
    width: "70%",
    height: "70%",
    overflowY: "scroll",
    marginTop: "2rem",
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: "var(--secondary-color)",
    "&::-webkit-scrollbar": {
      width: 0,
    },
  },
});
const Projects = () => {
  const classes = useStyles();
  const [type, setType] = useState("react");

  function handleFullStackClick() {
    setType("full stack");
  }

  function handleReactClick() {
    setType("react");
  }

  return (
    <div className={classes.container} id="projects">
      <div className={classes.categoryContainer}>
        <div
          className={classes.category}
          style={{
            borderRadius: "1.5rem 0 0 1.5rem",
            borderRight: ".05rem solid white",
            background:
              type === "react"
                ? "linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)"
                : null,
          }}
          onClick={handleReactClick}
        >
          <div
            className={classes.categoryOverlay}
            style={{ borderRadius: "1.5rem 0 0 1.5rem" }}
          ></div>
          <span className={classes.categoryName}>React.JS</span>
        </div>
        <div
          className={classes.category}
          style={{
            borderRadius: "0 1.5rem 1.5rem 0 ",
            borderLeft: ".05rem solid white",
            background:
              type === "full stack"
                ? "linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)"
                : null,
          }}
          onClick={handleFullStackClick}
        >
          <div
            className={classes.categoryOverlay}
            style={{ borderRadius: "0 1.5rem 1.5rem 0 " }}
          ></div>
          <span className={classes.categoryName}>Full Stack</span>
        </div>
      </div>
      <div className={classes.projectContainer}>
        {projects
          .filter((project) => project.type === type)
          .map((project) => (
            <ProjectCard project={project} />
          ))}{" "}
      </div>
    </div>
  );
};

export default Projects;
