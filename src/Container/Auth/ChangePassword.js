import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import FWLogo from "../../../src/images/Latest.png";
import Button from "antd/lib/button";
// import { login, generateOtpByEmail, validateOtp } from "./AuthAction";
import { Input } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import {
    AuthContainer,
    FlexContainer,
    MainWrapper,
} from "../../Components/UI/Layout";
import { Spacer, ValidationError } from "../../Components/UI/Elements";
import { changePassword } from "./AuthAction"
import InputComponent from "../../Components/Forms/Formik/InputComponent";
import { createBrowserHistory } from "history";
import CreateQuiz from "../../Components/Quizs/CreateQuiz";

const history = createBrowserHistory();
// /**
//  * yup validation scheme for set Password
//  */

class ForgetPasswordForm extends Component {

    callback = () => {
        history.push("/create")
    }
    render() {
        console.log(this.props);
        return (
            <>
             
                   
                    
                     
                       
             <CreateQuiz />
                            <Formik
                                enableReinitialize
                                initialValues={{
                                    email: this.props.user.emailId || "",
                                    password: "",
                                    confirmPassword: ""
                                }}

                                onSubmit={(values) => {
                                    this.props.changePassword(
                                        {
                                            ...values
                                        },
                                        this.props.user.userId,
                                        this.callback
                                    );
                                }}
                            >
                                {({ errors, touched, isSubmitting, values }) => (
                                     <Form class=" max-sm:w-11/12   mt-8 m-auto h-96 md:mt-12 w-2/5  ">
                                         <div class="shadow-2xl bg-white rounded-rounded3 border-solid flex justify-center flex-col   max-sm:m-0 h-full  md:m-auto">
                                            <div style={{ width: "100%", padding: "15px" }}>
                                                <Field
                                                    name="password"
                                                    type="password"
                                                    placeholder="New Password"
                                                    style={{ width: "100%", height: "2.5em" }}
                                                    component={InputComponent}
                                                />
                                            </div>
                                            <div style={{ width: "100%", padding: "15px" }}>
                                                <Field
                                                    name="confirmPassword"
                                                    type="password"
                                                    placeholder="Confirm New Password"
                                                    style={{ width: "100%", height: "2.5em" }}
                                                    component={InputComponent}

                                                />
                                            </div>
                                        </div>
                                        <div class="flex justify-between mt-8">
                                            <Link
                                                to="/email"
                                                
                                            >
                                               <Button   style={{  height: "4rem",backgroundColor:"black",borderRadius:'3rem',display:"flex",alignItems:"center",width:"8rem",justifyContent:"center" }}>
                                                <h3 class="font-medium text-white text-3xl">Back</h3> </Button>
                                            </Link>
                                            <div style={{ width: "40%" }}>
                                                <Button
                                                    type="primary"
                                                    htmlType="submit"
                                                    disabled={values.password === values.confirmPassword ? false : true}
                                                    loading={this.props.changingPassword}
                                                    style={{  height: "4rem",backgroundColor:"black",borderRadius:'3rem',width:"8rem" }}
                                                >
                                                   <h3 class="font-medium text-white text-3xl"> Submit</h3>
                                                </Button>
                                            </div>

                                        </div>

                                    </Form>
                                )}
                            </Formik>

                       
                   
                  
              
            </>
        );
    }
}

const mapStateToProps = ({ auth, job }) => ({
    user: auth.userDetails,
    changingPassword: auth.changingPassword
});
const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            changePassword
        },
        dispatch
    );
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ForgetPasswordForm));