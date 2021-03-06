import React from "react";
import Video from "./backgroundvideo";
import { HashLink as Link } from "react-router-hash-link";
import {useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
 
const Background = () => {
  useEffect(() => {
    Aos.init({duration: 2000});
}, []);
  return (
    <div className="background" data-aos='flip-down-left'>
      <div className="background__text-one">
        <h1 className="background__text-one--text"> Wisely Evolved Solution</h1>
      </div>
      <div className="background__border"></div>
      <div className="background__text-two">
        <h3 className="background__text-two--text">
          Risk-free mobile and web development
        </h3>
      </div>
      <div className="background__button">
        <Link to="#contactus" className="background__button--link">
          Lets Talk
        </Link>
      </div>
      <Video />
    </div>
  );
};
export default Background;
