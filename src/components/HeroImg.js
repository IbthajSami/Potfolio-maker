import "./HeroImgStyles.css";
import React from 'react'
import IntoImg from "../Assests/photo-1593062096033-9a26b09da705.jpg"
import { Link } from "react-router-dom";
const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={IntoImg} alt ="Into Img"/>
        </div>
        <div className="content">
            <p>HI, I'M A FREELANCER</p>
            <h1>React Developer.</h1>
            <div>
                <Link to = "/projects" className="btn">Projects</Link>
            </div>
            <div>
                <Link to = "/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg