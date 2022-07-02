import './App.css';
import React, { Component } from 'react';
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";


const Home = () => <div><h2>Home</h2></div>
const About = () => <div><h2>About</h2></div>
const Contact = () => <div><h2>Contact</h2></div>

class App extends Component {
  render() {
    return (
      <Router basename="/">
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
