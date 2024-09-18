import React, { lazy, Suspense, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import FWLogo1 from "../../../src/images/Button_Create-ChatGPT.png";
import FWLogo from "../../../src/images/Button_Create-Blank.png";
import FWLogo2 from "../../../src/images/Divider.png";
import FWLogo3 from "../../../src/images/linear_background_154 2.jpg";

const CreatModal = (props) => {


    return (
        <>
         <div
      className="relative" >
        <img
                  className="big-logo"
                  src={FWLogo3}
                  style={{ width: "40.5rem",borderRadius:"0.75rem"}}
                  alt="Tekorero logo"

                />
           <div className=" absolute bottom-36 right-4 text-white  md:pr-[11.5rem] 
           max-sm:left-20 max-sm:right-20 max-sm:bottom-12">
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
