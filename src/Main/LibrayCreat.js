import React, { lazy, Suspense, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {handleSpareProcess,handleUpgrade} from "../Container/Auth/AuthAction"
import ProcessSpareDrawer from "../Components/Quizs/ProcessSpareDrawer";
import Menu from "../Components/Quizs/Menu";


const LibrayCreat = (props) => {


    return (
        <>
        <Menu/>
        <div className="flex h-[92vh] flex-col w-wk items-center">
      <div className="font-[Poppins] font-bold text-base mt-4 w-[80%]">Your Quizzes</div>
      <div className="border-2 border-black w-[80%] mt-4"></div>
     
      <div className="flex justify-start w-[80%]">
        <div 
  className="rounded-3xl border-2 bg-cover bg-center shadow-[0_0.25em_0.62em] shadow-[#aaa] h-[11rem] 
    text-white m-3 p-2 bg-[#3B16B7] w-[26vw] max-sm:w-wk flex justify-between flex-col scale-[0.99] hover:scale-100 ease-in duration-100 
    border-solid leading-3 hover:border hover:border-[#23A0BE] hover:shadow-[#23A0BE]" 
>

<div className="flex justify-center items-center h-hk text-2xl font-[Poppins] cursor-pointer"
 onClick={() => {
    props.handleSpareProcess(true);
  }}
>Creat Your New Project</div>
     
                   
                  

                   
                  </div>
                  </div>
                  </div>
           {/* <div className="flex flex-col justify-center items-center h-[90vh]">
          
           <img
                  className="big-logo"
                  src={FWLogo}
                  style={{ width: "24rem"}}
                  alt="Tekorero logo"

                /> 
               <div className=" text-base font-[Poppins]  font-semibold">Nothing there for now</div>
                
                
               
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
          
           </div> */}
           <ProcessSpareDrawer            
                  processSpareModal={props.processSpareModal}
                    handleSpareProcess={props.handleSpareProcess}
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
)(LibrayCreat);
// import React from 'react'

// const LibrayCreat = () => {
//   return (
//     <div>LibrayCreat</div>
//   )
// }

// export default LibrayCreat