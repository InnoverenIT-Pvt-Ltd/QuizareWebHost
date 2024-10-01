// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import { Formik, Form, Field } from "formik";
// import * as Yup from "yup";
// import FWLogo from "../../../src/images/Latest.png";
// import Button from "antd/lib/button";
// // import { login, generateOtpByEmail, validateOtp } from "./AuthAction";
// import { Input } from "reactstrap";
// import { Link, withRouter } from "react-router-dom";
// import {
//     AuthContainer,
//     FlexContainer,
//     MainWrapper,
// } from "../../Components/UI/Layout";
// import { Spacer, ValidationError } from "../../Components/UI/Elements";
// import { changePassword } from "./AuthAction"
// import InputComponent from "../../Components/Forms/Formik/InputComponent";
// import { createBrowserHistory } from "history";
// import CreateQuiz from "../../Components/Quizs/CreateQuiz";

// const history = createBrowserHistory();
// // /**
// //  * yup validation scheme for set Password
// //  */

// class ForgetPasswordForm extends Component {

//     callback = () => {
//         history.push("/create")
//     }
//     render() {
//         console.log(this.props);
//         return (
//             <>
             
                   
                    
                     
                       
//              <CreateQuiz />
//                             <Formik
//                                 enableReinitialize
//                                 initialValues={{
//                                     email: this.props.user.emailId || "",
//                                     password: "",
//                                     confirmPassword: ""
//                                 }}

//                                 onSubmit={(values) => {
//                                     this.props.changePassword(
//                                         {
//                                             ...values
//                                         },
//                                         this.props.user.userId,
//                                         this.callback
//                                     );
//                                 }}
//                             >
//                                 {({ errors, touched, isSubmitting, values }) => (
//                                      <Form class=" max-sm:w-11/12   mt-8 m-auto h-96 md:mt-12 w-2/5  ">
//                                          <div class="shadow-2xl bg-white rounded-lg border-solid flex  flex-col   max-sm:m-0 h-full  md:m-auto">
//                                          <div class="font-semibold text-xl text-[#666666] p-4">Change your Password</div>
//                                          <div class="h-[2px] bg-[#000000]"></div>
//                                          <div class=" h-full flex w-wk max-sm:w-wk"   >
//                                          <div class=" w-[60%] mt-3">
//                                          <div class=" w-wk max-sm:w-full ml-2">
//                                          <div class="font-normal text-base  text-[#666666]">New Password</div>
//                                                 <Field
//                                                     name="password"
//                                                     type="password"
//                                                     //placeholder="New Password"
//                                                     style={{ width: "100%", height: "2rem",borderRadius:"0.25rem" }}
//                                                     component={InputComponent}
//                                                 />
//                                             </div>
//                                             <div class=" w-wk max-sm:w-full ml-2 mt-3">
//                                             <div class="font-normal text-base  text-[#666666]">Confirm New Password</div>
//                                                 <Field
//                                                     name="confirmPassword"
//                                                     type="password"
//                                                    // placeholder="Confirm New Password"
//                                                     style={{ width: "100%", height: "2rem",borderRadius:"0.25rem" }}
//                                                     component={InputComponent}

//                                                 />
//                                             </div>
//                                             </div>
//                                             </div>
//                                             <div className="p-4 flex justify-end w-wk">
//                                             {/* <Link
//                                                 to="/email"
                                                
//                                             >
//                                                <Button   style={{  height: "4rem",backgroundColor:"black",borderRadius:'3rem',display:"flex",alignItems:"center",width:"8rem",justifyContent:"center" }}>
//                                                 <h3 class="font-medium text-white text-3xl">Back</h3> </Button>
//                                             </Link> */}
//                                             <div className=" flex justify-end w-[8rem]">
//                                                 <Button
//                                                     type="primary"
//                                                     htmlType="submit"
//                                                     disabled={values.password === values.confirmPassword ? false : true}
//                                                     loading={this.props.changingPassword}
//                                                     style={{backgroundColor:"#3B16B7"}}
//                                                 >
//                                                   Save
//                                                 </Button>
//                                             </div>

