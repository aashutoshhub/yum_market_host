import React,{useRef,useEffect,useState} from 'react';
import './Payment.css';
import { useSelector,useDispatch } from 'react-redux';
import MetaData from '../layout/MetaData';
import { useAlert } from 'react-alert';
import { Typography } from '@material-ui/core';
import axios from 'axios';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import EventIcon from '@material-ui/icons/Event';
import VpnKeyIcon from '@material-ui/icons/VpnKey';


import {Elements} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';


import {
    CardNumberElement,
    CardCvcElement,
    CardExpiryElement,
    useStripe,
    useElements,
  } from '@stripe/react-stripe-js';

import CheckOutSteps from './CheckOutSteps';
import CheckoutForm from './CheckOutForm';

function Payment() {



    const alert=useAlert();

    const [stripeApiKey, setStripeApiKey] = useState("");
  
    async function getStripeApiKey(){
      const {data}=await axios.get("/api/v1/stripeapikey");
      setStripeApiKey(data.stripeApiKey); 
    }
  
    console.log(stripeApiKey);
  
    //for user authentication during start of app
    useEffect(() => {

      getStripeApiKey();
  
    }, []);

   




    // const stripe = useStripe();
    // const elements = useElements();

    // const orderInfo=JSON.parse(sessionStorage.getItem("orderInfo"));
    // const payBtn=useRef(null);
    // const submitHandler=()=>{};

   

  return (
    <>
        {/* <MetaData title="Payment"/>
        <CheckOutSteps activeStep={2} />
        <div className="paymentContainer">
            <form className="paymentForm" onSubmit={(e)=>submitHandler(3)}>
                <Typography>Card Info</Typography>
                 */}
                {/* <div>
                    <CreditCardIcon/>
                    <CardNumberElement className="paymentInput"/>
                </div>
                <div>
                    <EventIcon/>
                    <CardExpiryElement className="paymentInput"/>
                </div>
                <div>
                    <VpnKeyIcon/>
                    <CardCvcElement className="paymentInput"/>
                </div> */}


            <Elements stripe={loadStripe(stripeApiKey)} >
              <CheckoutForm/>
            </Elements>

               
                {/* <input 
                 type="submit"
                 value={`Pay - ${orderInfo && orderInfo.totalPrice}`}
                 ref={payBtn}
                 className="paymentFormBtn"
                 /> */}

            {/* </form>
        </div> */}
    </>
  )
}

export default Payment
