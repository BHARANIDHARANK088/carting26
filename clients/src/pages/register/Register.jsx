import React, {useRef} from 'react';
import "./register.css";

import { registerUser } from '../../api/productRequest';
import { useHistory } from "react-router";

const Register = () => {

  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();

  const handleClick = async (event) => {
    event.preventDefault();
    console.log(password);
    console.log(passwordAgain);
    if ( password.current.value !== passwordAgain.current.value )
    {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    }
    else
    {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value
      };

      try {
        await registerUser(user);
        history.push("/login");
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div className="register">
      <div className="rWrapper">
        <h1 className="rTitle">CREATE AN ACCOUNT</h1>
        <form className="rForm" onSubmit={handleClick}>
            {/* <input type="text" className="rInput" placeholder="name" autoFocus={true}/>
            <input type="text" className="rInput" placeholder="lastName"/> */}
            <input className="rInput" placeholder="username" ref={username}/>
            <input type="email" className="rInput" placeholder="email" ref={email}/>
            <input type="password" className="rInput" placeholder="password" ref={password}/>
            <input type="password" className="rInput" placeholder="confirm password" ref={passwordAgain}/>
            <span className="agreement">
               By creating an account, I consent to the processing of my personal
               data in accordance with the <b>PRIVACY POLICY</b>
            </span>
            <button className="rButton" type="submit">CREATE</button>
        </form>
      </div>
    </div>
  )
}

export default Register