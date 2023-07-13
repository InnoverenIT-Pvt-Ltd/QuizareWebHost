
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link, withRouter } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { Spacer } from "../../Components/UI/Elements";
import { Input } from "reactstrap";
import { ValidationError, Title, SubTitle } from "../../Components/UI/Elements";
import { FlexContainer } from "../../Components/UI/Layout";
import Button from "antd/lib/button";
import styled from "styled-components";
import {
    sendOtpForValidation,
    updatePassword,
    validateOtp
} from "./AuthAction";
class ForgotPassword extends Component {
    state = {
        type: "password",
        type1: "password",
        show1: Boolean(),
        show2: Boolean(),
        show: Boolean(),
    };

    InputComponent = ({ field, form: { touched, errors }, ...props }) => (
        <div>
            <Input {...field} {...props} />
            {touched[field.name] && errors[field.name] && (
                <ValidationError>{errors[field.name]}</ValidationError>
            )}
        </div>
    );
    componentDidMount() {
        console.log("inside cDM login");
    }
    callback = () => {
        this.props.history.push("/email");
    };

    render() {
        return (
            <>
                <div className="main" style={{ display: "flex", justifyContent: "space-evenly" }}>
                    <div className="forgot_password">
                        <FlexContainer>
                            <div class="w-full flex-col min-h-screen overflow-auto flex justify-center items-center  ">
                                <FormWrapper >
                                    <Title style={{ color: "#08cb08" }}>Forgot Password</Title>
                                    <SubTitle>Link will be sent to your registered email id</SubTitle>
                                    <Spacer />
                                    <Formik
                                        initialValues={{
                                            emailId: "",
                                            otp: "",
                                            password: "",
                                            confirmPassword: "",
                                        }}
                                        // validationSchema={ChangePasswordSchema}
                                        onSubmit={(values) => {
                                            console.log(values);
                                            this.props.updatePassword(
                                                {
                                                    ...values,
                                                    email: values.emailId
                                                },
                                                this.callback
                                            );
                                        }}
                                    >
                                        {({ errors, touched, values, isSubmitting }) => (
                                            <Form class="w-wk ">
                                                <div >
                                                    <div style={{ width: "100%", display: "flex" }}>
                                                        <div style={{ width: "70%" }}>
                                                            <Field
                                                                placeholder="Enter your email"
                                                                name="emailId"
                                                                isColumn
                                                                width={"100%"}
                                                                style={{ height: "40px" }}
                                                                component={this.InputComponent}
                                                                inlineLabel
                                                            />
                                                        </div>
                                                        <div style={{ width: "30%", }}>
                                                            <Button
                                                                type="primary"
                                                                // htmlType="submit"
                                                                disabled={!values.emailId.length}
                                                                // loading={isSubmitting}
                                                                onClick={() => {
                                                                    this.props.sendOtpForValidation({
                                                                        emailId: values.emailId,
                                                                    });
                                                                    // this.handleOtpField()
                                                                }}
                                                                style={{
                                                                    width: "100%",

                                                                }}
                                                            // disabled={!this.state.checked}
                                                            >
                                                                Send OTP
                                                            </Button>
                                                        </div>
                                                    </div>

                                                    <div style={{ width: "100%", display: "flex", marginTop: "6px" }}>
                                                        <div style={{ width: "70%" }}>
                                                            <Field
                                                                // disabled={!this.state.otp}
                                                                name="otp"
                                                                placeholder="Validate OTP"
                                                                isColumn
                                                                width={"100%"}
                                                                component={this.InputComponent}
                                                                style={{ height: "40px" }}
                                                            />
                                                        </div>
                                                        <div style={{ width: "30%" }}>
                                                            <Button
                                                                type="primary"
                                                                // htmlType="submit"
                                                                disabled={!values.otp.length}
                                                                onClick={() => {
                                                                    this.props.validateOtp({
                                                                        emailId: values.emailId,
                                                                        otp: values.otp,
                                                                    });

                                                                }}
                                                                style={{
                                                                    width: "100%",
                                                                }}

                                                            // disabled={!this.state.checked}
                                                            >
                                                                Validate
                                                            </Button>
                                                        </div>
                                                    </div>
                                                    <div style={{ width: "100%", marginTop: "2%" }}>
                                                        <Field
                                                            name="password"
                                                            placeholder=" New password"
                                                            component={this.InputComponent}
                                                            width={"100%"}
                                                            style={{ border: "1px solid lightblue", height: "34px" }}
                                                        />                                                                                                         </div>

                                                    <div style={{ width: "100%", display: "flex", marginTop: "6px" }}>

                                                        <div style={{ width: "100%" }}>
                                                            <Field
                                                                name="confirmPassword"
                                                                width={"100%"}
                                                                placeholder="Confirm new password"
                                                                component={this.InputComponent}
                                                                style={{ border: "1px solid lightblue", height: "34px" }}
                                                            />
                                                        </div>

                                                    </div>

                                                </div>
                                                <Spacer style={{ marginBottom: "1em" }} />
                                                <div>
                                                    <span
                                                        style={{
                                                            display: "flex",
                                                            justifyContent: "space-between",
                                                        }}
                                                    >

                                                        <span
                                                            style={{
                                                                display: "flex",
                                                                justifyContent: "flex-start",
                                                            }}
                                                        >
                                                            {" "}
                                                            <Link
                                                                to="/email"
                                                                style={{ textAlign: "center", fontSize: 14, color: "blue" }}
                                                            >
                                                                Back to login
                                                            </Link>


                                                        </span>

                                                        <Button
                                                            type="primary"
                                                            htmlType="submit"
                                                            disabled={(values.password !== values.confirmPassword) || (!values.password.length && !values.confirmPassword.length)}
                                                            // Loading={this.props.changingPassword}
                                                            style={{ width: "10em", height: "2.4em" }}
                                                        // onClick={() => this.props.login('prabeen.strange@gmail.com', 'chicharito14')}
                                                        >
                                                            Save Password
                                                        </Button>
                                                    </span>
                                                </div>
                                                {/* <Spacer style={{ marginBottom: "1em" }} /> */}

                                            </Form>
                                        )}
                                    </Formik>
                                    {/* <Spacer style={{ marginBottom: -40 }} />
              <Link to='/login' style={{ textAlign: 'center', fontSize: 16, marginLeft: "0.625em" }}>Back to login</Link> */}

                                </FormWrapper>
                                <div className="footer1"
                                    style={{
                                        textAlign: 'center',
                                        fontSize: '12x', fontFamily: 'SFS, Arial, sans-serif', position: 'absolute', bottom: 0
                                    }}>
                                    © {new Date().getFullYear()},  {` `} teKorero.com, All rights reserved.
                                </div>
                            </div>

                        </FlexContainer>
                    </div>
                    {/* <div className="Image">
        <RandomImageScreen />
        </div> */}
                </div>


            </>
        );
    }
}
const mapStateToProps = ({ auth }) => ({
    changingPassword: auth.changingPassword,
    changingPasswordError: auth.changingPasswordError,
    email: auth.userDetails.email,
    user: auth.userDetails,
    userType: auth.userDetails.userType,
});
const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            updatePassword,
            sendOtpForValidation,
            validateOtp
        },
        dispatch
    );
export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(ForgotPassword)
);

const AuthContainer = styled.div`
  // width: 50%;
  width:${(props) => props.width || "50%"}
  min-height: 100vh;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  @media only screen and (max-width: 37.5em) { 
   width:100%
  }
`;
const FormWrapper = styled.div`    
padding: 1rem;
width: ${(props) => props.width}
     border-radius: 0.3rem;
    box-shadow: 0em 0.25em 0.625em -0.125em #444;
    border: 0.0625em solid #ddd;
    background: #fff;
    @media only screen and (max-width: 37.5em) {
       width:100%
         }
 @media only screen 
and (min-device-width : 48em) 
and (max-device-width : 64em)
and (-webkit-min-device-pixel-ratio: 2){
}`;
