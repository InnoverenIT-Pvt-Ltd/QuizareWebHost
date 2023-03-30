// // import React, { Component } from "react";
// // import { connect } from "react-redux";
// // import { bindActionCreators } from "redux";

// // import { Formik, Form, Field } from "formik";
// // import * as Yup from "yup";

// // import Button from "antd/lib/button";
// // import { login, generateOtpByEmail, validateOtp } from "./AuthAction";
// // //import FWLogo from "../../Assets/Images/Axis_logo_Big.png";
// // // import FWLogo from "../../Assets/Images/Logo_new.png";
// // import {
// //   ArrowRightOutlined, CheckCircleOutlined, EyeInvisibleOutlined, EyeOutlined,
// // } from "@ant-design/icons";

// //   // import FWLogo from "../../Assets/Images/Axis_logo_Big.png";
// //   // import FWLogo from "../../Assets/Images/Logo_new.png";
// // // import LakshLogo from "../../Assets/Images/reliantLogo.jpg";

// // //import LakshLogo from "../../Assets/Images/reliantLogo.jpg";


// // //import RandomImageScreen from "./RandomImageScreen";
// // import { Input } from "reactstrap";
// // import {
// //   useLocation,
// //   useNavigate,
// //   useParams,
// // } from "react-router-dom";
// // import { Link  } from "react-router-dom";
// // import { FlexContainer, MainWrapper } from "../../Components/UI/Layout";
// // import { Spacer, ValidationError } from "../../Components/UI/Elements";
// // import { InputComponent } from "../../Components/Forms/Formik/InputComponent";


// // // /**
// // //  * yup validation scheme for set Password
// // //  */
// // // const LoginSchema = Yup.object().shape({
// // //   emailId: Yup.string()
// // //     .email("Enter a valid email")
// // //     .required("Input needed !"),
// // //   password: Yup.string().required("Enter password"),
// // // });
// // class Login extends Component {
  
  
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       emailId: "",
// //       otp:"",
// //       password: "",
// //       Loading: false,
// //       render: false,
// //       type: "otp",
// //       show: Boolean(),
// //     };
// //   }
 
// //   handleCallBack() {
// //     let navigate = this.props;
// //     // console.log(data, orderId)
// //     navigate(`/profile`)
// //   }
// //   handleClick = () =>
// //     this.setState(({ type, prevState }) => ({
// //       type: type === "text" ? "otp" : "text",
// //       show: !this.state.show,
// //     }));
// //   // enterLoading = () => {
// //   //   this.setState({ Loading: true });
// //   //   setTimeout(() => this.setState({ Loading: false }), 3500);
// //   // };

// //   submit = (values) => {
// //     // this.enterLoading();
// //     this.props.login(values, this.handleCallBack);
// //   };
// //   InputComponent = ({ field, form: { touched, errors }, ...props }) => (
// //     <div>
// //       <div>
// //         <Input {...field} {...props} />
// //       </div>
// //       {touched[field.name] && errors[field.name] && (
// //         <ValidationError>{errors[field.name]}</ValidationError>
// //       )}
// //     </div>
// //   );
// //   componentDidMount() {
// //     this.timeoutHandle = setTimeout(() => {
// //       // Add your logic for the transition
// //     }, 5000);

