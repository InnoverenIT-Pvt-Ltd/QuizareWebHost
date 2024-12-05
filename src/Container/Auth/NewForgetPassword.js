import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button } from "antd";
import InputComponent from "../../Components/Forms/Formik/InputComponent";// Assuming this is a custom component for input fields
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { withRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import { updatePassword } from "./AuthAction";
import { EyeOutlined, EyeInvisibleOutlined, } from "@ant-design/icons"; // Eye icons

import * as Yup from "yup";
const history = createBrowserHistory();

const formSchema = Yup.object().shape({
  // contactOwner: Yup.string().required("Please Select contact owner"),
  email: Yup.string().email("Enter a valid Email").required("Eamil required!"),
  password: Yup.string().required("Enter new pssword"),
  confirmPassword: Yup.string()
  .oneOf([Yup.ref("password"), null], "Passwords must match") 
  .required("Confirm Password is required"),
});

const ForgetPasswordForm = (props) => {
  const [showPassword, setShowPassword] = useState(false); 
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); 

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prevState) => !prevState);
  };

  const callback = () => {
    props.history.push("/quizLibrary");
    // const redirectPath = props.user.noOfQuizes === 0 ? "/emptypage" : "/quizLibrary";
    // window.location.replace(redirectPath);
  };

  return (
    <Formik
      enableReinitialize
      initialValues={{
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={formSchema}
      onSubmit={(values) => {
        props.updatePassword(
          {
            ...values,
          },
          callback
        );
      }}
    >
      {({ errors, touched, isSubmitting, values }) => (
        <Form className="max-sm:w-11/12 mt-8 m-auto h-auto md:mt-12 w-2/5">
          <div className="shadow-2xl bg-white rounded-lg border-solid flex flex-col max-sm:m-0 h-full md:m-auto">
            <div className="font-semibold text-xl text-[#666666] p-4">
              Forget Password
            </div>
            <div className="h-[2px] bg-[#000000]"></div>
            <div className="h-full flex w-wk max-sm:w-wk flex-col p-4">
              <div className="w-wk max-sm:w-full mb-3">
                <div className="font-normal text-base text-[#666666]">Email</div>
                <Field
                  name="email"
                  type="email"
                  style={{
                    width: "100%",
                    height: "2rem",
                    borderRadius: "0.25rem",
                    color: "black",
                  }}
                  component={InputComponent}
                />
                {touched.email && errors.email && (
                  <div className="text-red-500 text-sm mt-1">{errors.email}</div>
                )}
              </div>

              <div className="w-wk max-sm:w-full">
                <div className="font-normal text-base text-[#666666]">
                  New Password
                </div>
                <div className="relative">
                  <Field
                    name="password"
                    type={showPassword ? "text" : "password"}
                    style={{
                      width: "100%",
                      height: "2rem",
                      borderRadius: "0.25rem",
                      color: "black",
                    }}
                    component={InputComponent}
                  />
                  <button
                    type="button"
                    className="absolute right-2 text-lg"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
                  </button>
                  {touched.password && errors.password && (
                  <div className="text-red-500 text-sm mt-1">{errors.password}</div>
                )}
                </div>
              </div>

              <div className="w-wk max-sm:w-full mt-3">
                <div className="font-normal text-base text-[#666666]">
                  Confirm New Password
                </div>
                <div className="relative">
                  <Field
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    style={{
                      width: "100%",
                      height: "2rem",
                      borderRadius: "0.25rem",
                      color: "black",
                    }}
                    component={InputComponent}
                  />
                  <button
                    type="button"
                    className="absolute right-2 text-lg"
                    onClick={toggleConfirmPasswordVisibility}
                  >
                    {showConfirmPassword ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
                  </button>
                  {touched.confirmPassword && errors.confirmPassword && (
                  <div className="text-red-500 text-sm mt-1">{errors.confirmPassword}</div>
                )}
                </div>
              </div>
            </div>

            <div className="p-4 flex justify-end w-wk">
              <div className="flex justify-end w-[8rem]">
                <Button
                  type="primary"
                  htmlType="submit"
                  disabled={values.email==="" || values.password !== values.confirmPassword}
                  loading={props.updatingPasswordOfUser}
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
  );
}

const mapStateToProps = ({ auth }) => ({
  user: auth.userDetails,
  updatingPasswordOfUser: auth.updatingPasswordOfUser,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
        updatePassword,
    },
    dispatch
  );

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ForgetPasswordForm));
