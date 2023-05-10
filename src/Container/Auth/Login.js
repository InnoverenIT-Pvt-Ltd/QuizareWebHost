import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link, withRouter } from "react-router-dom";
import { Button, Select, Icon, Tag, Switch, Checkbox, message } from "antd";
import { Formik, Form, FastField, Field, FieldArray } from "formik";
import * as Yup from "yup";
import { GoogleLogin } from 'react-google-login';
import MainHeader from "../../Components/Mainheader";
import { facebookLogin, googleLogin } from "../Auth/AuthAction";
import FacebookLogin from "react-facebook-login";
// import SkillsLoadMore from "./CandidateTable/SkillsLoadMore";
const { Option } = Select;
/**
 * yup validation scheme for creating a contact
 */

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-])|(\\([0-9]{2,3}\\)[ \\-])|([0-9]{2,4})[ \\-])?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const CandidateSchema = Yup.object().shape({
  // contactOwner: Yup.string().required("Please Select contact owner"),
  emailId: Yup.string().email("Enter a valid Email").required("Input needed!"),
  firstName: Yup.string().required("Input needed!"),
});

function Login(props) {

  //For Facebook login
  const responseFacebook = (response) => {
    console.log(response);
    props.facebookLogin(response.accessToken)
  }

  //For Google login

  const responseGoogle = (response) => {
    console.log(response);
    props.googleLogin(response.tokenId)
  };
  const errorMessage = (error) => {
    console.log(error);
  };

  const handleLoginCallback = (status, data) => {
    if (data) {
      message.error(data.message);
      // props.handleAuthLoginModal(false);
    } else {
      if (status === "success") {
        // props.handleAuthLoginModal(false);
        // props.history.push("/userdashboard");
        message.success("Login successful.");
      } else {
        // props.handleAuthLoginModal(false);
        message.error(
          "We encountered the following error : Email id and Password not match . Please try again later, or contact us for assistance"
        );
      }
    }
  };

  let google = <div>
    <GoogleLogin
      clientId="872903236452-j5ck0dt7g4efaforvhoujdd3aaesf0tj.apps.googleusercontent.com"
      buttonText="Login with Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  </div>
  let content =
    <div>
      <FacebookLogin
        appId="1216755315881273"
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}
      />
    </div>

  return (
    <>
      <MainHeader />
      <div>
        <Formik

        >
          {({
            values,
            errors,
            touched,
            isSubmitting,
            setFieldValue,
            setFieldTouched,
          }) => (
            <Form class=" max-sm:w-4/5 mt-6 m-auto md:mt-7  w-2/5 ">

              <div class="shadow-2xl border-solid w-w95 flex justify-center items-center  p-1 max-sm:m-0 h-h34 rounded-2xl md:m-auto">
                <div>
                  <div class="flex justify-center">
                    <h3 class="font-extrabold ">Welcome</h3></div>
                  <div class="flex items-center flex-col">
                    {/* <div class="facebook_div"> */}
                    {/* {content} */}
                    <Link to="/create">
            <Button type="primary"  htmlType="submit" style={{width:"15rem",height:"2rem",backgroundColor:"white",borderBlockColor:"blue",borderRadius:"0"}}>
                <h3 class="font-extrabold">Register with FaceBook</h3></Button>
                </Link>
                    {/* </div> */}
                    <div class="mt-4">
                      {google}
                      {/* <Link to="/select">
                          <Button type="primary" htmlType="submit" style={{ width: "15rem", height: "2rem", backgroundColor: "white", borderBlockColor: "#126c5e", borderRadius: "0" }}>
                            <h3 class="font-extrabold">Register with Google</h3></Button>
                        </Link> */}
                    </div>
                  </div>
                </div>
                {/* </MainWrapper> */}
              </div>
              {/* </div>       */}
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}


const mapStateToProps = ({ auth, job }) => ({

});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      facebookLogin,
      googleLogin
    },
    dispatch
  );

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));








