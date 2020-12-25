import React from 'react'
import "./Checkout.css"
import Subtotal from "../subtotal/Subtotal"
import { useStateValue } from '../../utils/StateProvider';
import CheckoutProduct from '../checkoutProduct/CheckoutProduct';

function Checkout() {

    const [{basket, user}, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__add" src="https://images-na.ssl-images-amazon.com/images/G/01/credit/img16/CCMP/newstorefront/YACC-desktop-nonprime-banner2.jpg" alt=""/>

                <div>
                    <h3>hello, {user?.email}</h3>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                    {basket.map(item=> (
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        />
                    ))}
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal/>
                
            </div>
            
        </div>
    )
}

export default Checkout
