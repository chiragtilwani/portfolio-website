import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import "./Skills.css";
import React from '../assets/images/react.png'
import MongoDB from '../assets/images/mongodb.png'
import ExpressJs from '../assets/images/expressjs.png'
import NodeJs from '../assets/images/nodejs.png'
import cpp from '../assets/images/cpp.png'
import c from '../assets/images/c.png'
import JavaScript from '../assets/images/javaScript.png'
import html from '../assets/images/html.png'
import css from '../assets/images/css.png'
import redux from '../assets/images/redux.png'
import vercel from '../assets/images/vercel.png'
import render from '../assets/images/render.png'
import netlify from '../assets/images/netlify.png'
import heroku from '../assets/images/heroku.png'
import git from '../assets/images/git.png'
import github from '../assets/images/github.png'

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="container">
      <h1 style={{fontSize:'5rem',color:'red',textShadow:'.2rem .2rem 0rem white'}} data-aos="zoom-in"> Skills & Abilities</h1>
      <div className="slider" data-aos="zoom-in-up">
        <div className="slide-track">
          <div className="slide">
            <h3 style={{textShadow: '1px 1px 5px red, 0 0 ..5em white, 0 0 3em white',color:'#00d1f7'}}>React</h3>
            <img
              src={React}
              width='100rem'
              height=''
              alt=""
            />
          </div>
          <div className="slide">
            <h3 style={{textShadow: '1px 1px 5px red, 0 0 ..5em white, 0 0 3em white',color:'#3f9b38'}}>MongoDB</h3>
            <img
              src={MongoDB}
              width='200rem'
              height=''
              alt=""
            />
          </div>
          <div className="slide">
            <h3 style={{textShadow: '1px 1px 5px red, 0 0 ..5em white, 0 0 3em white',color:'#efd81d'}}>Express.js</h3>
            <img
              src={ExpressJs}
              width='200rem'
              height=''
              alt=""
            />
          </div>
          <div className="slide">
            <h3 style={{textShadow: '1px 1px 5px red, 0 0 ..5em white, 0 0 3em white',color:'#7fc728'}}>Node.js</h3>
            <img
              src={NodeJs}
              width='200rem'
              height=''
              alt=""
            />
          </div>
          <div className="slide">
            <h3 style={{textShadow: '1px 1px 5px red, 0 0 ..5em white, 0 0 3em white',color:'#6295cb'}}>C++</h3>
            <img
              src={cpp}
              width='90rem'
              height=''
              alt=""
            />
          </div>
          <div className="slide">
            <h3 style={{textShadow: '1px 1px 5px red, 0 0 ..5em white, 0 0 3em white',color:'#6295cb'}}>C</h3>
            <img
              src={c}
              width='90rem'
              height=''
              alt=""
            />
          </div>
          <div className="slide">
            <h3 style={{textShadow: '1px 1px 5px red, 0 0 ..5em white, 0 0 3em white',color:'#d3b32c'}}>JavaScript</h3>
            <img
              src={JavaScript}
              width='150rem'
              height=''
              alt=""
            />
          </div>
          <div className="slide">
            <h3 style={{textShadow: '1px 1px 5px red, 0 0 ..5em white, 0 0 3em white',color:'#d32d00'}}>HTML</h3>
            <img
              src={html}
              width='150rem'
              height=''
              alt=""
            />
          </div>
          <div className="slide">
            <h3 style={{textShadow: '1px 1px 5px red, 0 0 ..5em white, 0 0 3em white',color:'#0064ae'}}>CSS</h3>
            <img
              src={css}
              width='75rem'
              height=''
              alt=""
            />
          </div>
          <div className="slide">
            <h3 style={{textShadow: '1px 1px 5px red, 0 0 ..5em white, 0 0 3em white',color:'#7248b6'}}>Redux</h3>
            <img
              src={redux}
              width='80rem'
              height=''
              alt=""
            />
          </div>
          <div className="slide">
            <h3 style={{textShadow: '1px 1px 5px red, 0 0 ..5em white, 0 0 3em white',color:'#f7f7f7'}}>Vercel</h3>
            <img
              src={vercel}
              width='80rem'
              height=''
              alt=""
            />
          </div>
          <div className="slide">
            <h3 style={{textShadow: '1px 1px 5px red, 0 0 ..5em white, 0 0 3em white',color:'#3bdbae'}}>Render</h3>
            <img
              src={render}
              width='100rem'
              height=''
              alt=""
            />
          </div>
          <div className="slide">
            <h3 style={{textShadow: '1px 1px 5px red, 0 0 ..5em white, 0 0 3em white',color:'#24c1b1'}}>Netlify</h3>
            <img
              src={netlify}
              width='80rem'
              height=''
              alt=""
            />
          </div>
          <div className="slide">
            <h3 style={{textShadow: '1px 1px 5px red, 0 0 ..5em white, 0 0 3em white',color:'#635ea1'}}>Heroku</h3>
            <img
              src={heroku}
              width='90rem'
              height=''
              alt=""
            />
          </div>
          <div className="slide">
            <h3 style={{textShadow: '1px 1px 5px red, 0 0 ..5em white, 0 0 3em white',color:'#d34833'}}>Git</h3>
            <img
              src={git}
              width='90rem'
              height=''
              alt=""
            />
          </div>
          <div className="slide">
            <h3 style={{textShadow: '1px 1px 5px red, 0 0 ..5em white, 0 0 3em white',color:'white'}}>Github</h3>
            <img
              src={github}
              width='100rem'
              height=''
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
