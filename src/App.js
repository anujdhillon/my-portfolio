import './App.scss';
import React, { useLayoutEffect, useState } from 'react';
import NavBar from './Components/NavBar';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ProjectsPage from './Pages/ProjectsPage';
import ContactPage from './Pages/ContactPage';
import ParticleBackground from "./Components/ParticleBackground";
import particleconfig1  from './config/particle-config';

function App() {

  const [navToggle,setNavToggle] = useState(false);
  const [homeToggle,setHomeToggle] = useState(false);

  const navClick = () => {
    setNavToggle(!navToggle)
  }
  const enterClick = () => {
    setHomeToggle(!homeToggle)
  }

  return (
    <div className="App">
      <div className={`firstpage ${homeToggle ? 'home-toggle':''}`}>
      <HomePage enterClick = {enterClick}/>
      </div>
      <div className={`sidebar ${navToggle ? 'nav-toggle':''}`}>
          <NavBar/>
      </div>
      <div className="nav-btn" onClick={navClick}>
        <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div>
      </div>
      <div className="main-content">
        <div className="particles">
        <ParticleBackground particlesConfig = {particleconfig1}/>
        </div>
        <div className="content">
          <div id = "about">
          <AboutPage/>
          </div>  
          <div id = "portfolio">
          <ProjectsPage/>
          </div>
          <div id = "contact">
          <ContactPage/>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default App;
/*
<Switch>
                <Route path="/" exact>
                  
                </Route>
                <Route path="/projects" exact>
                  <ProjectsPage/>
                </Route>
                <Route path="/contact" exact>
                <ContactPage/>
                </Route>
              </Switch>*/