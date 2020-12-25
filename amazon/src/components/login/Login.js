import React from 'react'
import { Link } from 'react-router-dom';
import "./Login.css"


function Login() {
    return (
        <div className="login">
        <Link to="/">
            <img className="login__logo" src="http://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt=""/>
        </Link>

        <div className="login__container">
            <h1>Sing-in</h1>
            <form>
                <h5>E-mail</h5>
                <input type="text"></input>

                <h5>Password</h5>
                <input type="password"></input>
                
                <button className="login__signInButton">Sign-In</button>
            </form>

            <p>
                By Siging-in you agree to enjoy a demonstration of the AMAZON CLONE CHALLENGE done by Beni Mahat. . Please explore and enjoy all of the features that we have including payment through paypal. This would be a great template for any E-comerce based website. Credits to Clever Programers for the toutorial. 
            </p>

            <button className="login__registerButton">Create your Amazon Account</button>
        </div>
        </div>
    )
}

export default Login;
