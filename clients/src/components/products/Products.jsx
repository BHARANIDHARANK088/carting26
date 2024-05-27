import React, { useEffect } from 'react';
import "./products.css";

import { popularProducts  } from '../../data';

// 20
import { getProducts } from '../../api/productRequest';

import Product from '../product/Product';
import { useState } from 'react';

// 12 {cat, filters, sort} as props
const Products = ({cat, filters, sort}) => {
  // 13
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  // 20
  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const {data} = await getProducts(cat);
        // console.log(data);
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    }
    getAllProducts();
  }, [cat])

  // console.log(products);

  // 23
  useEffect(() => {
     cat && setFilteredProducts(
        products.filter((item) => 
          Object.entries(filters).every(([key, value]) => 
             item[key].includes(value)
          )
        )
     )
  }, [products, cat, filters])

  useEffect(() => {
    if ( sort === "newest" )
    {
      setFilteredProducts((prev) => 
        [...prev].sort((a,b) => a.createdAt - b.createdAt)
      )
    }
    else if ( sort === "asc" )
    {
      setFilteredProducts((prev) => 
        [...prev].sort((a,b) => a.price - b.price)
      )
    }
    else
    {
      setFilteredProducts((prev) => 
        [...prev].sort((a,b) => b.price - a.price)
      )
    }
  }, [sort])
  // console.log(filteredProducts);

  return (
    <div className="products">
      {/* 24 change popularProducts to filteredProducts*/}
      {/* {filteredProducts.map((item) => (
         <Product item={item} key={item.id}></Product>
      ))} */}

      {/* 25 products in homepage and productList page */}
      {cat ? 
        filteredProducts.map((item) => <Product item={item} key={item.id}></Product>)
                   :
        products.slice(0,5).map((item) => <Product item={item} key={item.id}></Product>)  
      }
    </div>
  )
}

export default Products