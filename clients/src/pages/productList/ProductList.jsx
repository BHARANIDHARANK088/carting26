import React, { useState } from 'react';
import "./productList.css";

import Navbar from '../../components/navbar/Navbar';
import Announcement from '../../components/announcement/Announcement';
import Products from '../../components/products/Products';
import Newsletter from '../../components/newsletter/Newsletter';
import Footer from '../../components/footer/Footer';

// 6
import { useLocation } from "react-router";


const ProductList = () => {

  // 7
  const location = useLocation();
  // console.log(location.pathname.split("/")[2]);
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest"); 

  // 9
  const handleFilters = (event) => {
     const value = event.target.value;
     setFilters({
      ...filters,
      [event.target.name]: value
     })
  }
  // console.log(filters);

  return (
    <div className="productList">
      <Announcement></Announcement>
      <Navbar></Navbar>
      
      <div className="pTitle">{cat}</div>
      <div className="filterCon">
        <div className="filter">
          <span className="filterText">Filter Products</span>
          {/* 8 name and onChange to select of color and size */}
          <select className="select" name="color" onChange={handleFilters}>
            <option className="option" disabled>Color</option>
            <option className="option">White</option>
            <option className="option">Black</option>
            <option className="option">Red</option>
            <option className="option">Blue</option>
            <option className="option">Green</option>
          </select>

          <select className="select" name="size" onChange={handleFilters}>
            <option className="option" disabled>Size</option>
            <option className="option">S</option>
            <option className="option">M</option>
            <option className="option">L</option>
            <option className="option">XL</option>
            <option className="option">XXL</option>
          </select>
        </div>
        <div className="filter">
           <span className="filterText">Sort Products</span>
           {/* 10 onChange */}
           <select className="select" onChange={(event) => setSort(event.target.value)}>
            <option className="option" value="newest">Newest</option>
            <option className="option" value="asc">Price (asc)</option>
            <option className="option" value="des">Price (des)</option>
          </select>
        </div>
      </div>
   
      {/* 11 cat, filters and sort */}
      <Products cat={cat} filters={filters} sort={sort}></Products>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  )
}

export default ProductList;