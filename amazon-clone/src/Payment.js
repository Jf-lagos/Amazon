import React from 'react'
import "./Payment.css"
import { useStateValue } from "./StateProvider";
import { Link } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';

const Payment = () => {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout (<Link to="/checkout">{basket?.length} items </Link>)
                </h1>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>144 une adresse</p>
                        <p>Barcelone 08005</p>

                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Reviews address and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item => (
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

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment methods</h3>
                    </div>
                    <div className="payment__details">
                        <h3>stripe</h3>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Payment
