import React, { useEffect, useState } from 'react';
import "./navbar.css";

import { FaSearch, FaShoppingCart } from "react-icons/fa"
import { Link } from 'react-router-dom';
import { getPartialProducts } from '../../api/productRequest';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../redux/apiCalls';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState(null);
  const [products, setProducts] = useState([]);

  const user = useSelector((state) => state.user);
  console.log(user);

  useEffect(() => {
    if ( searchQuery != null )
    {
      const getAllProducts = async () => {
        try {
          const response = await getPartialProducts(searchQuery);
          setProducts(response.data);
        } catch (error) {
         console.log(error);
        }
     }
     getAllProducts();
    }
  }, [searchQuery]);

  console.log(products);
  console.log(searchQuery);

  const dispatch = useDispatch();
  const handleLogout = () => {
    logOut(dispatch);
  }

  return (
    <div className="navbar">
       <div className="wrapper">
           <div className="left">
              <span className="language">EN</span>
              <div className="searchCon">
                  <input type="text" className="Input" placeholder="Search" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)}/>
                  <FaSearch className="searchIcon"></FaSearch>
              </div>
              <div className="searchProducts">
                {searchQuery ? (
                    <div className="sProducts">
                      {products.map((product) => 
                      ( <Link to={"/product/" + product._id} style={{textDecoration: "none"}}>
                           <div className="sProduct">
                             <span className="productTitle">{product.title}</span>
                           </div>
                        </Link>
                      ))}
                    </div>
                  ) :
                  ("")
                }
              </div>
           </div>
           <div className="center">
                 <h1 className="logo">CARE</h1>
           </div>
           <div className="right">
              { user.currentUser ? ""
                 :
              <>
                <Link to="/register" style={{textDecoration: "none"}}>
                   <div className="menuItem">REGISTER</div>
                </Link>
                <Link to="/login" style={{textDecoration: "none"}}>
                   <div className="menuItem">LOGIN</div>
                </Link>
              </>
              }
              {/* 55 */}
              <Link to="/cart" style={{marginRight: "10px"}}>
                <div className="menuItem">
                  <FaShoppingCart></FaShoppingCart>
                </div>
              </Link>
              { user.currentUser &&
                <p onClick={handleLogout} style={{cursor: "pointer"}}>logout</p>
              }
           </div>
       </div>
    </div>
  )
}

export default Navbar;