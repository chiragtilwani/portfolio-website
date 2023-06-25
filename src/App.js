import { makeStyles } from '@mui/styles'
import { useState } from 'react';

import Contact from './Components/Contact';
import About from './Components/About';
import Home from './Components/Home';
import Navbar from "./Components/Navbar";
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import StartLayover from './Components/StartLayover';
import { Route, Routes } from 'react-router-dom';

const useStyles = makeStyles({
  App: {
    backgroundColor: 'var(--primary-color)',
    height: '100vh',
    overflowX: 'hidden',
    position: 'relative',
    '&::-webkit-scrollbar': {
      width: '0rem'
    }
  }
})

function App() {
  const classes = useStyles()

  const [start, setStart] = useState(false)

  function handleStart() {
    setStart(prevState => !prevState)
  }
  return (
    <div className={classes.App} style={{ overflowY: start ? 'scroll' : 'hidden' }}>
      <StartLayover handleStart={handleStart} top={start ? '-100vh' : '0vh'} />
      {start ? <><Navbar /></> : null}
      <Routes>
        <Route path='/' element={<Home start={start}/>} />
        <Route path='/about' element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
