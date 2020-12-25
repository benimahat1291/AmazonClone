import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom';
import "./Login.css"
import {auth} from "../../firebase";


function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const signIn = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, password).then(auth=>{
            history.push('/')
        }).catch(error=> alert(error.message))
    }
    
    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then((auth)=> {
            if(auth) {
                history.push('/')
            }
        }).catch(error => alert(error.message))
        //do some fancy firebase register stuff here
    }

    return (
        <div className="login">
        <Link to="/">
            <img className="login__logo" src="http://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt=""/>
        </Link>

        <div className="login__container">
            <h1>Sing-in</h1>
            <form>
                <h5>E-mail</h5>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)}></input>

                <h5>Password</h5>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}></input>
                
                <button type="submit" className="login__signInButton" onClick={signIn}>Sign-In</button>
            </form>

            <p>
                By Siging-in you agree to enjoy a demonstration of the AMAZON CLONE CHALLENGE done by Beni Mahat. . Please explore and enjoy all of the features that we have including payment through paypal. This would be a great template for any E-comerce based website. Credits to Clever Programers for the toutorial. 
            </p>

            <button onClick={register} className="login__registerButton">Create your Amazon Account</button>
        </div>
        </div>
    )
}

export default Login;
