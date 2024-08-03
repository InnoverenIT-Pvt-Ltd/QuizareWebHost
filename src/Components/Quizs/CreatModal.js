import React, { lazy, Suspense, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import FWLogo1 from "../../../src/images/Button_Create-ChatGPT.png";
import FWLogo from "../../../src/images/Button_Create-Blank.png";
import FWLogo2 from "../../../src/images/Divider.png";

const CreatModal = (props) => {


    return (
        <>
           <div className="flex flex-col justify-center items-center h-60">
           <a href="/how2" >
           <img
                  className="big-logo"
                  src={FWLogo}
                  style={{ width: "15rem"}}
                  alt="Tekorero logo"

                /> 
                </a>
                <img
                  className="big-logo"
                  src={FWLogo2}
                  style={{ width: "15rem",marginTop:"0.5rem",marginBottom:"0.5rem"}}
                  alt="Tekorero logo"

                /> 
                <a href="/how2" >
                <img
                  className="big-logo"
                  src={FWLogo1}
                  style={{ width: "15rem"}}
                  alt="Tekorero logo"

                /> 
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
)(CreatModal);
