import React from 'react';
import './index.css';
import Title from './components/Title';
import AboutMe from './components/AboutMe';
import { useEffect } from 'react';
import $ from 'jquery';
import script from './script';

function App() {

  useEffect(() => {

      script.JQuery();

  })

  return (
    <div>
      <Title />
      <AboutMe />
    </div>
  );
}

export default App;
