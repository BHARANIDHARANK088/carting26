import React from 'react'
import "./categoryItem.css";

// 4
import { Link } from "react-router-dom";

const CategoryItem = ({item}) => {
  const route = "/products/" + item.cat;
  return (
    <div className="catItem">
      {/* 5 Link */}
      <Link to={route}>
        <img className="catImg" src={item.img} alt="" />
        <div className="catInfo">
           <h1 className="catTitle">{item.title}</h1>
           <button className="catButton">SHOP NOW</button>
        </div>
      </Link>
    </div>
  )
}

export default CategoryItem;