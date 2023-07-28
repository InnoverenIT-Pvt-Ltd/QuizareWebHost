import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link, withRouter } from "react-router-dom";
import { Button, Select, Icon, Tag, Switch, Checkbox } from "antd";
import { Formik, Form, FastField, Field, FieldArray } from "formik";
import * as Yup from "yup";
import FWLogo from "../../../src/images/user-square.png";
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
            <div class="shadow-2xl bg-white rounded-rounded3 border-solid flex justify-center flex-col   max-sm:m-0 h-full  md:m-auto">
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