// //     console.log("inside cDM login");
// //     console.log("history",this.props.navigate)
// //     console.log(this.props);
// //     //const params = this.props.match.params;
// //     // if (params.emailId && params.password) {
// //     //   this.setState({
// //     //     emailId: params.emailId,
// //     //     password: params.password,
// //     //   });
// //     // }
// //   }
// //   componentWillUnmount() {
// //     clearTimeout(this.timeoutHandle); // This is just necessary in the case that the screen is closed before the timeout fires, otherwise it would cause a memory leak that would trigger the transition regardless, breaking the user experience.
// //   }
// //   render() {
// //     console.log(this.props);
// //     return (
// //       <>
// //         <FlexContainer>
// //           <FlexContainer
// //             style={{
// //               backgroundColor: "#F5F5F5",
// //               flexDirection: "column",
// //               position: "relative",
// //               alignItems:"center",
// //               margin: "auto",
// //             }}
// //           >
// //             {/* <img
// //               className="big-logo"
// //               src={FWLogo}
// //               style={{ width: 200 }}
// //               alt="Tekorero logo"
// //             /> */}
// //             <br />
// //             <MainWrapper width="30%">
// //               <Formik
// //                 enableReinitialize
// //                 initialValues={{
// //                   emailId: this.state.emailId || "",
// //                   otp: this.state.otp || "",
// //                 }}
// //                // validationSchema={LoginSchema}
// //                 onSubmit={(values) => {
// //                   // same shape as initial values
// //                   this.submit(values,this.handleCallBack);
                  
// //                 }}
// //               >
// //                 {({ errors, touched, isSubmitting, values }) => (
// //                   <Form className="form-background">
// //                     <Field
// //                       className="gvbmIs"
// //                       name="emailId"
// //                       type="email"
// //                       placeholder="Email"
// //                       component={this.InputComponent}
// //                     />
// //                     <Spacer />
// //                     <FlexContainer justifyContent="space-between" style={{alignItems:"center"}} >
// //                     {/* <div className="login_password || "",">
// //                       <div style={{width:"100%"}}>
// //                         <Field
// //                           name="password"
// //                           placeholder="Password"
// //                           type={this.state.type}
// //                           component={this.InputComponent}
// //                         />
// //                       </div>
// //                       {this.state.show ? (
// //                         <EyeOutlined
// //                           type="eye"
// //                           onClick={this.handleClick}
// //                           style={{ alignSelf:"center" }}
// //                           size="24"
// //                         />
// //                       ) : (
// //                         <EyeInvisibleOutlined
// //                           type="eye-invisible"
// //                           onClick={this.handleClick}
// //                           size="24"
// //                           style={{ alignSelf:"center" }}
// //                         />
// //                       )}
// //                       </div> */}
// //                       <div >
// //                         <Button
// //                           type="primary"
// //                           onClick={() => {
// //                             this.props.generateOtpByEmail({
// //                               emailId: values.emailId
// //                             },
// //                             this.handleCallBack
// //                             )
// //                           }}

// //                         >
// //                         Send OTP
// //                         </Button>
// //                       </div>

// //                     </FlexContainer>
// //                     <Spacer />
// //                     <FlexContainer justifyContent="space-around" style={{alignItems:"center"}}>                      
// //                       <div >
// //                         <Field
// //                           name="otp"
// //                           placeholder="Enter OTP"
// //                           component={InputComponent}
// //                         />
// //                       </div>
// //                     {values.otp  && (
// //                       <div >
// //                         <Button
// //                           type="primary"
// //                       //disabled={!values.otp}
// //                           onClick={() => {
// //                             this.props.validateOtp({
// //                               otp: values.otp,
// //                               emailId: values.emailId
// //                             },
// //                             this.handleCallBack
// //                             )
// //                           }}
// //                         >
// //                           Validate
// //                         </Button>                      
// //                       </div>
// //                       )} 
// //                     </FlexContainer>
// //                     <Spacer />
// //                     <Button
// //                       type="primary"
// //                       htmlType="submit"
// //                       Loading={isSubmitting}
// //                       style={{ width: "100%", height: "2.5em" }}
// //                     >
// //                       Sign In
// //                     </Button>
// //                   </Form>
// //                 )}
// //               </Formik>
           
// //               {/* <Link
// //                 to="/forgotPassword"
// //                 style={{ textAlign: "center", fontSize: 14, color:"black" }}
// //               >
// //                Forgot password? 
// //               </Link> */}
// //             </MainWrapper>
// //             <Spacer />

