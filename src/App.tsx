import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Info from './components/Info';
import Navbar from './components/Navbar';
import Scale from './components/Scale';
import Map from './components/Map'
import Stop from './components/Stop';
import Ltv from './components/Ltv';
import Journey from './components/Journey';
import Models from './components/Models';
import LifeTime from './components/LifeTime';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Info />
      <Scale />
      <Map />
      <Stop />
      <Ltv />
      <Journey />
      <Models />
      <LifeTime />
    </div>
  );
}

export default App;
