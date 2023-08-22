import React from 'react';
import { Link } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Career from './components/Career';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';


function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
        <div className="container">
          <Link className="navbar-brand" to="home" smooth={true} duration={500}>AK</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="home" smooth={true} duration={500}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="career" smooth={true} duration={500}>Career</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="about" smooth={true} duration={500}>About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="contact" smooth={true} duration={500}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div id="home" style={{ height: '100vh' }}>
        <Home />
      </div>
      <div id="career" style={{ height: '100vh' }}>
        <Career />
      </div>
      <div id="about" style={{ height: '100vh' }}>
        <About />
      </div>
      <div id="contact" style={{ height: '100vh' }}>
        <Contact />
      </div>
    </div>
  );
}

export default App;
