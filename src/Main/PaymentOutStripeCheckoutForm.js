import React, { useEffect, Suspense, useState } from "react";
import { ElementsConsumer, stripe, PaymentElement } from "@stripe/react-stripe-js";
import { message } from "antd";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
    handleQuizStripeModal,
    makeStripePayment
} from "../Container/Quiz/QuizAction";
import { createBrowserHistory } from "history";
import "./MainApp.scss";

const history = createBrowserHistory();

class PaymentOutStripeCheckoutForm extends React.Component {
 
  handleSubmit = async (event) => {
    event.preventDefault();
    const { stripe, elements } = this.props;

    if (!stripe || !elements) {

      return;
    }
    const result = await stripe.confirmPayment({
      elements, 
      
      confirmParams: {
         return_url: `http://host.quizledge.co.s3-website.eu-west-3.amazonaws.com/drb/payloading/${this.props.stripePaymentId}/${this.props.paymentId}/${this.props.eachSub.subscriptionId}/${this.props.eachSub.userId}` //Quiweb
        // return_url: `http://localhost:3000/drb/payloading/${this.props.stripePaymentId}/${this.props.paymentId}/${this.props.eachSub.subscriptionId}/${this.props.eachSub.userId}` // localhostD
      },
    });

    if (result.error) {
      message.error(result.error.message)
      this.props.handleQuizStripeModal(false)
      console.log(result.error.message);
    } else {
   
    }
  }; 

  render() {
    const { stripe } = this.props;

    console.log(this.props.eachSub) 

    return (
      <form onSubmit={this.handleSubmit}>
<PaymentElement/>
        <button
          type="submit"
          disabled={!stripe}
          className="StripePayButton"
        >
          Pay 
          {`${this.props.eachSub.pricePerMonth}  ${"EUR"}`}
          {/* {`${this.props.finalgrandTotalValue} ${this.props.currency}`} {this.props.invencartItem.cartSummary && this.props.invencartItem.cartSummary.grandTotal}*/}
        </button>
      </form>
    );
  }
}

function InjectedCheckoutForm (props) {

  return (
    <ElementsConsumer>
      {({ stripe, elements }) => (
        <PaymentOutStripeCheckoutForm
          stripe={stripe}
          elements={elements}
          paymentId={props.paymentId}
          stripePaymentId={props.stripePaymentId}
          addiNVEStripeModal={props.addiNVEStripeModal}
          handleQuizStripeModal={props.handleQuizStripeModal}
          finalgrandTotalValue={"100"}
          confirmedQuizPayment={props.confirmedQuizPayment}
          currency={"EUR"}
          eachSub={props.eachSub}
         
        />
      )}
    </ElementsConsumer>
  );
}
const mapStateToProps = ({  quiz }) => ({
  confirmedQuizPayment: quiz.confirmedQuizPayment,
  paymentId: quiz.paymentQuizDetails.paymentId,
  stripePaymentId: quiz.paymentQuizDetails.stripePaymentId,
  addiNVEStripeModal: quiz.addiNVEStripeModal,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
       makeStripePayment,
      handleQuizStripeModal,
    },
    dispatch
  );
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(InjectedCheckoutForm)
);
