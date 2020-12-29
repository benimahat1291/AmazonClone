import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Checkout from "./components/checkout/Checkout"
import Login from './components/login/Login';
import Orders from './components/orders/Orders'
import { auth } from './firebase'
import { useStateValue } from './utils/StateProvider';
import Payment from './components/payment/Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe("pk_test_51I3Ay3J1FwAwnRIAzP6GCoCBjNNMUg3vGzUMpQFNgaxRElvJ0b2SpoClhq5zulnUnemMvf2pCpCWbw0Yy3HgeTxy00HnZwuMj1");


function App() {

    const [{ }, dispatch] = useStateValue();

    useEffect(() => {
        auth.onAuthStateChanged(authUser => {
            console.log("The User is >> ", authUser);

            if (authUser) {
                dispatch({
                    type: 'SET_USER',
                    user: authUser
                })
            } else {
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
                    <Route path="/orders">
                        <Header/>
                        <Orders/>
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/payment">
                        <Header />
                        <Elements stripe={promise}>
                            <Payment />
                        </Elements>
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
