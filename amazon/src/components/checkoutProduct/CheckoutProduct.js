import React from 'react'
import "./CheckoutProduct.css"
import StarRateIcon from '@material-ui/icons/StarRate';
import { useStateValue } from '../../utils/StateProvider';

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {

    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        //remove item from basket
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id: id,
        })
    }


    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} />

            <div className="checkoutProduct__info">
                <p className="chcekoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div  className="checkoutProduct__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p key={Math.random()}><StarRateIcon /></p>
                    ))}
                </div>
                {!hideButton && (
                    <button onClick={removeFromBasket}>Remove From Basket</button>
                )}
            </div>
        </div>
    )
}

export default CheckoutProduct
