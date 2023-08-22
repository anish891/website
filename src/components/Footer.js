import "./Footer.css";

import React from 'react'

import {FaHome, FaGithub, FaLinkedin, FaMailBulk, FaPhone, FaInstagram} from 'react-icons/fa';
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight:"2rem" }}/>
                    <div>
                    <p>Pune</p>
                    <p>India.</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color:"#fff", marginRight:"2rem" }}/>
                    +91-8999-103-149</h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem" }}/>
                    anishtejwani891@gmail.com</h4>
                </div>
            </div>
            <div className="right">
                <h4>About me</h4>
                <p>This is Anish Tejwnai. I enjoy coding and working on new projects and taking on challenges.</p>
                <div className="social">
                    <NavLink to='https://github.com/anish891'>
                    <FaGithub size={30} style={{color:"#fff", marginRight:"1rem" }}/>
                    </NavLink>
                        <FaGithub size={30} style={{color:"#fff", marginRight:"1rem" }}/>
                    <FaInstagram size={30} style={{color:"#fff", marginRight:"1rem" }}/>
                    <FaLinkedin size={30} style={{color:"#fff", marginRight:"1rem" }}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer