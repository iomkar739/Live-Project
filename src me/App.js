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
