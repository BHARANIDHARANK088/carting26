import React, { useEffect, useState } from 'react';
import "./singleProduct.css";
import Navbar from '../../components/navbar/Navbar';
import Announcement from '../../components/announcement/Announcement';
import Footer from '../../components/footer/Footer';
import Newsletter from '../../components/newsletter/Newsletter';
import styled from "styled-components";
import {FaPlus, FaMinus} from "react-icons/fa";

// 27
import { useLocation } from "react-router";

// 30
import { getSingleProduct } from '../../api/productRequest.js';


// 52
import { addProduct } from '../../redux/cartRedux';
import { useDispatch } from 'react-redux';

const FilterContainer = styled.div`
    display: flex;
    width: 50%;
    justify-content: space-between;
    margin: 30px 0;
`
const Filter = styled.div`
    display: flex;
    align-items: center;
`


const FilterTitle = styled.span`
   font-size: 20px;
   font-weight: 200;
`
const FilterColor = styled.div`
   width: 20px;
   height: 20px;
   border-radius: 50%;
   background-color: ${props => props.color};
   margin: 0px 5px;
   cursor: pointer;
`


const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`;
const FilterSizeOption = styled.option`
    padding: 5px;
`

const SingleProduct = () => {
  // 28
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  // console.log(productId);

  // 31
  const [product, setProduct] = useState({});
  useEffect(() => {
    const getProduct = async () => {
       try {
          const {data} = await getSingleProduct(productId);
          setProduct(data);
          // console.log(data);
       } catch (error) {
         console.log(error);
       }
    }
    getProduct();
  }, [productId])

  // 33
  const [quantity, setQuantity] = useState(1);

  // 36
  const handleQuantity = (type) => {
    if ( type === "des" )
    {
      if ( quantity > 1 )
      {
        setQuantity(quantity - 1);
      }
    }
    else
    {
      setQuantity(quantity+1);
    }
  }

  // 37
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  // 53
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addProduct({...product, quantity, color, size}));
  }

  
  return (
    <div className="singleProduct">
       {/* singleProduct */}

       <Navbar></Navbar>
       <Announcement></Announcement>

       <div className="spWrapper">
          <div className="imgCon">
             <img src="https://i.ibb.co/S6qMxwr/jean.jpg" alt="" className="spImg" />
          </div>
          <div className="infoCon">
             {/* 32 Change every details of product */}
             <h1 className="spTitle">{product.title}</h1>
             <p className="spDesc">
                {/* Desc */}
                {product.desc}
             </p>
             <span className="price">$ {product.price}</span>

             <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {/* <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" /> */}
              {product.color?.map((c) => (
                <FilterColor color={c} key={c} onClick={() => setColor(c)}/>
              ))}
              {/* 38 adding onClick to FilterColor */}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              {/* 39 onChange */}
              <FilterSize onChange={(event) => setSize(event.target.value)}>
                {/* <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption> */}
                {product.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>

           <div className="addCon">
             <div className="amountCon">
                 {/* 35 onClick to minus and plus*/}
                 <FaMinus onClick={() => handleQuantity("des")}></FaMinus>
                 {/* 34 quantity */}
                 <span className="amount">{quantity}</span>
                 <FaPlus onClick={() => handleQuantity("inc")}></FaPlus>
             </div>
             {/* 40 onClick */}
             <button className="spButton" onClick={handleClick}>ADD TO CART</button>
           </div>
          </div>
       </div>

       <Newsletter></Newsletter>
       <Footer></Footer>
    </div>
  )
}

export default SingleProduct;