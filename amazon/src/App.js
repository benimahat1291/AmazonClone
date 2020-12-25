import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Checkout from "./components/checkout/Checkout"
import Login from './components/login/Login';

function App() {
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
