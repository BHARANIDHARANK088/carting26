import React from 'react';
import "./product.css";
import { FaSearch, FaShoppingCart, FaHeart } from "react-icons/fa";
import styled from "styled-components";

import { Link } from "react-router-dom";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info}{
    opacity: 1;
  }
`;


const Product = ({item}) => {

  const productRoute = "/product/" + item._id;
  return (
    <Container>
      <div className="circle">
         <img src={item.img} alt="" className="proImg" />
         <Info>
             <div  className="proIcon">
                <FaShoppingCart></FaShoppingCart>
             </div>
             <div  className="proIcon">
                {/* 26 */}
                <Link to={productRoute}>
                   <FaSearch></FaSearch>
                </Link>
             </div>
             <div  className="proIcon">
                <FaHeart></FaHeart>
             </div>
         </Info>
      </div>
    </Container>
  )
}

export default Product