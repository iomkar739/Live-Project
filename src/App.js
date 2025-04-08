import logo from './logo.svg';
import './App.css';
import FinalPreview from './preview';
import Basic from './basic';
import Contact from './contact';
import Project from './project';
import Experience from './exp';
import Education from './edu';
import Skills from './skills';


import { HashRouter,Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <HashRouter>

      <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
        <div className="container">
          <Link className="navbar-brand"><i className='fa fa-users fa-lg'></i> Profile Management</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item me-3">
                <Link className="nav-link active" to="/"><i className='fa fa-home'></i> My Home</Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link active" to="/basic"><i className='fa fa-user'></i> Basic</Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link active" to="/contact"><i className='fa fa-headset'></i> Contact</Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link active" to="/education"><i className='fa fa-book'></i> Education</Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link active" to="/skills"><i className='fa fa-desktop'></i> Skills</Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link active" to="/project"><i className='fa fa-suitcase'></i> Project</Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link active" to="/experience"><i className='fa fa-file'></i> Experience</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route exact path="/basic" element = {<Basic/>}/>
        <Route exact path="/Contact" element = {<Contact/>}/>
        <Route exact path="/Education" element = {<Education/>}/>
        <Route exact path="/Experience" element = {<Experience/>}/>
        <Route exact path="/Project" element = {<Project/>}/>
        <Route exact path="/Skills" element = {<Skills/>}/>
        <Route exact path="/" element = {<FinalPreview/>}/>
      </Routes>

    </HashRouter>
  );
}

export default App;
