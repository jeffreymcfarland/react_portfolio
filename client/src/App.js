import React from 'react';
import './index.css';
import Title from './components/Title';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Techs from './components/Techs';
import { useEffect } from 'react';
import script from './script';

function App() {

  useEffect(() => {

      script.JQuery();

  })

  return (
    <div>
      <Title />
      <AboutMe />
      <Projects />
      <Techs />
    </div>
  );
}

export default App;