// //             <div
// //               className="footer1"
// //               style={{
// //                 textAlign: "center",
// //                 position: "absolute",
// //                 bottom: 0,
// //               }}
// //             >
// //               © {new Date().getFullYear()}, {` `} tekorero.com, All rights
// //               reserved.
// //             </div>
// //           </FlexContainer>
// //         </FlexContainer>
// //       </>
// //     );
// //   }
// // }

// // const mapStateToProps = ({ auth }) => ({
// // // logging: auth.logging,
// //  // loginError: auth.loginError,
// // });
// // const mapDispatchToProps = (dispatch) =>
// //   bindActionCreators({
// //    login,
// //    generateOtpByEmail,
// //    validateOtp
// //   }, dispatch);
// // export default (connect(mapStateToProps, mapDispatchToProps)(Login));




// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";

// import { Formik, Form, Field } from "formik";
// import * as Yup from "yup";

// import Button from "antd/lib/button";
// import { login, generateOtpByEmail, validateOtp } from "./AuthAction";

// import {
//   ArrowRightOutlined, CheckCircleOutlined, EyeInvisibleOutlined, EyeOutlined,
// } from "@ant-design/icons";


// import { Input } from "reactstrap";
// import {
//   useLocation,
//   useNavigate,
//   useParams,
// } from "react-router-dom";
// import { Link  } from "react-router-dom";
// import { FlexContainer, MainWrapper } from "../../Components/UI/Layout";
// import { Spacer, ValidationError } from "../../Components/UI/Elements";
// import { InputComponent } from "../../Components/Forms/Formik/InputComponent";



// class Login extends Component {
  
  
//   constructor(props) {
//     super(props);
//     this.state = {
//       emailId: "",
//       otp:"",
//       password: "",
//       Loading: false,
//       render: false,
//       type: "otp",
//       show: Boolean(),
//     };
//   }
 
//   handleCallBack=(data)=> {
//     if(data==="success"){
//       console.log("Data inside")
//     // let navigate = this.props;
//      console.log("navifate", this.props.navigate)
//      alert("Login sucess")
//     //  this.props.navigation.navigate(`/profile`)
//     }
//   }
 

//   submit = (values) => {
//     // this.enterLoading();
//     this.props.login(values, this.handleCallBack);
//   };
//   InputComponent = ({ field, form: { touched, errors }, ...props }) => (
//     <div>
//       <div>
//         <Input {...field} {...props} />
//       </div>
//       {touched[field.name] && errors[field.name] && (
//         <ValidationError>{errors[field.name]}</ValidationError>
//       )}
//     </div>
//   );
//   componentDidMount() {
//     this.timeoutHandle = setTimeout(() => {
//       // Add your logic for the transition
//     }, 5000);

//     console.log("inside cDM login");
//     console.log("history",this.props.navigate)
//     console.log(this.props);
 
//   }
//   componentWillUnmount() {
//     clearTimeout(this.timeoutHandle); // This is just necessary in the case that the screen is closed before the timeout fires, otherwise it would cause a memory leak that would trigger the transition regardless, breaking the user experience.
//   }
//   render() {
//     console.log(this.props);
//     return (
//       <>
//         <FlexContainer>
//           <FlexContainer
//             style={{
//               backgroundColor: "#F5F5F5",
//               flexDirection: "column",
//               position: "relative",
//               alignItems:"center",
//               margin: "auto",
//             }}
//           >
         
//             <br />
//             <MainWrapper width="30%">
//               <Formik
//                 enableReinitialize
//                 initialValues={{
//                   emailId: this.state.emailId || "",
//                   otp: this.state.otp || "",
//                 }}
//                // validationSchema={LoginSchema}
//                 onSubmit={(values) => {
//                   // same shape as initial values
//                   this.submit(values,this.handleCallBack);
                  
//                 }}
//               >
//                 {({ errors, touched, isSubmitting, values }) => (
//                   <Form className="form-background">
//                     <Field
//                       className="gvbmIs"
//                       name="emailId"
//                       type="email"
//                       placeholder="Email"
//                       component={this.InputComponent}
//                     />
//                     <Spacer />
//                     <FlexContainer justifyContent="space-between" style={{alignItems:"center"}} >
                  
