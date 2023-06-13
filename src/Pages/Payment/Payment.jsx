import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import useClassCard from "../../hooks/UseClassesCard";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Pk)

const Payment = () => {
    const [cart] =useClassCard();
    console.log(cart)
    const total =cart.find(data => data.price > 0)
    return (
        <div className="w-full">
            <h2 className="uppercase text-3xl text-center font-bold my-4">Payment</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm price={total}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;