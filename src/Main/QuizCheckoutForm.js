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
const history = createBrowserHistory();

class QuizCheckoutForm extends React.Component {
 
  handleSubmit = async (event) => {
    event.preventDefault();
    const { stripe, elements } = this.props;

    if (!stripe || !elements) {

      return;
    }
    const result = await stripe.confirmPayment({
      elements, 
      
      confirmParams: {
        // return_url: `https://shoppr.pro/${str}/loading/${this.props.stripePaymentId}/${this.props.paymentId}` //Production Url 
        //  return_url: `https://hrapp.tekorero.com/DRB/invenloading/${this.props.stripePaymentId}/${this.props.paymentId}` //Korero
        return_url: `http://localhost:3000/DRB/invenloading/${this.props.stripePaymentId}/${this.props.paymentId}` // localhostD
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
// console.log(this.props.stripePaymentId)
    return (
      <form onSubmit={this.handleSubmit}>
<PaymentElement/>
        <button
          type="submit"
          disabled={!stripe}
          className="StripePayButton"
        >
          Pay 
           {`100`} {"EUR"}
          {/* {`${this.props.finalgrandTotalValue} ${this.props.currency}`} {this.props.invencartItem.cartSummary && this.props.invencartItem.cartSummary.grandTotal}*/}
        </button>
      </form>
    );
  }
}

function QuizsCheckoutForm(props) {

  return (
    <ElementsConsumer>
      {({ stripe, elements }) => (
        <QuizCheckoutForm
          stripe={stripe}
          elements={elements}
          paymentId={props.paymentId}
          stripePaymentId={props.stripePaymentId}
          addiNVEStripeModal={props.addiNVEStripeModal}
          handleQuizStripeModal={props.handleQuizStripeModal}
          finalgrandTotalValue={"100"}
          confirmedQuizPayment={props.confirmedQuizPayment}
          currency={"EUR"}
         
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
  connect(mapStateToProps, mapDispatchToProps)(QuizsCheckoutForm)
);
