import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import FWLogo from "../../../src/images/Latest.png";
import Button from "antd/lib/button";
import { login,facebookLogin, googleLogin } from "./AuthAction";
import { Input } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import {
    AuthContainer,
    FlexContainer,
    MainWrapper,
} from "../../Components/UI/Layout";
import { Spacer, ValidationError } from "../../Components/UI/Elements";
import Mainheader from "../../Components/Mainheader";
import FacebookLogin from "react-facebook-login";
import { GoogleLogin } from 'react-google-login';
import FacebookIcon from '@mui/icons-material/Facebook';

// /**
//  * yup validation scheme for set Password
//  */

class LoginByMail extends Component {
    constructor(props) {
        super(props);
        this.responseFacebook = this.responseFacebook.bind(this);
        this.responseGoogle = this.responseGoogle.bind(this);
        this.state = {
            email: "",
            password: "",
            loading: false,
            render: false,
            otp: false,
            
        };
    }
    responseFacebook(response) {
        console.log(response);
        this.props.facebookLogin(response.accessToken);
      }
      responseGoogle(response) {
        console.log(response);
        this.props.googleLogin(response.tokenId, this.props.history);
      }
    submit = (values) => {
        // this.enterLoading();
        this.props.login(values, this.props.history);
    };
    InputComponent = ({ field, form: { touched, errors }, ...props }) => (
        <div>
            <div>
                <Input {...field} {...props}
               
                />
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
                    <div class="w-full flex-col h-h40 overflow-auto flex justify-center  items-center bg-quizbg  ">
                        {/* <img
                            className="big-logo"
                            src={FWLogo}
                            style={{ width: 70 }}
                            alt="Tekorero logo"

                        /> */}
                        <div className="bg-white rounded-rounded2.8 shadow-2xl border-solid flex justify-center mt-3 flex-col max-sm:w-11/12 h-h36 md:w-2/6 ">
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
                                    <Form className="form-background h-h29 rounded-full">
                                       
                                       <div class="flex justify-center items-center flex-col p-2  rounded-rounded2.8" >
                                            <h2 class="text-3xl font-medium"> Login to Quizledge</h2>
                                        <h3 class="ml-6 w-wk flex justify-start mt-4">With Facebook or Google </h3>
                                        <div class="flex justify-between flex-col">
                                        <div class="mt-4" >
                                        <FacebookLogin
                                         
          appId="1462431934502453"
          autoLoad={false}
          scope="public_profile, email, user_birthday"
          fields="name,email,picture"
          callback={this.responseFacebook}
        />
        
      </div>
      <div class="mt-3" >
                                        {/* class="w-full h-16 rounded-2xl bg-slate-100" */}
                                        <GoogleLogin
          clientId="1802272721-jkbu5gabo0qsrq7kh50n5ap7h3979tvb.apps.googleusercontent.com"
          buttonText="  Login with Google  "
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={'single_host_origin'}
         
        />
      
      </div>
      </div>
                                            <h3 class="w-wk flex justify-start mt-4 ml-4">Or a registered email</h3>
                                            <div style={{ width: "100%", padding: "15px" }}>
                                                <Field
                                                    name="email"
                                                    type="email"
                                                    placeholder="Enter  email"
                                                    style={{ width: "100%", height: "4.2rem",borderRadius:"1.25rem",backgroundColor:"#E4E2E2",padding:"10px" }}
                                                    component={this.InputComponent}
                                                />
                                            </div>
                                            <div style={{ width: "100%", padding: "15px" }}>
                                                <Field
                                                    name="password"
                                                    type="password"
                                                    placeholder="Enter password"
                                                    style={{ width: "100%", height: "4.2rem",borderRadius:"1.25rem",backgroundColor:"#E4E2E2",padding:"10px" }}
                                                    component={this.InputComponent}

                                                />
                                            </div>
                                            <div class="flex justify-around mt-4">
                                {/* <Link
                                    to="/forgotPassword"
                                    style={{ textAlign: "center", fontSize: 15, color: "#cb0009", fontWeight: "500" }}
                                >
                                    Forgot password?
                                </Link> */}
                               
                                <Link
                                    to="/signUp"
                                    style={{ textAlign: "center", fontSize: 15, color: "#0a8bd7", fontWeight: "500" }}
                                >
                                  Don’t have an account? Return to register.
                                </Link>
                            </div>
                            <div class="bg-black rounded-rounded2.8  mt-24 w-64 items-center flex justify-center" >
                                                <Button
                                                    type="primary"
                                                    htmlType="submit"
                                                    Loading={isSubmitting}
                                                    style={{  height: "5em",backgroundColor:"black",borderRadius:'3rem' }}
                                                >
                                                   <h3 class="font-medium text-white text-3xl"> LogIn</h3> 
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
            login,
            facebookLogin,
      googleLogin

        },
        dispatch
    );
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginByMail));