//                                         </div>
//                                         </div>
                                       

//                                     </Form>
//                                 )}
//                             </Formik>

                       
                   
                  
              
//             </>
//         );
//     }
// }

// const mapStateToProps = ({ auth, job }) => ({
//     user: auth.userDetails,
//     changingPassword: auth.changingPassword
// });
// const mapDispatchToProps = (dispatch) =>
//     bindActionCreators(
//         {
//             changePassword
//         },
//         dispatch
//     );
// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ForgetPasswordForm));


import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Formik, Form, Field } from "formik";
import { Button } from "antd";
import { withRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import { changePassword } from "./AuthAction";
import InputComponent from "../../Components/Forms/Formik/InputComponent";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons"; // Eye icons

const history = createBrowserHistory();

class ForgetPasswordForm extends Component {
  state = {
    showPassword: false, // State to toggle password visibility
    showConfirmPassword: false, // State to toggle confirm password visibility
  };

  togglePasswordVisibility = () => {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }));
  };

  toggleConfirmPasswordVisibility = () => {
    this.setState((prevState) => ({
      showConfirmPassword: !prevState.showConfirmPassword,
    }));
  };

  callback = () => {
    //history.push("/quizLibrary");
    const redirectPath = this.props.user.noOfQuizes === 0 ? "/emptypage" : "/quizLibrary";
    window.location.replace(redirectPath);
  };

  render() {
    return (
      <>
        <Formik
          enableReinitialize
          initialValues={{
            email: this.props.user.emailId || "",
            password: "",
            confirmPassword: "",
          }}
          onSubmit={(values) => {
            this.props.changePassword(
              {
                ...values,
              },
              this.props.user.userId,
              this.callback
            );
          }}
        >
          {({ errors, touched, isSubmitting, values }) => (
            <Form className="max-sm:w-11/12 mt-8 m-auto h-96 md:mt-12 w-2/5">
              <div className="shadow-2xl bg-white rounded-lg border-solid flex flex-col max-sm:m-0 h-full md:m-auto">
                <div className="font-semibold text-xl text-[#666666] p-4">
                  Change your Password
                </div>
                <div className="h-[2px] bg-[#000000]"></div>
                <div className="h-full flex w-wk max-sm:w-wk">
                  <div className="w-[60%] mt-3">
                    <div className="w-wk max-sm:w-full ml-2">
                      <div className="font-normal text-base text-[#666666]">
                        New Password
                      </div>
                      <div className="relative">
                        <Field
                          name="password"
                          type={this.state.showPassword ? "text" : "password"} // Toggle input type
                          style={{ width: "100%", height: "2rem", borderRadius: "0.25rem" }}
                          component={InputComponent}
                        />
                        <button
                          type="button"
                          className="absolute right-2  text-lg"
                          onClick={this.togglePasswordVisibility}
                        >
                          {this.state.showPassword ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
                        </button>
                      </div>
                    </div>

                    <div className="w-wk max-sm:w-full ml-2 mt-3">
                      <div className="font-normal text-base text-[#666666]">
                        Confirm New Password
                      </div>
                      <div className="relative">
                        <Field
                          name="confirmPassword"
                          type={this.state.showConfirmPassword ? "text" : "password"} // Toggle input type
                          style={{ width: "100%", height: "2rem", borderRadius: "0.25rem" }}
                          component={InputComponent}
                        />
                        <button
                          type="button"
                          className="absolute right-2  text-lg"
                          onClick={this.toggleConfirmPasswordVisibility}
                        >
                          {this.state.showConfirmPassword ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 flex justify-end w-wk">
                  <div className="flex justify-end w-[8rem]">
                    <Button
                      type="primary"
                      htmlType="submit"
                      disabled={values.password !== values.confirmPassword}
                      loading={this.props.changingPassword}
                      style={{ backgroundColor: "#3B16B7" }}
                    >
                      Save
                    </Button>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  user: auth.userDetails,
  changingPassword: auth.changingPassword,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      changePassword,
    },
    dispatch
  );

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ForgetPasswordForm));