//                       <div >
//                         <Button
//                           type="primary"
//                           onClick={() => {
//                             this.props.generateOtpByEmail({
//                               emailId: values.emailId
//                             },
//                             // this.handleCallBack
//                             )
//                           }}

//                         >
//                         Send OTP
//                         </Button>
//                       </div>

//                     </FlexContainer>
//                     <Spacer />
//                     <FlexContainer justifyContent="space-around" style={{alignItems:"center"}}>                      
//                       <div >
//                         <Field
//                           name="otp"
//                           placeholder="Enter OTP"
//                           component={InputComponent}
//                         />
//                       </div>
//                     {values.otp  && (
//                       <div >
//                         <Button
//                           type="primary"
//                       //disabled={!values.otp}
//                           onClick={() => {
//                             this.props.validateOtp({
//                               otp: values.otp,
//                               emailId: values.emailId
//                             },
//                             // this.handleCallBack
//                             )
//                           }}
//                         >
//                           Validate
//                         </Button>                      
//                       </div>
//                       )} 
//                     </FlexContainer>
//                     <Spacer />
//                     <Button
//                       type="primary"
//                       htmlType="submit"
//                       Loading={isSubmitting}
//                       style={{ width: "100%", height: "2.5em" }}
//                     >
//                       Sign In
//                     </Button>
//                   </Form>
//                 )}
//               </Formik>
           
            
//             </MainWrapper>
//             <Spacer />

//             <div
//               className="footer1"
//               style={{
//                 textAlign: "center",
//                 position: "absolute",
//                 bottom: 0,
//               }}
//             >
//               © {new Date().getFullYear()}, {` `} tekorero.com, All rights
//               reserved.
//             </div>
//           </FlexContainer>
//         </FlexContainer>
//       </>
//     );
//   }
// }

// const mapStateToProps = ({ auth }) => ({
// // logging: auth.logging,
//  // loginError: auth.loginError,
// });
// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators({
//    login,
//    generateOtpByEmail,
//    validateOtp
//   }, dispatch);
// export default (connect(mapStateToProps, mapDispatchToProps)(Login));




import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import Button from "antd/lib/button";
import { login, generateOtpByEmail, validateOtp } from "./AuthAction";
//import FWLogo from "../../Assets/Images/Axis_logo_Big.png";
// import FWLogo from "../../Assets/Images/Logo_new.png";
import {
  ArrowRightOutlined, CheckCircleOutlined, EyeInvisibleOutlined, EyeOutlined,
} from "@ant-design/icons";

  // import FWLogo from "../../Assets/Images/Axis_logo_Big.png";
  // import FWLogo from "../../Assets/Images/Logo_new.png";
// import LakshLogo from "../../Assets/Images/reliantLogo.jpg";

//import LakshLogo from "../../Assets/Images/reliantLogo.jpg";


//import RandomImageScreen from "./RandomImageScreen";
import { Input } from "reactstrap";
import { Link ,withRouter } from "react-router-dom";
import { AuthContainer, FlexContainer, MainWrapper } from "../../Components/UI/Layout";
import { Spacer, ValidationError } from "../../Components/UI/Elements";
import { InputComponent } from "../../Components/Forms/Formik/InputComponent";


