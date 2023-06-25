import { makeStyles } from "@mui/styles";
import { useRef, useState } from "react";
import { ImLinkedin } from "react-icons/im";
import { ImGithub } from "react-icons/im";
import { ImLocation } from "react-icons/im";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

// keyframe banauga jisme ek bhgta hua ldke ka animation hoga bottom 0 left 0 se bottom 0 right 0 tk uske peeche dhue wla animation hoga

const useStyles = makeStyles({
  container: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "7rem",
  },
  left: {
    width: "5rem",
    height: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  right: {
    width: "50%",
    height: "50%",
  },
  leftItemsContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "column",
    height: "5rem",
    letterSpacing: ".1rem",
    fontSize: "1.2rem",
  },
  icons: {
    fontSize: "1.5rem",

    "&:hover": {
      opacity: ".5",
      cursor: "pointer",
      transitionDuration: ".2s",
    },
  },
  span: {
    "&:hover": {
      color: "var(--yellow)",
      cursor: "pointer",
      transitionDuration: ".2s",
    },
  },
  top: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
    color: "white",
    "&::placeholder": {
      color: "white",
    },
  },
  name: {
    margin: "1rem",
    width: "50%",
    padding: ".5rem",
    border: "none",
    outline: "none",
    backgroundColor: "var(--secondary-color)",
    borderRadius: ".5rem",
    boxShadow:
      "     rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;",
    color: "white ",
  },
  email: {
    margin: "1rem",
    width: "50%",
    padding: ".5rem",
    border: "none",
    outline: "none",
    backgroundColor: "var(--secondary-color)",
    borderRadius: ".5rem",
    boxShadow:
      "     rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;",
    color: "white ",
  },
  subject: {
    width: "50%",
    padding: ".5rem",
    border: "none",
    outline: "none",
    backgroundColor: "var(--secondary-color)",
    borderRadius: ".5rem",
    boxShadow:
      "     rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;",
    color: "white ",
  },
  msg: {
    margin: "1rem",
    width: "90%",
    padding: ".5rem",
    border: "none",
    outline: "none",
    backgroundColor: "var(--secondary-color)",
    borderRadius: ".5rem",
    boxShadow:
      "     rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;",
    color: "white ",
  },
  bottom: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
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
});
const Contact = () => {
  const classes = useStyles();

  const formData = useRef({
    from_name: null,
    from_email: null,
    subject: null,
    message: null,
    app_name: "PORTFOLIO WEBSITE",
  });

  function handleSubmit(evt) {
    evt.preventDefault();
    emailjs
      .sendForm(
        "service_x4n6h2i",
        "template_iycd9kt",
        formData.current,
        "JqIUQeDPz_awaSzh4"
      )
      .then(
        (result) => {
          console.log(result.text);
          formData.current = {
            from_name: "",
            from_email: "",
            subject: "",
            message: "",
          };
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div className={classes.container} id="contact">
      <div className={classes.left}>
        <div className={classes.leftItemsContainer}>
          <Link
            to="https://www.linkedin.com/in/chiragtilwani/"
            target="_blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            {" "}
            <ImLinkedin
              className={classes.icons}
              style={{ color: "#8ab4f8" }}
            />
          </Link>
          <Link
            to="https://www.linkedin.com/in/chiragtilwani/"
            target="_blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            {" "}
            <span className={classes.span}>LinkedIn</span>
          </Link>
        </div>
        <div className={classes.leftItemsContainer}>
          <Link
            to="https://www.github.com/chiragtilwani/"
            target="_blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            <ImGithub className={classes.icons} />
          </Link>
          <Link
            to="https://www.github.com/chiragtilwani/"
            target="_blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            <span className={classes.span}>GitHub</span>
          </Link>
        </div>
        <div className={classes.leftItemsContainer}>
          <Link
            to="https://www.google.com/maps/place/Bengaluru,+Karnataka/@12.9537902,77.3012643,10z/data=!4m6!3m5!1s0x3bae1670c9b44e6d:0xf8dfc3e8517e4fe0!8m2!3d12.9715987!4d77.5945627!16zL20vMDljMTc?entry=ttu"
            target="_blank"
          >
            <ImLocation
              className={classes.icons}
              style={{ color: "#54d554" }}
            />
          </Link>
          <Link
            to="https://www.google.com/maps/place/Bengaluru,+Karnataka/@12.9537902,77.3012643,10z/data=!4m6!3m5!1s0x3bae1670c9b44e6d:0xf8dfc3e8517e4fe0!8m2!3d12.9715987!4d77.5945627!16zL20vMDljMTc?entry=ttu"
            style={{ textDecoration: "none", color: "white" }}
            target="_blank"
          >
            <span className={classes.span}>Bengaluru,India</span>
          </Link>
        </div>
      </div>
      <div className={classes.right}>
        <form ref={formData} onSubmit={handleSubmit}>
          <div className={classes.top}>
            <input
              type="text"
              placeholder="Name"
              className={classes.name}
              name="from_name"
            ></input>
            <input
              type="email"
              placeholder="Email"
              className={classes.email}
              name="from_email"
            ></input>
          </div>
          <div className={classes.bottom}>
            <input
              type="text"
              placeholder="Email subject"
              className={classes.subject}
              name="subject"
            ></input>
            <textarea
              rows="10"
              name="message"
              placeholder="Message"
              className={classes.msg}
            />
            <input type="submit" value="Send" className={classes.btn} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
