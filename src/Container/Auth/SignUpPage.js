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
                        <img
                            className="big-logo"
                            src={FWLogo}
                            style={{ width: 70 }}
                            alt="Tekorero logo"

                        />
                       <div className="bg-white rounded-2xl shadow-2xl border-solid flex justify-center mt-3 flex-col max-sm:w-11/12 md:w-2/6 ">
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
                                        <div class="flex justify-center items-center flex-col" >
                                            <FlexContainer flexWrap="no-wrap">
                                                <div
                                                    style={{
                                                        width: "40%",
                                                    }}
                                                >
                                                    <Field name="imageId" component={Upload} />
                                                </div>
                                            </FlexContainer>
                                            <div style={{ width: "100%", padding: "15px" }}>
                                                <Field
                                                    name="name"
                                                    type="text"
                                                    placeholder="Full Name"
                                                    style={{ width: "100%", height: "2.5em" }}
                                                    component={InputComponent}
                                                />
                                            </div>
                                            <div style={{ width: "100%", padding: "15px" }}>
                                                <Field
                                                    name="emailID"
                                                    type="email"
                                                    placeholder="Email"
                                                    style={{ width: "100%", height: "2.5em" }}
                                                    component={InputComponent}
                                                />
                                            </div>
                                            <div style={{ width: "100%", padding: "15px" }}>
                                                <Field
                                                    name="password"
                                                    type="password"
                                                    placeholder="Password"
                                                    style={{ width: "100%", height: "2.5em" }}
                                                    component={InputComponent}

                                                />
                                            </div>
                                            <div style={{ width: "100%", padding: "15px" }}>
                                                <Field
                                                    name="confirmPassword"
                                                    type="password"
                                                    placeholder="Confirm Password"
                                                    style={{ width: "100%", height: "2.5em" }}
                                                    component={InputComponent}

                                                />
                                            </div>
                                            <div style={{ width: "86%", display: "flex", justifyContent: "space-around" }}>

                                                <Link to="/email">
                                                    <div
                                                        style={{ color: "#21a1fd", marginTop: "5px" }}
                                                    >Back To Login</div>
                                                </Link>
                                                <Button
                                                    type="primary"
                                                    htmlType="submit"
                                                    Loading={isSubmitting}
                                                    style={{ width: "34%", height: "2.5em" }}
                                                >
                                                    Sign Up
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
