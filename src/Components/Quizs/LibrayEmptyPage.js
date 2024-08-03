import React, { lazy, Suspense, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import FWLogo1 from "../../../src/images/Button_Create-ChatGPT.png";
import FWLogo from "../../../src/images/image 21.png";
import FWLogo2 from "../../../src/images/Divider.png";
import Menu from "./Menu";

const LibrayEmptyPage = (props) => {


    return (
        <>
        <Menu/>
           <div className="flex flex-col justify-center items-center h-[90vh]">
          
           <img
                  className="big-logo"
                  src={FWLogo}
                  style={{ width: "15rem"}}
                  alt="Tekorero logo"

                /> 
               <div className=" text-base ">Nothing there for now</div>
                
                <a href="/how2" >
                <div className=" text-xs underline text-[#6245C6]">Create your first quiz</div>
                </a>
           </div>
        </>
    );


}
const mapStateToProps = ({ }) => ({


});
const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {

        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LibrayEmptyPage);