// /**
//  * yup validation scheme for set Password
//  */
const LoginSchema = Yup.object().shape({
  emailId: Yup.string()
    .email("Enter a valid email")
    .required("Input needed !"),
   otp: Yup.string().required("Enter otp"),
});
class Login extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      emailId: "",
      otp:"",
      password: "",
      Loading: false,
      render: false,
      type: "otp",
      show: Boolean(),
    };
  }
  handleClick = () =>
    this.setState(({ type, prevState }) => ({
      type: type === "text" ? "otp" : "text",
      show: !this.state.show,
    }));
  // enterLoading = () => {
  //   this.setState({ Loading: true });
  //   setTimeout(() => this.setState({ Loading: false }), 3500);
  // };

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
    if (params.emailId) {
      this.setState({
        emailId: params.emailId,
         otp: params.otp,
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
              width:"50%",
              minHeight: "100vh",
              flexDirection: "column",
              position: "relative",
              alignItems:"center",
              margin: "auto",
            }}
          >
            {/* <img
              className="big-logo"
              src={FWLogo}
              style={{ width: 200 }}
              alt="Tekorero logo"
            /> */}
            <br />
            <MainWrapper style={{width:"50%"}}>
              <Formik
                enableReinitialize
                initialValues={{
                  emailId: this.state.emailId || "",
                  otp: this.state.otp || "",
                }}
                validationSchema={LoginSchema}
                onSubmit={(values) => {
                  // same shape as initial values
                  this.submit(values);
                }}
              >
                {({ errors, touched, isSubmitting, values }) => (
                  <Form className="form-background">
                     <FlexContainer justifyContent="space-around" style={{alignItems:"center"}}>
                      <div>
                    <Field
                      className="gvbmIs"
                      name="emailId"
                      type="email"
                      width="100%"
                      placeholder="Email"
                      component={this.InputComponent}
                    />
                    </div>
                    <Spacer />
                    <div >
                        <Button
                          type="primary"
                          onClick={() => {
                            this.props.generateOtpByEmail({
                              emailId: values.emailId
                            })
                          }}

                        >
                        Send OTP
                        </Button>
                      </div>
                      </FlexContainer>
                    <FlexContainer justifyContent="space-between" style={{alignItems:"center"}} >
                    {/* <div className="login_password || "",">
                      <div style={{width:"100%"}}>
                        <Field
                          name="password"
                          placeholder="Password"
                          type={this.state.type}
                          component={this.InputComponent}
                        />
                      </div>
                      {this.state.show ? (
                        <EyeOutlined
                          type="eye"
                          onClick={this.handleClick}
                          style={{ alignSelf:"center" }}
                          size="24"
                        />
                      ) : (
                        <EyeInvisibleOutlined
                          type="eye-invisible"
                          onClick={this.handleClick}
                          size="24"
                          style={{ alignSelf:"center" }}
                        />
                      )}
                      </div> */}
                    

                    </FlexContainer>
                    <Spacer />
                    <FlexContainer justifyContent="space-around" style={{alignItems:"center"}}>                      
                      <div >
                        <Field
                          name="otp"
                          placeholder="Enter OTP"
                          component={InputComponent}
                        />
                      </div>
                    {values.otp  && (
                      <div >
                        <Button
                          type="primary"
                      //disabled={!values.otp}
                          onClick={() => {
                            this.props.validateOtp({
                              otp: values.otp,
                              emailId: values.emailId
                            })
                          }}
                        >
                          Validate
                        </Button>                      
                      </div>
                      )} 
                    </FlexContainer>
                    <Spacer />
                    <Button
                      type="primary"
                      htmlType="submit"
                      Loading={isSubmitting}
                      style={{ width: "100%", height: "2.5em" }}
                    >
                      Sign In
                    </Button>
                  </Form>
                )}
              </Formik>
           
              {/* <Link
                to="/forgotPassword"
                style={{ textAlign: "center", fontSize: 14, color:"black" }}
              >
               Forgot password? 
              </Link> */}
            </MainWrapper>
            <Spacer />

            <div
              className="footer1"
              style={{
                textAlign: "center",
                position: "absolute",
                bottom: 0,
              }}
            >
              © {new Date().getFullYear()}, {` `} tekorero.com, All rights
              reserved.
            </div>
          </AuthContainer>
        </FlexContainer>
      </>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
// logging: auth.logging,
 // loginError: auth.loginError,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
   login,
   generateOtpByEmail,
   validateOtp
  }, dispatch);
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));











