// 15
import TopBar from "./components/topBar/TopBar";
import "./App.css";

// 23
import Sidebar from "./components/sidebar/Sidebar";

// 32
import Home from "./pages/home/Home.jsx";

// 75
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";

// 87
import User from "./pages/user/User";

// 94
import NewUser from "./pages/newUser/NewUser";

// 103
import ProductList from "./pages/productList/ProductList";

// 112
import Product from "./pages/product/Product";

// 119
import NewProduct from "./pages/newProduct/NewProduct";

function App() {
  return (
    <div className="App">
      {/* Hi */}

      {/* 76 */}
      <Router>
        {/* 16 */}
        <TopBar></TopBar>

        {/* 24 */}
       <div className="container" style={{display: "flex", marginTop: "10px"}}>
          <Sidebar></Sidebar>

          {/* 33 */}
          {/* <Home></Home> */}

          {/* 77 */}
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/users">
              <UserList></UserList>
            </Route>
            {/* 88 */}
            <Route path="/user/:userId">
              <User></User>
            </Route>
            {/* 95 */}
            <Route path="/newUser">
              <NewUser></NewUser>
            </Route>
            {/* 104 */}
            <Route path="/products">
              <ProductList></ProductList>
            </Route>
            {/* 113 */}
            <Route path="/product/:productId">
              <Product></Product>
            </Route>
            {/* 120 */}
            <Route path="/newProduct">
              <NewProduct></NewProduct>
            </Route>
          </Switch>
      </div>
      </Router>
    </div>
  );
}

export default App;
