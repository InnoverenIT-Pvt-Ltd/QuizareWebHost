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
                <FlexContainer>
                    <AuthContainer
                        style={{
                            backgroundColor: "#F5F5F5",
                            width: "50%",
                            minHeight: "100vh",
                            flexDirection: "column",
                            position: "relative",
                            alignItems: "center",
                            margin: "auto",
                        }}
                    >
                        {/* <img
                            className="big-logo"
                            src={LogoNew}
                            style={{ width: 200 }}
                            alt="Tekorero logo"
                        />
                        <br /> */}
                        <img
                            className="big-logo"
                            src={FWLogo}
                            style={{ width: 70 }}
                            alt="Tekorero logo"

                        />
                        <MainWrapper style={{ width: "50%" }}>
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
                                    <Form className="form-background">
                                        <div

                                            style={{ alignItems: "center", display: "flex", flexDirection: "column" }}
                                        >
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
                                        <div style={{ display: "flex", justifyContent: "space-around" }}>
                                            <Link
                                                to="/"
                                                style={{ textAlign: "center", fontSize: 13, color: "blue", fontWeight: "500" }}
                                            >
                                                Back To Home
                                            </Link>
                                            <div style={{ width: "40%" }}>
                                                <Button
                                                    type="primary"
                                                    htmlType="submit"
                                                    disabled={values.password === values.confirmPassword ? false : true}
                                                    loading={this.props.changingPassword}
                                                    style={{ width: "100%", height: "2.5em" }}
                                                >
                                                    Submit
                                                </Button>
                                            </div>

                                        </div>

                                    </Form>
                                )}
                            </Formik>

                        </MainWrapper>
                        <Spacer />
                    </AuthContainer>
                </FlexContainer>
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