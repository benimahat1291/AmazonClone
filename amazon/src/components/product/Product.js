import React from 'react';
import "./Product.css";
import StarRateIcon from '@material-ui/icons/StarRate';
import { useStateValue } from "../../utils/StateProvider"


function Product({ id, price, title, rating, image }) {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        //dispacth the item into the data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        })
    }


    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                        <StarRateIcon key={Math.random()}/>
                    ))}

                </div>
            </div>

            <img src={image} alt="the lean startup" />

            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
