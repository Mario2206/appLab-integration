import React, {useEffect} from 'react';
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

import {Events, scrollSpy} from "react-scroll"

export const scrollViews = {
  HOME : "home",
  KEY_FEATURES : "key-features",
  PRICING : "pricing",
  TESTIMINICAL : "testiminical",
  FAQ : "faq"
}

function App() {

  useEffect(()=>{

      Events.scrollEvent.register("begin", ()=>{
        console.log("begin");
        
      })

      Events.scrollEvent.register("end", ()=> {
        console.log("end");
        
      })

      scrollSpy.update()

  }, [])

  

  return (
    <div className="main-container">
      <Home id={scrollViews.HOME}/>
      <Trusted/>
      <Features id={scrollViews.KEY_FEATURES}/>
      <Jackpot/>
      <Learn/>
      <ChooseApp />
      <UltimateFeatures />
      <Charges id={scrollViews.PRICING} />
      <World id={scrollViews.TESTIMINICAL}/>
      <Questions id={scrollViews.FAQ}/>
      <DownloadApp/>
      <Footer/>
    </div>
  );
}

export default App;
