import React from 'react';
import "./newsletter.css";
import {FaArrowRight} from "react-icons/fa";

const Newsletter = () => {
  return (
    <div className="newsletter">
       <h1 className="title">Newsletter</h1>
       <div className="desc">Get timely updates from your favorite products.</div>
       <div className="inputCon">
         <input type="text" className="Input" placeholder="Your email.."/>
         <button className="Button">
             <FaArrowRight></FaArrowRight>
         </button>
       </div>
    </div>
  )
}  

export default Newsletter