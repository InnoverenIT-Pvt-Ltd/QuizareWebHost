import React, {useEffect} from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import { withRouter } from "react-router-dom";
import {addQuizPaymentId} from "../Container/Quiz/QuizAction";
import QuizCheckoutForm from "./QuizCheckoutForm";

// Live PK
// const stripePromise = loadStripe("pk_live_51QNWrFKXvqKEeVP5Skd6KcToZEeePZTKvsw98y7tyNZZ0ukB6JeiJXtCh8KWhAzi83FuBOyAbpSmDf2CHm3SMNGx00nxIEzoZ2");

// Test Pk   
const stripePromise = loadStripe("pk_test_51QNWrFKXvqKEeVP5x5kvZssbM99qBYlLFqPR7jHLL5q3bJop5dvMOtE7paozArjZJUcCDD9d2ZOEgxlDJ9OojPFz00DumZDakh");

function QuizStripeCheckout(props) {


const price =props.eachSub.pricePerMonth *100 ;

  useEffect(() => {
    let data = {
      currency: "EUR",
      amount:price,
    };

    props.addQuizPaymentId(data);
  }, []);

   const options={clientSecret:props.paymentQuizDetails.clientSecret}
  

    return (
      <>
      {props.paymentQuizDetails.clientSecret && 
      <Elements stripe={stripePromise} 
      options={options}
      
      >
      <QuizCheckoutForm
        handleQuizStripeModal={props.handleQuizStripeModal}
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

  export default withRouter(connect(mapStateToProps, mapDispatchToProps) (QuizStripeCheckout));