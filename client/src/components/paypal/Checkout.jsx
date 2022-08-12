import React, { useState } from 'react'
import PayPal from './PayPal'
import './Checkout.css'

const Checkout = () => {
    const [checkout, setCheckOut] = useState(false);

    return (
        <div className="App flex items-center justify-center">
            {checkout ? (
                <PayPal />
            ) : (
                <button
                onClick={() => {
                    setCheckOut(true);
                }} 
                className="bg-blue-600 rounded-md p-3 font-bold text-xl text-white my-8"
                >
                Checkout Now
                </button>
            )}
            </div>
        );
}

export default Checkout