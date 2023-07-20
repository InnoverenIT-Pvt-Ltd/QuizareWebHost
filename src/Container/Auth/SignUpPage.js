import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Formik, Form, Field } from "formik";
import FWLogo from "../../../src/images/Latest.png";
import Button from "antd/lib/button";
import { signUpByUser } from "./AuthAction";
import Upload from "../../Components/Forms/Formik/Upload";
import { Link, withRouter } from "react-router-dom";
import { message } from "antd"
import {
    AuthContainer,
    FlexContainer,
    MainWrapper,
} from "../../Components/UI/Layout";
import { Spacer } from "../../Components/UI/Elements";
import { InputComponent } from "../../Components/Forms/Formik/InputComponent";
import { Radio } from "@mui/material";

// /**
//  * yup validation scheme for set Password
//  */

class SignUpPage extends Component {
    render() {
        console.log(this.props);

        return (
            <>
                <FlexContainer>
                <div class="w-full flex-col  overflow-auto flex justify-center items-center max-sm:h-h36 md:min-h-screen  ">                   
                        {/* <img
                            className="big-logo"
                            src={FWLogo}
                            style={{ width: 70 }}
                            alt="Tekorero logo"

                        /> */}
                       
                       <div className="bg-white rounded-rounded2.8 shadow-2xl border-solid flex justify-center mt-3 flex-col max-sm:w-11/12 md:w-2/6 ">
                            <Formik
                                enableReinitialize
                                initialValues={{
                                    emailID: "",
                                    password: "",
                                    name: "",
                                    confirmPassword: "",
                                    imageId: ""
                                }}

                                onSubmit={(values, { resetForm }) => {
                                    console.log(values)
                                    if (values.password === values.confirmPassword) {
                                        this.props.signUpByUser({
                                            ...values,
                                        },
                                            this.props.history
                                        )
                                    } else {
                                        message.success("Please match your password")
                                    }

                                }}
                            >
                                {({
                                    values,
                                    errors,
                                    touched,
                                    isSubmitting,
                                    setFieldValue,
                                    setFieldTouched,
                                }) => (
                                    <Form className="form-background h-h29">
                                        <div class="flex justify-center items-center flex-col p-2" >
                                           
                                            <h2 class="text-3xl font-medium">Signup for Quizledge</h2>
                                            <h3 class="flex justify-start w-wk mt-4 ml-1">Create a profile to start creating</h3>
                                            <div style={{ width: "100%",marginTop:"0.5rem" }}>
                                                <Field
                                                    name="name"
                                                    type="text"
                                                    placeholder="Enter username"
                                                    style={{ width: "100%", height: "4.2rem",borderRadius:"1.25rem",backgroundColor:"#E4E2E2" }}
                                                    component={InputComponent}
                                                />
                                            </div>
                                            <div style={{ width: "100%",marginTop:"0.5rem" }}>
                                                <Field
                                                    name="emailID"
                                                    type="email"
                                                    placeholder="Enter  email"
                                                    style={{ width: "100%", height: "4.2rem",borderRadius:"1.25rem",backgroundColor:"#E4E2E2" }}
                                                    component={InputComponent}
                                                />
                                            </div>
                                            <div style={{ width: "100%",marginTop:"0.5rem" }}>
                                                <Field
                                                    name="password"
                                                    type="password"
                                                    placeholder="Create password"
                                                    style={{ width: "100%", height: "4.2rem",borderRadius:"1.25rem",backgroundColor:"#E4E2E2" }}
                                                    component={InputComponent}

                                                />
                                            </div>
                                            <div style={{ width: "100%",marginTop:"0.5rem" }}>
                                                <Field
                                                    name="confirmPassword"
                                                    type="password"
                                                    placeholder="Confirm password"
                                                    style={{ width: "100%", height: "4.2rem",borderRadius:"1.25rem",backgroundColor:"#E4E2E2" }}
                                                    component={InputComponent}

                                                />
                                            </div>
                                            <div class="flex items-center w-80">
                                                
                                            <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                                <h3 class="ml-2">Accept teams and conditions</h3></div>
                                           

                                                {/* <Link to="/email">
                                                    <div
                                                        style={{ color: "#21a1fd", marginTop: "5px" }}
                                                    >Back To Login</div>
                                                </Link> */}
                                                  <div class="bg-black rounded-rounded2.8  mt-8 w-64 items-center flex justify-center" >
                                                <Button
                                                    type="primary"
                                                    htmlType="submit"
                                                    Loading={isSubmitting}
                                                    style={{  height: "5em",backgroundColor:"black",borderRadius:'3rem' }}
                                                >
                                                  <h3 class="font-medium text-white text-3xl">Register</h3> 
                                                </Button>
                                                </div>
                                         
                                        </div>

                                    </Form>
                                )}
                            </Formik>

                        </div>
                        <Spacer />
                    </div>
                </FlexContainer>
            </>
        );
    }
}

const mapStateToProps = ({ auth, job }) => ({

});
const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            signUpByUser
        },
        dispatch
    );
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUpPage));
