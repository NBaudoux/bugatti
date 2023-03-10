import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import * as config from "./config";
import "./index.less";

const HomePage: React.FC = () => 
{
  return (
    <div className="home-page">
      <div className="hp-desc">
        <div className="logo1"/>
        {config.DESC.map((text, i) => (<p key={i}>{text}</p>))}
      </div>
      <div className="slide-container">
        <Slide>
          {config.SLIDE_IMAGES.map((img, i) => (
            <div className="each-slide" key={i}>
              <div 
                className={`slide-show-img ${img.styleName}`} 
                title={img.caption}
              />
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default HomePage;