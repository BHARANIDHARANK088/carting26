import React from "react";

import Home from "./pages/home/Home.jsx";
import ProductList from "./pages/productList/ProductList.jsx";
import SingleProduct from "./pages/singleProduct/SingleProduct.jsx";
import Register from "./pages/register/Register.jsx";
import Login from "./pages/login/Login.jsx";
import Cart from "./pages/cart/Cart.jsx";

// 2
import { BrowserRouter as Router, Switch, Route, Link, Redirect  } from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  // const user = false;

  // 82
  const user = useSelector(state => state.user.currentUser);
  return (
    <div className="App">
         {/* <Home></Home> */}
         {/* <ProductList></ProductList> */}
         {/* <SingleProduct></SingleProduct> */}
         {/* <Register></Register> */}
         {/* <Login></Login> */}
         {/* <Cart></Cart> */}

         {/* 3 */}
         <Router>
            <Switch>
               <Route exact path="/">
                 <Home></Home>
               </Route>
               <Route path="/products/:category">
                  <ProductList></ProductList>
               </Route>
               <Route path="/product/:id">
                 <SingleProduct></SingleProduct>
               </Route>
               <Route path="/cart">
                 <Cart></Cart>
               </Route>
               <Route path="/login">
                 {user ? <Redirect to="/"/>: <Login/>}
               </Route>
               <Route path="/register">
                 {user ? <Redirect to="/"/> : <Register/>}
               </Route>
            </Switch>
         </Router>
    </div>
  );
}

export default App;
