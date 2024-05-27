import React, { useState } from 'react';
import "./login.css";

// 79
import { useDispatch, useSelector } from 'react-redux';
import { login } from "../../redux/apiCalls.js";

const Login = () => {
  // 76
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // 81
  const { isFetching, error } = useSelector((state) => state.user);

  // 80
  const dispatch = useDispatch();
  const handleClick = (event) => {
    event.preventDefault();

    login(dispatch, {username, password});
  }

  return (
    <div className="login">
      <div className="lWrapper">
        <h1 className="lTitle">SIGN IN</h1>
        <form className="lForm">
            {/* 77 onChange to username and password */}
            <input type="text" className="lInput" placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
            <input type="password" className="lInput" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
            {/* 78 onClick */}
            <button className="lButton" onClick={handleClick} disabled={isFetching}>LOGIN</button>
            {error && <span>Something went wrong</span>}
            <a href="" className="lLink">Forgot the password?</a>
            <a href="" className="lLink">CREATE A NEW ACCOUNT</a>
        </form>
      </div>
    </div>
  )
}

export default Login
