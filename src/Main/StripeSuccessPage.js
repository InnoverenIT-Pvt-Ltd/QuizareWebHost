import React,{useState} from "react";
import { CheckCircleFilled } from "@ant-design/icons";
import { Link,withRouter } from "react-router-dom";
import { FlexContainer } from "../Components/UI/Layout";
import { Button } from "antd";
import "./OrderTemplate.scss";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import {base_url2} from "../Config/Auth";

function StripeSuccessPage(props) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


// if(props.addingCODinventory){
//  return <h2>Loading...</h2>
// }


const handlefINISHPayout= async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(`${base_url2}/leads/add/subscription`,{},
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

  return (
<>
{/* {props.codInventryorDr.lengh === 0 ? <h2>Payment Error</h2>: */}
<div className="oderContainer">
    <div className="box center">
      <CheckCircleFilled style={{ fontSize: "6.6875em", color: "#3066BE" }} />
      <div class = "text-lg">
         Payment made successfully  &nbsp;
        {props.confirmedPayment.paymentId || ""}
      </div>
      <h3>
      You will receive a confirmation message shortly. For More Details check
          order status on your whatsapp
      </h3>
      <FlexContainer justifyContent="center" style={{ width: "100%" }}>
        <div >
        
          {/* <Button
          type="primary" 
        onClick={handlefINISHPayout}
          >
            Complete
          </Button> */}
          
        </div>
    
        
      
      
      
      </FlexContainer>
    </div>
  </div>
{/* } */}
</>

   
  );
}
const mapStateToProps = ({ customer, auth }) => ({
  confirmedPayment: customer.confirmedPayment,
  userId: auth.userDetails.userId,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
      {
      
      },
      dispatch
  );
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StripeSuccessPage));
