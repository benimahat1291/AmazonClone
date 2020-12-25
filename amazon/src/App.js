import './App.css';
import React, {useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Checkout from "./components/checkout/Checkout"
import Login from './components/login/Login';
import { auth } from './firebase'
import { useStateValue } from './utils/StateProvider';

function App() {

    const [{}, dispatch] = useStateValue();

    useEffect(()=> {
        auth.onAuthStateChanged(authUser => {
            console.log("The User is >> ", authUser);

            if (authUser) {
                dispatch({
                    type: 'SET_USER',
                    user: authUser
                })
            }else{
                dispatch({
                    type: 'SET_USER',
                    user: null
                })
            }

        })
    }, [])


    //BEM styling name convention
    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/checkout">
                        <Header />
                        <Checkout />
                    </Route>
                    <Route path="/">
                        <Header />
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
