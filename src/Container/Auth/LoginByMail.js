import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Button from "antd/lib/button";
import FWLogo from "../../../src/images/BG elements 1.png";
import FWLogo1 from "../../../src/images/Headline and subhead.png";
import FWLogo2 from "../../../src/images/Divider.png";
import FWLogo3 from "../../../src/images/login.png";
import FWLogo4 from "../../../src/images/login1.png";
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
                    <div class="w-full flex-col min-h-screen overflow-auto flex   items-center bg-quizbg  ">
                        {/* <img
                            className="big-logo"
                            src={FWLogo}
                            style={{ width: 70 }}
                            alt="Tekorero logo"

                        /> */}
                       <div className="bg-[#3B16B7]  shadow-2xl border-solid flex justify-center mt-3 flex-col max-sm:w-11/12 h-[96vh] md:w-[75%] ">
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
                                    <Form className="form-background h-h29 flex justify-between items-center p-12">
                                        
                                        <div class="flex  items-center rounded-2xl flex-col p-10 border w-[63%] h-[80vh] bg-[#6245C6]" >
                                            <h2 class="text-3xl font-medium text-white flex justify-start w-wk"> Sign in now</h2>                                  
                                        {/* <div class="flex justify-between flex-col">
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
                                      
                                        <GoogleLogin
          clientId="1802272721-jkbu5gabo0qsrq7kh50n5ap7h3979tvb.apps.googleusercontent.com"
          buttonText="  Login with Google  "
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={'single_host_origin'}
         
        />
      
      </div>
      </div> */}
    
                                            <div class="w-full mt-6">
                                            <div class="text-white font-normal">Email address</div>
                                                <Field
                                                    name="email"
                                                    type="email"
                                                    placeholder="Enter  email"
                                                    style={{ width: "100%", height: "2.2rem",borderRadius:"0.5rem",backgroundColor:"#6245C6",borderColor:"white" }}
                                                    component={this.InputComponent}
                                                />
                                            </div>
                                            <div class="w-full mt-2">
                                            <div class="text-white font-normal">Password</div>
                                                <Field
                                                    name="password"
                                                    type="password"
                                                    placeholder="Enter password"
                                                    style={{ width: "100%", height: "2.2rem",borderRadius:"0.5rem",backgroundColor:"#6245C6",borderColor:"white" }}
                                                    component={this.InputComponent}

                                                />
                                            </div>
                                            <div className="mt-8">
                                            <img
                            className="big-logo"
                            src={FWLogo2}                        
                            alt="Tekorero logo"

                        /> 
                                            </div>
                                            <div className="mt-6 flex justify-between w-wk">

                                            <img
                            className="big-logo"
                            src={FWLogo4}   
                            style={{width:"10rem", height:"3rem"}}                     
                            alt="Tekorero logo"

                        /> 
                      
                         <img
                            className="big-logo"
                            src={FWLogo3}      
                            style={{width:"10rem", height:"3rem"}}                    
                            alt="Tekorero logo"

                        /> 
                                            </div>
                                         
                            <div class="flex  w-wk  items-center mt-8">
                            <div class="bg-black rounded-rounded2.8   w-36 items-center flex justify-center" >
                                                <Button
                                                    type="primary"
                                                    htmlType="submit"
                                                    Loading={isSubmitting}
                                                    style={{  height: "3.5rem",backgroundColor:"white",borderRadius:'3rem' }}
                                                >
                                                   <h3 class="font-medium text-black text-xl"> Sign in</h3> 
                                                </Button>
                                            </div>
                                            {/* <Link to ="/login">
                                                <div class="bg-black rounded-rounded2.8 mt-14 w-36 items-center flex justify-center" >
                                                <Button   style={{  height: "4rem",backgroundColor:"black",borderRadius:'3rem',display:"flex",alignItems:"center" }}>
                                                <h3 class="font-medium text-white text-3xl">Back</h3> </Button>
                                                </div>
                                                </Link> */}
   
                                {/* <Link
                                    to="/forgotPassword"
                                    style={{ textAlign: "center", fontSize: 15, color: "#cb0009", fontWeight: "500" }}
                                >
                                    Forgot password?
                                </Link> */}
                               
                               <div class="ml-2 text-white flex mt-4">
                                 Already have an ccount?
                                 <Link
                                    to="/signUp"
                                    style={{ textAlign: "center", fontSize: 15, color: "#0a8bd7", fontWeight: "500" }}
                                >
                                  <div className="underline font-medium text-white ml-1"> Signup </div> 
                                </Link>
                            </div>
                                                </div>
                                        </div>
                                        <div class="flex flex-col w-[33%]">
                                        <div>
                                        <img
                            className="big-logo"
                            src={FWLogo1}
                            style={{ width: "25rem" }}
                            alt="Tekorero logo" 
                            /> 
                                        </div>
                                        <div>
                                         <img
                            className="big-logo"
                            src={FWLogo}
                            style={{ width: "25rem" }}
                            alt="Tekorero logo" /> 
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
