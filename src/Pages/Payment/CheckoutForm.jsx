import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const CheckoutForm = ({ price }) => {
    const stripe = useStripe();
    const elements = useElements();
    const {user} =useAuth();
    const [axiosSecure] =useAxiosSecure();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret]=useState('');
  
    useEffect(()=>{
       if(price > 0){

        axiosSecure.post('/create-payment-intent', {price})
        .then(res =>{
            console.log(res.data.clientSecret)
            setClientSecret(res.data.clientSecret)
        })
       }
    },[price,axiosSecure])


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }
        console.log("card data", card)
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log("error", error)
            setCardError(error.message)
        }
        else {
            setCardError('')
            console.log("payment method", paymentMethod)
        }

        const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  email:user?.email || 'unknown',
                  name: user?.displayName || 'anonymous'
                },
              },
            },
          );

          if(confirmError){
            console.log(confirmError)
          }
        console.log("paymentIntent",paymentIntent)
    }

    return (
        <>
            <form className="w-2/3 mx-auto" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-sm mt-4 text-gray-700 hover:bg-cyan-400 bg-cyan-200" type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className="text-red-500 text-center">{cardError}</p>
            }
        </>
    );
};

export default CheckoutForm;