import React from 'react';
import Charges from './components/sections/charges';
import ChooseApp from './components/sections/choose-app';
import Features from './components/sections/features';
import Home from './components/sections/home';
import Jackpot from './components/sections/jackpot';
import Learn from './components/sections/learn';
import Trusted from './components/sections/trusted';
import UltimateFeatures from './components/sections/ultimate-features';
import "./style/app.css";


function App() {
  return (
    <div className="main-container">
      <Home/>
      <Trusted/>
      <Features />
      <Jackpot/>
      <Learn/>
      <ChooseApp />
      <UltimateFeatures />
      <Charges />
    </div>
  );
}

export default App;
