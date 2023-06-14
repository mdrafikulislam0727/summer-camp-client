import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Pk)

const Payment = () => {
    const {id} =useParams()
    const [price, setPrice] = useState(0)
    const [classes, setClasses]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/carts/${id}`)
        .then(res => res.json())
        .then(data =>{
            setPrice(parseFloat(data.price));
            setClasses(data)
        } )
    },[id])
    return (
        <div className="w-full">
            <h2 className="uppercase text-3xl text-center font-bold my-4">Payment</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm classes={classes} price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;