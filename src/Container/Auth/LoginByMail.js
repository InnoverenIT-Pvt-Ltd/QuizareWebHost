import React, { useEffect,useState } from "react";
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
import { login,facebookLogin, connectToGoogle } from "./AuthAction";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye"; // Material-UI Icon for visible state
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
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
import { GoogleOAuthProvider,GoogleLogin } from "@react-oauth/google";
// import { GoogleLogin } from 'react-google-login';
import FacebookIcon from '@mui/icons-material/Facebook';

// /**
//  * yup validation scheme for set Password
//  */

function LoginByMail (props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [render, setRender] = useState(false);
    const [otp, setOtp] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
      };

    useEffect(() => {
        const params = props.match.params;
        if (params.email && params.password) {
            setEmail(params.email);
            setPassword(params.password);
        }

        const timeoutHandle = setTimeout(() => {
            // Add your logic for the transition
        }, 5000);

        return () => {
            clearTimeout(timeoutHandle); // Clean up the timeout when component unmounts
        };
    }, [props.match.params]);

    const responseFacebook = (response) => {
        console.log(response);
        props.facebookLogin(response.accessToken);
    };

    const responseGoogle = (response) => {
        console.log(response);
        props.connectToGoogle(response.tokenId, props.history);
    };

    const submit = (values) => {
        props.login(values, props.history);
    };

    const InputComponent = ({ field, form: { touched, errors }, ...props }) => (
        <div>
            <div>
                <input {...field} {...props} />
            </div>
            {touched[field.name] && errors[field.name] && (
                <div>{errors[field.name]}</div>
            )}
        </div>
    );

    const handleGoogleSuccess = (credentialResponse)=>{
        console.log("Google Login Success",credentialResponse);

        props.connectToGoogle(credentialResponse?.credential, props.history);

    }
    const handleGoogleError = ()=>{
        console.log("Google Login Error")
    }
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
                       <div className="bg-[#3B16B7]  shadow-2xl border-solid flex justify-center  flex-col h-screen max-sm:w-wk  md:w-wk max-sm:justify-start ">
                            <Formik
                                enableReinitialize
                                initialValues={{
                                    email: email || "",
                                    password: password || "",
                                    otp: ""
                                }}

                                onSubmit={(values) => {
                                    submit(values);
                                }}
                            >
                                {({ errors, touched, isSubmitting, values }) => (
                                    <Form className="form-background h-h29 flex justify-between items-center p-12 max-sm:w-wk max-sm:p-1 max-sm:flex-col">
                                         <div class="flex flex-col w-wk md:hidden ">
                                        <div>
                                        <img
                            className="big-logo"
                            src={FWLogo1}
                            style={{ width: "25rem" }}
                            alt="Tekorero logo" 
                            /> 
                                        </div>
                                       
                                        </div>
                                        <div class="flex  items-center rounded-2xl flex-col p-10 border w-[55%] h-[80vh] bg-[#6245C6] max-sm:p-[1.5rem] max-sm:w-wk max-sm:mt-4" >
                                            <h2 class="text-3xl font-medium text-white flex justify-start w-wk font-[Poppins]"> Sign in now</h2>                                  
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
                                            <div class="text-white font-normal font-[Poppins]">Email Address</div>
                                                <Field
                                                    name="email"
                                                    type="email"
                                                    placeholder="Enter Email"
                                                    style={{ width: "100%", height: "2.2rem",borderRadius:"0.5rem",backgroundColor:"#6245C6",borderColor:"white" }}
                                                    component={InputComponent}
                                                />
                                            </div>
                                            <div className="w-full mt-2">
                                                <div className="text-white font-normal font-[Poppins]">Password</div>
                                                <div className="relative">
                                                    <Field
                                                    name="password"
                                                    type={showPassword ? "text" : "password"}
                                                    placeholder="Enter Password"
                                                    style={{
                                                        width: "100%",
                                                        height: "2.2rem",
                                                        borderRadius: "0.5rem",
                                                        backgroundColor: "#6245C6",
                                                        borderColor: "white",
                                                        paddingRight: "2.5rem", // Space for the toggle button
                                                    }}
                                                    component={InputComponent}
                                                    />
                                                    <button
                                                    type="button"
                                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white"
                                                    onClick={togglePasswordVisibility}
                                                    style={{ background: "none", border: "none", cursor: "pointer" }}
                                                    >
                                                    {showPassword ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
                                                    </button>
                                                </div>
                                                </div>
                                            <div className="flex justify-start mt-8 w-wk">
                                            <Link to="/newforgotpassword">
                                            <div className="text-white font-semibold font-[Poppins]">Forgot Password</div>
                                            </Link>
                                            </div>
                                            <div class="flex  w-wk  items-center mt-8">
                            <div class="bg-black rounded-rounded2.8   w-36 items-center flex justify-center" >
                                                <Button
                                                    type="primary"
                                                    htmlType="submit"
                                                    Loading={isSubmitting}
                                                    style={{  height: "3.5rem",backgroundColor:"white",borderRadius:'3rem' }}
                                                >
                                                   <h3 class="font-medium text-black text-xl font-[Poppins]"> Sign in</h3> 
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
                               
                               <div class="ml-2 text-white flex mt-4 font-[Poppins]">
                                Do you need an account? 
                                 <Link
                                    to="/signUp"
                                    style={{ textAlign: "center", fontSize: 15, color: "#0a8bd7", fontWeight: "500" }}
                                >
                                  <div className="underline font-medium text-white ml-1 font-[Poppins]"> Signup </div> 
                                </Link>
                            </div>
                                                </div>
                                            <div className="mt-8">
                                            <img
                            className="big-logo"
                            src={FWLogo2}                        
                            alt="Tekorero logo"

                        /> 
                                            </div>
                                            {/* <div className="mt-6 flex justify-between w-wk">

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
                                            </div> */}
                                              <div className="mt-6 flex justify-between w-wk">
                                        
                                        <FacebookLogin
                                         
          appId="1462431934502453"
          autoLoad={false}
          scope="public_profile, email, user_birthday"
          fields="name,email,picture"
          callback={responseFacebook}
        />
        
      
                                      
                                        {/* <GoogleLogin
          clientId="1802272721-jkbu5gabo0qsrq7kh50n5ap7h3979tvb.apps.googleusercontent.com"
          buttonText="  Login with Google  "
          onSuccess={responseGoogle}
        //   onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        /> */}
     <GoogleOAuthProvider clientId='1802272721-jkbu5gabo0qsrq7kh50n5ap7h3979tvb.apps.googleusercontent.com'>
     <GoogleLogin
    buttonText="Login with Google"
    onSuccess={handleGoogleSuccess}
    onFailure={handleGoogleError} 
/>
     </GoogleOAuthProvider>
     
      </div>
                                         
                          
                                        </div>
                                        <div class="flex flex-col w-[40%] max-sm:hidden">
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

const mapStateToProps = ({ auth, job }) => ({

});
const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            login,
            facebookLogin,
            connectToGoogle

        },
        dispatch
    );
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginByMail));
