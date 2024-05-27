import React, {useContext, useState} from 'react'
import "./slider.css"
import styled from "styled-components";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { sliderItems } from '../../data';


const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
`


const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
       if ( direction === "left" ) {
        setSlideIndex( slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1 )
       }
       else
       {
        setSlideIndex( slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0 )
       }
  }
  
  return (
    <div className="slider">
      <div className="ArrowLeft" onClick={() => handleClick("left")}>
          <FaArrowLeft></FaArrowLeft>
      </div>
      <Wrapper slideIndex={slideIndex}>
          {sliderItems.map((item) => (
            <div className="slide">
              <div className="imgCon">
                <img className="img" src={item.img} alt="" />
             </div>
             <div className="infoCon">
                <h1 className="title">{item.title}</h1>
                <p className="desc">{item.desc}</p>
                <button className="button">SHOP NOW</button>
             </div>
          </div>
          ))}
          
          {/* <div className="slide">
            <div className="imgCon">
               <img className="img" src="https://i.ibb.co/cXFnLLV/3.png" alt="" />
            </div>
            <div className="infoCon">
                <h1 className="title">SUMMER SALE</h1>
                <p className="desc">DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</p>
                <button className="button">SHOP NOW</button>
            </div>
          </div>
          <div className="slide">
            <div className="imgCon">
               <img className="img" src="https://i.ibb.co/cXFnLLV/3.png" alt="" />
            </div>
            <div className="infoCon">
                <h1 className="title">SUMMER SALE</h1>
                <p className="desc">DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</p>
                <button className="button">SHOP NOW</button>
            </div>
          </div> */}
      </Wrapper>
      
      <div className="ArrowRight" onClick={() => handleClick("right")}>
          <FaArrowRight></FaArrowRight>
      </div>
    </div>
  )
}

export default Slider;