import React from 'react';
import Features from './components/sections/features';
import Home from './components/sections/home';
import Trusted from './components/sections/trusted';
import "./style/app.css";


function App() {
  return (
    <div>
      <Home/>
      <Trusted/>
      <Features />
    </div>
  );
}

export default App;
