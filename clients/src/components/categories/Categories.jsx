import React from 'react';
import "./Categories.css";

import { categories } from '../../data';

import CategoryItem from '../categoryItem/CategoryItem';

const Categories = () => {
  return (
    <div className="categories">
      {categories.map((item) => (
           <CategoryItem item={item} key={item.id}></CategoryItem>
      ))}
    </div>
  )
}

export default Categories
