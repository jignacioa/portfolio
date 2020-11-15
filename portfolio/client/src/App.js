import React from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile';
import Project from './components/Project';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Profile/>
    <Project projectTitle = "ProManager"/>
    <Project projectTitle = "Convergence"/>
    <Project projectTitle = "Mictlan"/>
    <Footer/>
    </div>
  );
}

export default App;
