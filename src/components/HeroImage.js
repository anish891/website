import "./HeroImage.css";

import React from 'react'

import IntroImage from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";

const HeroImage = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={IntroImage} alt={IntroImage} />
        </div>
        <div className="content">
            <p>HI, I'M A SOFTWARE-ENGINEER.</p>
            <h1>SOFTWARE DEVELOPER.</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImage