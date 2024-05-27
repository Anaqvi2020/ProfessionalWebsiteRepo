import React from 'react';
import './App.css';
import Mountain from './Green-Mountains.png';
import Trees from './Trees.png';
import Selfie from './images/selfie.jpg';
import Timeline from './Timeline';
import SkillCard from './SkillCard';
import C from './C++.png';
import Java from './Java.png';
import HTML from './HTML.png';
import CSS from './CSS.png';
import RReact from './React.png';
import Javascript from './Javascript.png';
import ProjectCard from './ProjectCard';
import Melee from './Melee.png';
import Mech from './Mech.png';
import Doc from './Document.png'
import Resume from './Resume - Ali Naqvi (1).pdf'

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <a className="navbar-brand" href="#">Ali Naqvi</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#aboutMe">About Me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#timeline">My Journey</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contactMe">Contacts</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="wrapper">
        <header>
          <img src={Mountain} className="background" alt="Mountain Background"/>
          <img src={Trees} className="foreground" alt="Trees Foreground"/>
          <h1 className="title">Hi, I'm Ali. Nice to Meet You.</h1>
        </header>
        <div className="else">
          <div className="Hero">
            <img src={Selfie} className="selfie" width="200px" alt="Selfie" />
            <h2>I'm currently a fourth year Computer Science student at UC, Riverside.</h2>
          </div>
          <div id="aboutMe" className="aboutMe">
            <h2>About Me</h2>
            <p>I was born and raised in California so nothing feels better to me than the ocean breeze at a beach on a warm day. That holds true whether I'm neck deep in the water or fixing some bug on my laptop in a chair. But no matter how much I might like these things, I'm always willing to go somewhere new and learn to appreciate the value of things I've never experienced. I can't say the prospect of getting a degree in Computer Science was appealing to me from the start, in fact, it was a little bit daunting. But a few times feeling what it's like to write the final line in a big project and I knew I had made the right choice.</p>
          </div>
          <div id="skills" className="skills">
            <h2 className="mySkills">My Skills:</h2>
            <div className="skills_grid">
              <SkillCard imgSrc={C} name='C++'/>
              <SkillCard imgSrc={Java} name='Java'/>
              <SkillCard imgSrc={HTML} name='HTML'/>
              <SkillCard imgSrc={CSS} name='CSS'/>
              <SkillCard imgSrc={RReact} name='React'/>
              <SkillCard imgSrc={Javascript} name='Javascript'/>
            </div>
          </div>
          <div className="resume">
            <h2>My <br></br>Resume</h2>
            <a href={Resume} target="_blank">
              <img src={Doc} alt="Resume" />
            </a>
          </div>

          <div id="timeline">
            <Timeline />
          </div>

          <div id="projects" className="projects">
            <h2>Projects</h2>
            <ProjectCard title="Melee Malders" description="Some classmates and I got together to make a project of our choosing and we felt something unqiue would be an epic fighting-game." imgSrc={Melee} url="https://gx.games/games/qdy4vp/melee-malders/tracks/b90b83d7-013c-45cc-94bd-cc03db2ae15b/" />
            <ProjectCard title="Car Systems" description="I constructed the basic functionality of a car such as steering and turns signals on a breadboard" imgSrc={Mech} url="https://www.youtube.com/watch?v=0EIBG5hYjns" />
          </div>

          <h2 id="contactMe" className="contactMe">Contact Me</h2>
          <div className="contacts">
            <a href="https://github.com/Anaqvi2020" target="_blank"><h3>Github</h3></a>
            <a href="https://linkedin.com/in/ali-naqvi-b253b2241" target="_blank"><h3>LinkedIn</h3></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
