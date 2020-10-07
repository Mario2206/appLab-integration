import React from 'react';
import Charges from './components/sections/charges';
import ChooseApp from './components/sections/choose-app';
import DownloadApp from './components/sections/download-app';
import Features from './components/sections/features';
import Footer from './components/sections/footer';
import Home from './components/sections/home';
import Jackpot from './components/sections/jackpot';
import Learn from './components/sections/learn';
import Questions from './components/sections/questions';
import Trusted from './components/sections/trusted';
import UltimateFeatures from './components/sections/ultimate-features';
import World from './components/sections/world';
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
      <World />
      <Questions/>
      <DownloadApp/>
      <Footer/>
    </div>
  );
}

export default App;
