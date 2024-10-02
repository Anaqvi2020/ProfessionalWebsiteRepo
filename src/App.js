import React from 'react';
import './App.css';
import Mountain from './images/Green-Mountains.png';
import Trees from './images/Trees.png';
import Selfie from './images/Profile Pic.jpeg';
import Timeline from './Timeline';
import SkillCard from './SkillCard';
import C_Image from './images/C++.png';
import Java_Image from './images/Java.png';
import HTML_Image from './images/HTML.png';
import CSS_Image from './images/CSS.png';
import SQL_Image from './images/SQL.png';
import Python_Image from './images/Python.png';
import RReact_Image from './React.png';
import Javascript_Image from './images/Javascript.png';
import Node_Image from './images/Node.png';
import UB04 from './images/UB04.png';
import ProjectCard from './ProjectCard';
import Melee from './Melee.png';
import Tetris from './images/CompleteTetrisBoard.jpg';
import Doc from './images/Document.png'
import Resume from './Resume-Ali Naqvi.pdf'

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
            <h2>Recent computer science graduate of UC, Riverside.</h2>
          </div>
          <div id="aboutMe" className="aboutMe">
            <h2>About Me</h2>
            <p>I was born and raised in California so nothing feels better to me than the ocean breeze at a beach on a warm day. That holds true whether I'm neck deep in the water or fixing some bug on my laptop in a chair. But no matter how much I might like these things, I'm always willing to go somewhere new and learn to appreciate the value of things I've never experienced. I can't say the prospect of getting a degree in Computer Science was appealing to me from the start, in fact, it was a little bit daunting. But a few times feeling what it's like to write the final line in a big project and I knew I had made the right choice.</p>
          </div>
          <div id="skills" className="skills">
            <h2 className="mySkills">My Skills:</h2>
            <div className="skills_grid">
              <SkillCard imgSrc={C_Image} name='C++'/>
              <SkillCard imgSrc={Java_Image} name='Java'/>
              <SkillCard imgSrc={Python_Image} name='Python'/>
              <SkillCard imgSrc={HTML_Image} name='HTML'/>
              <SkillCard imgSrc={CSS_Image} name='CSS'/>
              <SkillCard imgSrc={Javascript_Image} name='Javascript'/>
              <SkillCard imgSrc={RReact_Image} name='React'/>
              <SkillCard imgSrc={SQL_Image} name=''/>
              <SkillCard imgSrc={Node_Image} name='Node'/>
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
            <h2>Projects (with image links)</h2>
            <ProjectCard title="Melee Malders" description=" An epic fighting-game I made with some teammates for a school project where we had free reign to make what we wanted." imgSrc={Melee} url="https://gx.games/games/qdy4vp/melee-malders/tracks/b90b83d7-013c-45cc-94bd-cc03db2ae15b/" />
            <ProjectCard title="Physical Tetris Circuit" description="I constructed a replica of Tetris on an 8x8 LED using a breadboad and microprocessor." imgSrc={Tetris} url="https://github.com/Anaqvi2020/TetrisGame" />
            <ProjectCard title="Optical Character Reader" description="With a small team, I made an application that takes in an UB-04 form, the standard medical receipt issued by hospitals, and uses optical character recognition to extract data that can be entered into a database." imgSrc={UB04} url="https://github.com/Anaqvi2020/TetrisGame" />

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
