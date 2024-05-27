// 11
import React from 'react';
import "./home.css";


import Navbar from '../../components/navbar/Navbar';
import Announcement from '../../components/announcement/Announcement';
import Slider from '../../components/slider/Slider';
import Categories from '../../components/categories/Categories';
import Products from '../../components/products/Products';
import Newsletter from '../../components/newsletter/Newsletter';
import Footer from '../../components/footer/Footer';

const Home = () => {
  return (
    <div className='home'>
       <Announcement></Announcement>
       <Navbar></Navbar>
       <Slider></Slider>
       <Categories></Categories>
       <Products></Products>
       <Newsletter></Newsletter>
       <Footer></Footer>
    </div>
  )
}

export default Home;