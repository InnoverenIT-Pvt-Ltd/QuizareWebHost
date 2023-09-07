import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link, withRouter } from "react-router-dom";
import { Button, Select, Icon, Tag, Switch, Checkbox } from "antd";
import { Formik, Form, FastField, Field, FieldArray } from "formik";
import * as Yup from "yup";
import FWLogo from "../../../src/images/user-square.png";
import FWLogo1 from "../../../src/images/prev.png";
import FWLogo2 from "../../../src/images/forw.png";
import Menu from "./Menu";

const { Option } = Select;


 function profileView (props) {
  

    return (
      <>
        <Menu />
        <Formik>
          {({
            values,
            errors,
            touched,
            isSubmitting,
            setFieldValue,
            setFieldTouched,
          }) => (
            <Form class=" max-sm:w-11/12   mt-8 m-auto h-h31 md:mt-12 w-2/5  ">
            <div class="shadow-2xl bg-white rounded-rounded3 border-solid flex justify-center flex-col   max-sm:m-0 h-96  md:m-auto">
                <div class="flex justify-center">
                  <h3 class="font-extrabold text-2xl ">Welcome {props.user.name}</h3>
                </div>
                <div class="flex justify-center">
                    <img
                  className="big-logo"
                  src={FWLogo}
                  
                  alt="Tekorero logo"

                />
                  </div>
                
              </div>
              <div class="flex justify-around mt-4" >
            <img
                  className="big-logo"
                  src={FWLogo1}
                 
                  alt="Tekorero logo"
                  onClick={props.goToPreviousCard}

                />
            <div class="bg-black rounded-rounded2.8  mt-2 w-44 items-center flex justify-center" >
                   
                   <Button
                    // type="primary"
                    
                     style={{  height: "5em",backgroundColor:"black",borderRadius:'3rem',display:"flex",justifyContent:"center",alignItems:"center" }}
                   > <h3 class="font-medium text-white text-3xl">TBD</h3></Button>
                 </div>
                 <img
                  className="big-logo"
                  src={FWLogo2}
                 
                  alt="Tekorero logo"
                  onClick={props.goToNextCard}

                />
                </div>
            </Form>
          )}
        </Formik>
      </>
    );


  
}

  


const mapStateToProps = ({ auth }) => ({
  user: auth.userDetails
});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(profileView)
);
