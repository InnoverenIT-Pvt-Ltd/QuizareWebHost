import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import FWLogo from "../../../src/images/Latest.png";
import Button from "antd/lib/button";
import { login, generateOtpByEmail, validateOtp } from "./AuthAction";
import { Input } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import {
    AuthContainer,
    FlexContainer,
    MainWrapper,
} from "../../Components/UI/Layout";
import { Spacer, ValidationError } from "../../Components/UI/Elements";
import Mainheader from "../../Components/Mainheader";

// /**
//  * yup validation scheme for set Password
//  */

class LoginByMail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            loading: false,
            render: false,
            otp: false,
        };
    }
    submit = (values) => {
        // this.enterLoading();
        this.props.login(values, this.props.history);
    };
    InputComponent = ({ field, form: { touched, errors }, ...props }) => (
        <div>
            <div>
                <Input {...field} {...props} />
            </div>
            {touched[field.name] && errors[field.name] && (
                <ValidationError>{errors[field.name]}</ValidationError>
            )}
        </div>
    );
    componentDidMount() {
        this.timeoutHandle = setTimeout(() => {
            // Add your logic for the transition
        }, 5000);

        console.log("inside cDM login");
        console.log(this.props);
        const params = this.props.match.params;
        if (params.email && params.password) {
            this.setState({
                email: params.email,
                password: params.password,
            });
        }
    }
    componentWillUnmount() {
        clearTimeout(this.timeoutHandle); // This is just necessary in the case that the screen is closed before the timeout fires, otherwise it would cause a memory leak that would trigger the transition regardless, breaking the user experience.
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
                                    email: this.state.email || "",
                                    password: this.state.password || "",
                                    otp: ""
                                }}

                                onSubmit={(values) => {
                                    this.submit(values);
                                }}
                            >
                                {({ errors, touched, isSubmitting, values }) => (
                                    <Form className="form-background">
                                        <div

                                            style={{ alignItems: "center", display: "flex", flexDirection: "column" }}
                                        >
                                            <div style={{ width: "100%", padding: "15px" }}>
                                                <Field
                                                    name="email"
                                                    type="email"
                                                    placeholder="Email"
                                                    style={{ width: "100%", height: "2.5em" }}
                                                    component={this.InputComponent}
                                                />
                                            </div>
                                            <div style={{ width: "100%", padding: "15px" }}>
                                                <Field
                                                    name="password"
                                                    type="password"
                                                    placeholder="Password"
                                                    style={{ width: "100%", height: "2.5em" }}
                                                    component={this.InputComponent}

                                                />
                                            </div>
                                            <div style={{ width: "35%" }}>
                                                <Button
                                                    type="primary"
                                                    htmlType="submit"
                                                    Loading={isSubmitting}
                                                    style={{ width: "100%", height: "2.5em" }}
                                                >
                                                    Sign In
                                                </Button>
                                            </div>
                                        </div>

                                    </Form>
                                )}
                            </Formik>
                            <br />
                            &nbsp;
                            <div style={{ display: "flex", justifyContent: "space-around" }}>
                                <Link
                                    to="/forgotPassword"
                                    style={{ textAlign: "center", fontSize: 15, color: "#cb0009", fontWeight: "500" }}
                                >
                                    Forgot password?
                                </Link>
                                &nbsp;
                                <Link
                                    to="/signUp"
                                    style={{ textAlign: "center", fontSize: 15, color: "#0a8bd7", fontWeight: "500" }}
                                >
                                    Sign Up
                                </Link>
                            </div>

                        </MainWrapper>
                        <Spacer />
                    </AuthContainer>
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
            login,

        },
        dispatch
    );
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginByMail));
