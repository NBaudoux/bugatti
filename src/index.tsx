import React, { useState } from "react";
import ReactDOM from "react-dom";

import HeaderButton from "./components/HeaderButton/HeaderButton";
import HeaderLink from "./components/HeaderLink/HeaderLink";

import About from "./pages/About";
import HomePage from "./pages/HomePage";

import * as config from "./config";
import "./index.less";

const Main: React.FC = () => {
  const title = "Bugatti";

  const content = () => {
    switch(selectedTab){
    case 0: {
      return <HomePage />;}
    case 1: 
      return <About />;
    }};

  const [selectedTab, setSelectedTab] = useState<number>(0);

  return (
    <>
      <div className="header">
        <a href="index" className="home-shortcut">{title}</a>
        {config.TABS.map((tab, i) => {
          return (
            <HeaderButton 
              icon={tab.icon} 
              index={i} 
              key={`TAB_${i}`} 
              selected={selectedTab} 
              setSelected={setSelectedTab} 
              value={tab.text} 
            />);
        })}
      </div>
      <div className="content">
        {content()}
      </div>
      <div className="bottom">
        {config.LINKS.map((link, i) => {
          return(
            <HeaderLink
              autoHide={link.autoHide}
              icon={link.icon}
              key={`LINK_${i}`}
              link={link.link}
              text={link.text}
            />
          );
        })}
      </div>
    </>
  );
};

  
ReactDOM.render(
  <React.StrictMode>
    <Main/>
  </React.StrictMode>,
  document.getElementById("root")
);