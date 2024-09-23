import React, { useEffect } from "react";
import {makeStripePayment} from "../Container/Quiz/QuizAction";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import {message } from "antd";
import Swal from 'sweetalert2';

function StripePayLoading(props) {

  function handleCallback (status, data,data1) {
    if (status === "success") {
    
        Swal.fire({
          icon: 'success',
          title: "Payment Successfull",
        });
         props.history.push(`/quizLibrary`);
          } 
          else if(status === 'status failed'){
            Swal.fire({
              icon: 'error',
              title: "Payment Failed",
            });
            // props.history.push(`/${shnm}/payment`);}
            Swal.fire({
              icon: 'error',
              title: "Payment Failed",
            });
          }
        };       


    useEffect(()=>{
      const location =window.location.href
      console.log(location);
      const statusData = location.split("&")[2];
      const finalStatus = statusData.split("=")[1];
      console.log(finalStatus);
        props.makeStripePayment({
                          stripePaymentId:props.match.params.stripePaymentId,
                          paymentId: props.match.params.paymentId,
                          paymentType: "Stripe",
                          stripePaymentInd:finalStatus=== "failed" ? false :true,
                          subscriptionId:props.match.params.subscriptionId,
                          userId:props.match.params.userId
                        },
                        handleCallback
        );
      
    },[])

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "4.68em 1.25em",
          height: "100vh",
        }}
      >
        <div
          style={{
            width: "400px",
            // height: "400px",
            padding: "0.31em 1.25em",
            /* border-radius: "50%"; */
            // boxShadow: " 0 0.81em 1.68em -0.31em rgba(50, 50, 93, 0.25)",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            // margin-bottom: 0.62em;
            // margin-top: 0.62em;
          }}
        >
                     <div>
            <div className="animateContainer">
              <div className="circleCell" />
              <div className="circleCell" />
              <div className="circleCell" />
            </div>
          </div>
          We are now processing your payment. Almost done !
        </div>
      </div>
    </>
  );
}
  const mapStateToProps = ({ auth }) => ({
    // paymentId: customer.paymentDetails.paymentId,
    // stripePaymentId:customer.paymentDetails.stripePaymentId,
    // shopName:customer.shopName,
    // confirmedPayment:customer.confirmedPayment,

  
  });
  const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            makeStripePayment
        },
        dispatch
    );
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StripePayLoading));