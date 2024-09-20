import React, {useState,useEffect} from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe,Stripe} from '@stripe/stripe-js';
import { withRouter } from "react-router-dom";
import {addQuizPaymentId} from "../Container/Quiz/QuizAction";
import { BundleLoader } from "../Components/Placeholder";
import PaymentOutStripeCheckoutForm from "./PaymentOutStripeCheckoutForm";

//production pk
const stripePromise = loadStripe("pk_test_51Pg4N4F9t5MfjsIZrPxRRnon7ENfinC1pcSx6aRw0prlk3qODgIAgXcRXel0NaoI38idFEUDI21QcrL0eNh8Sndf00t7yiYS6E");
                                  

function PaymentOutStripeCheckout(props) {


const price =props.eachSub.pricePerMonth *100 ;

console.log("multi",price)

  useEffect(() => {
    let data = {
     // cartId: props.invencartItem.orderPhoneId ? props.invencartItem.orderPhoneId :null,
      currency: "EUR",
      amount:price,
      // amount:"100",
    };

    props.addQuizPaymentId(data);
  }, []);

   const options={clientSecret:props.paymentQuizDetails.clientSecret}
  
  console.log("clt",options);

    return (
      <>
      {props.paymentQuizDetails.clientSecret && 
      <Elements stripe={stripePromise} 
      options={options}
      
      >
      <PaymentOutStripeCheckoutForm
      closeStripeModal={props.closeStripeModal}
      stripeModalVisible={props.stripeModalVisible}
        eachSub={props.eachSub}
      />
    </Elements>
 } 
    </>
    );
  
}
const mapStateToProps = ({ quiz, auth }) => ({
    addingQuizPaymentId: quiz.addingQuizPaymentId,
  paymentQuizDetails:quiz.paymentQuizDetails
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
      {
        addQuizPaymentId
      },
      dispatch
  );

  export default withRouter(connect(mapStateToProps, mapDispatchToProps) (PaymentOutStripeCheckout));