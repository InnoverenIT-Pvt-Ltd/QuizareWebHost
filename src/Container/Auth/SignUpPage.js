import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Formik, Form, Field } from "formik";
import FWLogo from "../../../src/images/BG elements 1.png";
import FWLogo1 from "../../../src/images/Headline and subhead.png";
import FWLogo2 from "../../../src/images/Divider.png";
import FWLogo3 from "../../../src/images/login.png";
import FWLogo4 from "../../../src/images/login1.png";
import Button from "antd/lib/button";
import * as Yup from "yup";
import { CheckCircleOutlined, EyeInvisibleOutlined, EyeOutlined,
} from "@ant-design/icons";
import FacebookLogin from "react-facebook-login";
import { GoogleLogin } from 'react-google-login';
import { signUpByUser,facebookLogin, googleLogin } from "./AuthAction";
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
const emailRegex = /^[\w.%+-]+@[^\W]+(?:\.[^\W_]+)+$/;
const SignSchema = Yup.object().shape({
    name: Yup.string().required("Input needed!"),
    emailID: Yup.string()
    .matches(emailRegex, "Invalid email format")
    .required("Input needed!"),
  });
class SignUpPage extends Component {
    constructor(props) {
        super(props);
        this.responseFacebook = this.responseFacebook.bind(this);
        this.responseGoogle = this.responseGoogle.bind(this);
        this.state = {
            isChecked:false,
            type: "password",
            type1: "password",
            show1: Boolean(),
            show2: Boolean(),
            show: Boolean(),
        };
    }
    handleClick = () =>
        this.setState(({ type, prevState }) => ({
          type: type === "text" ? "password" : "text",
          show: !this.state.show,
        }));
      handleClick1 = () =>
        this.setState(({ type1, prevState }) => ({
          type1: type1 === "text" ? "password" : "text",
          show1: !this.state.show1,
        }));
        responseFacebook(response) {
            console.log(response);
            this.props.facebookLogin(response.accessToken);
          }
          responseGoogle(response) {
            console.log(response);
            this.props.googleLogin(response.tokenId, this.props.history);
          }
    handleSteppriPolInd = (newValue) => {
        this.setState({ isChecked: newValue });
      };
    render() {
        console.log(this.props);

        return (
            <>
                
                <div class="w-full bg-quizbg flex-col  overflow-auto flex   items-center max-sm:min-h-screen md:min-h-screen  ">                                        
                       
                       <div className="bg-[#3B16B7]  shadow-2xl border-solid flex md:justify-center   flex-col max-sm:w-wk max-sm:h-[79vh] max-sm:overflow-x-auto h-[100vh] md:w-wk max-sm:mt-0  ">
                            <Formik
                                enableReinitialize
                                initialValues={{
                                    emailID: "",
                                    password: "",
                                    name: "",
                                    lastName:"",
                                    confirmPassword: "",
                                    imageId: ""
                                }}
                                validationSchema={SignSchema}
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
                                    <Form className="form-background h-h29 flex  justify-between items-center p-12 max-sm:p-1 max-sm:flex-col">
                                        <div class="flex flex-col w-[33%] max-sm:w-wk">
                                        <div>
                                        <img
                            className="big-logo"
                            src={FWLogo1}
                            style={{ width: "25rem" }}
                            alt="Tekorero logo" /> 
                                        </div>
                                        <div className="max-sm:hidden">
                                         <img
                            className="big-logo"
                            src={FWLogo}
                            style={{ width: "25rem" }}
                            alt="Tekorero logo" /> 
                                        </div>
                                        </div>
                                        <div class="flex  items-center rounded-2xl flex-col p-10 border md:w-[63%] h-[84vh] bg-[#6245C6] max-sm:p-5 w-full max-sm:mt-4 " >
                                           
                                            <h2 class="text-3xl font-medium font-[Poppins] text-white flex justify-start w-wk">Sign up now</h2>                                
                                            <div className="flex justify-between w-wk mt-4">
                                            <div className="w-[47.5%]">
                                                <div class="text-white font-normal font-[Poppins]">First name</div>
                                                <Field
                                                    name="name"
                                                    type="text"                    
                                                    placeholder="First name"
                                                    style={{ width: "100%", height: "2.2rem",borderRadius:"0.5rem",backgroundColor:"#6245C6",borderColor:"white",color:"white" }}
                                                    component={InputComponent}
                                                />
                                            </div>
                                            <div className="w-[47.5%]">
                                                <div class="text-white font-normal font-[Poppins]">Last name</div>
                                                <Field
                                                    name="lastName"
                                                    type="text"                                              
                                                    placeholder="Last name"
                                                    style={{ width: "100%", height: "2.2rem",borderRadius:"0.5rem",backgroundColor:"#6245C6",borderColor:"white",color:"white" }}
                                                    component={InputComponent}
                                                />
                                            </div>
                                            </div>
                                            <div class="w-full mt-2">
                                            <div class="text-white font-normal font-[Poppins]">Email address</div>
                                                <Field
                                                    name="emailID"
                                                    type="email"
                                                    placeholder="Enter email"
                                                    style={{ width: "100%", height: "2.2rem",borderRadius:"0.5rem",backgroundColor:"#6245C6",borderColor:"white",color:"white" }}
                                                    component={InputComponent}
                                                />
                                            </div>
                                            <div className="flex justify-between w-wk mt-2">
                                            {/* <div className="w-[47.5%]">
                                            <div class="text-white font-normal font-[Poppins]">Password</div>
                                                <Field
                                                    name="password"
                                                    type="password"
                                                    placeholder="Create password"
                                                    style={{ width: "100%", height: "2.2rem",borderRadius:"0.5rem",backgroundColor:"#6245C6",borderColor:"white",color:"white" }}
                                                    component={InputComponent}

                                                />
                                            </div> */}
                                             <div className="w-[47.5%] ">
                                             <div class="text-white font-normal font-[Poppins]">Password</div>
                        <Field
                          name="password"
                          type={this.state.type}
                          placeholder="Create password"
                          component={this.InputComponent}
                          style={{ width: "100%", height: "2.2rem",borderRadius:"0.5rem",backgroundColor:"#6245C6",borderColor:"white",color:"white" }}
                        />
                     
                      {this.state.show ? (
                        <EyeOutlined className=" !text-icon  -ml-5"
                          type="eye"
                          onClick={this.handleClick}
                          
                        />
                      ) : (
                        <EyeInvisibleOutlined className=" !text-icon  -ml-5"
                          type="eye-invisible"
                          onClick={this.handleClick}
                                               
                        />
                      )}
                    </div>
                  

                    <div  className="w-[47.5%]">
                   
                    <div class="text-white font-normal font-[Poppins]">Confirm password</div>
                          <Field
                            name="confirmPassword"
                            type={this.state.type1}
                            placeholder="Confirm password"
                            component={this.InputComponent}
                            style={{ width: "100%", height: "2.2rem",borderRadius:"0.5rem",backgroundColor:"#6245C6",borderColor:"white",color:"white" }}

                          />
                        
                        {this.state.show1 ? (
                          <EyeOutlined  className=" !text-icon  -ml-5"
                            type="eye"
                            onClick={this.handleClick1}
                      
                          />
                        ) : (
                          <EyeInvisibleOutlined  className=" !text-icon  -ml-5"
                            type="eye-invisible"
                            onClick={this.handleClick1}
                            />
                        )}
                      
                      </div>
                      {/* {values.password.length &&
                        values.password === values.confirmPassword ? (
                        <CheckCircleOutlined className="!text-icon"
                          type="check-circle"
                          theme="twoTone"
                          twoToneColor="#52c41a"
                          
                        />
                      ) : null} */}
                                            {/* <div className="w-[47.5%]">
                                            <div class="text-white font-normal font-[Poppins]">Confirm password</div>
                                                <Field
                                                    name="confirmPassword"
                                                    type="password"
                                                    placeholder="Confirm password"
                                                    style={{ width: "100%", height: "2.2rem",borderRadius:"0.5rem",backgroundColor:"#6245C6",borderColor:"white",color:"white" }}
                                                    component={InputComponent}

                                                />
                                            </div> */}
                                            </div>
                                            <div class="flex items-center w-wk mt-6">
                                                
                                            <input id="default-radio-1"
                                             type="checkbox" value="" name="default-radio"
                                             checked={this.state.isChecked}
                                             onChange={(e) => this.handleSteppriPolInd(e.target.checked)}
                                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                                <h3 class="ml-2 text-white font-[Poppins]">By creating an account, I agree to our 
                                                   <Link to="/term"> Terms of use</Link>&nbsp;
                                                     and
                                                     <Link to="/privacy"> Privacy Policy </Link>
                                                      </h3>
                                                
                                                </div>
                                                <div class="flex  items-center w-wk mt-4">
                                                  <div class="bg-black rounded-rounded2.8  w-36 items-center flex justify-center" >
                                                <Button
                                                    type="primary"
                                                    htmlType="submit"
                                                    Loading={isSubmitting}
                                                    style={{  height: "3.5rem",backgroundColor:"#FFFFFF",borderRadius:'3rem' }}
                                                    disabled={!this.state.isChecked}
                                                >
                                                  <h3 class="font-medium text-black text-xl font-[Poppins]">Sign up</h3> 
                                                </Button>
                                               
                                                </div>
                                                <div className=" font-normal flex text-white ml-5 font-[Poppins]">Already have an Account?
                                                <Link to ="/email">
                                                     <div className="underline font-medium ml-1 font-[Poppins]">Log in </div> 
                                                     </Link>
                                                     </div>
                                                {/* <Link to ="/login">
                                                <div class="bg-black rounded-rounded2.8 mt-12 w-36 items-center flex justify-center" >
                                                <Button   style={{  height: "4rem",backgroundColor:"black",borderRadius:'3rem',display:"flex",alignItems:"center" }}>
                                                <h3 class="font-medium text-white text-3xl">Back</h3> </Button>
                                                </div>
                                                </Link> */}
                                                </div>
                                            <div className="mt-6">
                                            <img
                            className="big-logo"
                            src={FWLogo2}                        
                            alt="Tekorero logo"

                        /> 
                                            </div>
                                             <div className="flex mt-4 justify-between w-wk">
                                       
                                        <FacebookLogin
                                         
          appId="1462431934502453"
          autoLoad={false}
          scope="public_profile, email, user_birthday"
          fields="name,email,picture"
          callback={this.responseFacebook}
        />
        
    
    
                                      
        <GoogleLogin
          clientId="1802272721-jkbu5gabo0qsrq7kh50n5ap7h3979tvb.apps.googleusercontent.com"
          buttonText="  Login with Google  "
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={'single_host_origin'}
         
        />
      
     
      </div>
                                            
                                           

                                                {/* <Link to="/email">
                                                    <div
                                                        style={{ color: "#21a1fd", marginTop: "5px" }}
                                                    >Back To Login</div>
                                                </Link> */}
                                               
                                        </div>

                                    </Form>
                                )}
                            </Formik>

                        </div>
                       
                    </div>
                
            </>
        );
    }
}

const mapStateToProps = ({ auth, job }) => ({

});
const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            signUpByUser,
            facebookLogin,
            googleLogin
        },
        dispatch
    );
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUpPage));
