import React, { lazy, Suspense, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {handleSpareProcess,handleUpgrade} from "../../Container/Auth/AuthAction"
import FWLogo1 from "../../../src/images/Button_Create-ChatGPT.png";
import FWLogo from "../../../src/images/image 21.png";
import FWLogo2 from "../../../src/images/Divider.png";
import Menu from "./Menu";
import ProcessSpareDrawer from "./ProcessSpareDrawer";
import UpgradeSpareDrawer from "./UpgradeSpareDrawer";

const LibrayEmptyPage = (props) => {


    return (
        <>
        <Menu/>
           <div className="flex flex-col justify-center items-center h-[90vh]">
          
           <img
                  className="big-logo"
                  src={FWLogo}
                  style={{ width: "24rem"}}
                  alt="Tekorero logo"

                /> 
               <div className=" text-base font-[Poppins]  font-semibold">Nothing there for now</div>
                
                
                {/* <div className=" text-xs cursor-pointer underline text-[#6245C6] font-[Poppins] font-medium"
                onClick={() => {
                    props.handleSpareProcess(true);
                  }}>Create your first quiz</div> */}
               {props.user.subscriptionName === null ? (
  <div
    className="text-xs cursor-pointer underline text-[#6245C6] font-[Poppins] font-medium"
    onClick={() => {
      props.handleUpgrade(true);
    }}
  >
    Select Subscriptions
  </div>
) : (
  <div
    className="text-xs cursor-pointer underline text-[#6245C6] font-[Poppins] font-medium"
    onClick={() => {
      props.handleSpareProcess(true);
    }}
  >
    Create your first quiz
  </div>
)}
          
           </div>
           <ProcessSpareDrawer              
                  processSpareModal={props.processSpareModal}
                    handleSpareProcess={props.handleSpareProcess}
                />
                <UpgradeSpareDrawer              
                  processUpgradeModal={props.processUpgradeModal}
                  handleUpgrade={props.handleUpgrade}
                />
        </>
    );


}
const mapStateToProps = ({ auth}) => ({
    processSpareModal: auth.processSpareModal,
    user: auth.userDetails,
    processUpgradeModal:auth.processUpgradeModal

});
const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            handleSpareProcess,
            handleUpgrade
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LibrayEmptyPage);
