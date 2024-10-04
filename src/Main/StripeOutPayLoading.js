import React, { useEffect,useState } from "react";
import {makeStripePayment} from "../Container/Quiz/QuizAction";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import {message } from "antd";
import Swal from 'sweetalert2';
import { base_url } from "../Config/Auth";
import axios from 'axios';
import {getUserDetails} from "../Container/Auth/AuthAction";

function StripePayLoading(props) {

  
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)
 
  const addPostRequest = async () => {
    setLoading(true);
    setError(null);
  
    try {
      const response = await axios.post(`${base_url}/userDetails/addSubscription`,{  
        subscriptionId:props.match.params.subscriptionId,
        userId: props.userId
      },
        {
          headers: {
            Authorization: "Bearer " + sessionStorage.getItem("token") || "",
          },
        }
      );
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  function handleCallback (status, data,data1) {
    if (status === "success") {
    
        Swal.fire({
          icon: 'success',
          title: "Payment Successfull",
        });
        addPostRequest();
        props.getUserDetails(props.userId);
        {props.noOfQuizes > 0 ?
         props.history.push(`/quizLibrary`) : props.history.push(`/emptypage`)}
        } 
          else if(status === 'status failed'){
            Swal.fire({
              icon: 'error',
              title: "Payment Failed",
            });
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

    userId: auth.userDetails.userId,
    noOfQuizes:auth.userDetails.noOfQuizes
  
  });
  const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            makeStripePayment,
            getUserDetails
        },
        dispatch
    );
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StripePayLoading));