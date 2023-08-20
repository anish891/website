import { Link } from "react-router-dom";
import "./AboutContent.css";

import React from 'react';
import React1 from "../assets/intro-bg.jpg";

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who AM I?</h1>
            <p>cnl LJV Vnjnv vzjlnsa nxlzn LCKMCJ scn lcf DNJ VndM o ksl nlna nlval nklvmv</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>

        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={React1} className="img" alt="true" />
                </div>
                <div className="img-stack bottom">
                    <img src={React1} className="img" alt="true" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent