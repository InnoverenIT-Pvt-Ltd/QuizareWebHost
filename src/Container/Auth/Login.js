import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link, withRouter } from "react-router-dom";
import { Button, Select, Icon, Tag, Switch, Checkbox, message } from "antd";
import { Formik, Form, FastField, Field, FieldArray } from "formik";
import * as Yup from "yup";
import { GoogleLogin } from 'react-google-login';
import FWLogo from "../../../src/images/note-2.png";
import { facebookLogin, googleLogin } from "../Auth/AuthAction";
import FacebookLogin from "react-facebook-login";
import Mainheader from "../../Components/Mainheader";
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

  const responseFacebook = (response) => {
    console.log(response);
    props.facebookLogin(response.accessToken)
  }

  const responseGoogle = (response) => {
    console.log(response);
    props.googleLogin(response.tokenId, props.history)
  };

  let google = <div>
    <GoogleLogin
      clientId="1802272721-jkbu5gabo0qsrq7kh50n5ap7h3979tvb.apps.googleusercontent.com"
      buttonText="Login with Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  </div>
  let content =
    <div>
      <FacebookLogin
        appId="1462431934502453"
        autoLoad={false}
        scope="public_profile, email, user_birthday"
        fields="name,email,picture"
        callback={responseFacebook}
      />
    </div>
  let loginEmail =
    <Link to="/email">
      <div class="bg-black rounded-rounded2.8 p-1 mt-1 w-36 items-center flex justify-center">
        <Button style={{ border: "none", height:"4rem", }}>
        <h3 class="font-medium text-white text-xl"> Login </h3>


          </Button>
      </div>
    </Link>
  return (
    <>
   

      <div class="bg-quizbg min-h-screen ">
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
            <Form class=" max-sm:w-4/5 flex justify-center flex-col min-h-wh  m-auto md:w-wk   ">

              <div class="shadow-2xl border-solid w-w95 flex justify-center items-center mt-4  p-1 max-sm:h-h32 rounded-rounded2.8 bg-white md:m-auto md:mt-16 md:h-h30 md:w-2/5">
                <div>
                  
                  <div class="flex justify-center">
                    <h1 class="font-medium ">Quizledge</h1>

                  </div>
                  <div class="flex justify-center">
                  <h4>A world of user generated quizzes</h4>
                  </div>


                  <div>
                    <img
                    className="big-logo"
                    src={FWLogo}
                    
                    alt="Tekorero logo"

                  />
                  </div>
                  <div class="flex items-center flex-col">
                    {/* <div class="facebook_div"> */}
                    {/* {content} */}
                    {/* </div> */}
                  
                  </div>
                </div>
                {/* </MainWrapper> */}
              </div>
              {/* </div>       */}
            </Form>
            
          )}
        </Formik>
        <div class="flex justify-between p-6 md:justify-evenly">
        <div>

<Link to="/signUp">
<div class="bg-black rounded-rounded2.8 p-1 mt-1 w-36 items-center flex justify-center"
>
<Button style={{ border: "none", height:"4rem", }}>
<h3 class="font-medium text-white text-xl"> Register </h3>


</Button>
</div>
</Link>
</div>
        <div >
                      {/* {google} */}
                      {loginEmail}
                      {/* <Link to="/select">
                          <Button type="primary" htmlType="submit" style={{ width: "15rem", height: "2rem", backgroundColor: "white", borderBlockColor: "#126c5e", borderRadius: "0" }}>
                            <h3 class="font-extrabold">Register with Google</h3></Button>
                        </Link> */}
                    </div>
                  
                    </div>
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








