import { makeStyles } from '@mui/styles'
import { useState } from 'react';

import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Navbar from "./Components/Navbar";
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import StartLayover from './Components/StartLayover';

const useStyles = makeStyles({
  App: {
    backgroundColor: 'var(--primary-color)',
    height: '100vh',
    // overflowY: 'hidden',
    overflowX: 'hidden',
    position: 'relative',
    '&::-webkit-scrollbar':{
      width:'0rem'
    }
  }
})

function App() {
  const classes = useStyles()

  const [start,setStart]=useState(false)

  function handleStart(){
    setStart(prevState=>!prevState)
  }
  return (
    <div className={classes.App} style={{overflowY: start?'scroll':'hidden'}}>
      <Navbar />
      <StartLayover handleStart={handleStart} top={start?'-100vh':'0vh'}/>
      <Home id="home" />
      <About id="about" />
      <Skills id="skills" />
      <Projects id="projects" />
      <Contact id="contact" />
    </div>
  );
}

export default App;
