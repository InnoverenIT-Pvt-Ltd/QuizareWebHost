import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link, withRouter } from "react-router-dom";
import { Button, Select, Icon, Tag, Switch, Checkbox } from "antd";
import { Formik, Form, FastField, Field, FieldArray } from "formik";
import * as Yup from "yup";
import MainHeader from "../Mainheader";
import Collapse from "../Collapse";
import Menu from "./Menu";
import FWLogo from "../../../src/images/Latest.png";

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

 function CreateQuiz (props) {
  
  const [showMobileMenu, setShowMobileMenu] = useState(false);
    // return (
    //   <>
    //     <MainHeader />
    //     <Formik>
    //       {({
    //         values,
    //         errors,
    //         touched,
    //         isSubmitting,
    //         setFieldValue,
    //         setFieldTouched,
    //       }) => (
    //         <Form class=" max-sm:w-full  m-auto h-h31 md:mt-12 w-2/5  ">
    //           <div class="shadow-2xl bg-quizc border-solid w-w95 flex justify-center flex-col   max-sm:m-0 h-full  md:m-auto">
    //             <div class="flex justify-center">
    //               <h3 class="font-extrabold ">Welcome {props.user.name}</h3>
    //             </div>
    //             {/* <div class="flex items-center flex-col">
    //             <div class="  w-wk items-center flex justify-center" >
    //                 <Link to="/how">
    //                   <Button
                      
    //                     htmlType="submit"
    //                     style={{  height: "5em",display:"flex",justifyContent:"center",alignItems:"center" }}
    //                   >
    //                     <h3 class="font-medium text-white text-lg">How to</h3>
    //                   </Button>
    //                 </Link>
    //               </div>
    //             <div class=" bg-quizb  w-wk items-center flex justify-center" >
    //                 <Link to="/quizzes">
    //                   <Button
                     
    //                     htmlType="submit"
    //                     style={{  height: "5em",display:"flex",justifyContent:"center",alignItems:"center" }}
    //                   >
    //                     <h3 class="font-medium text-white text-lg">Create Quiz</h3>
    //                   </Button>
    //                 </Link>
    //               </div>
    //               <div class="  w-wk items-center flex justify-center" >
    //                 <Link to="/ongoingQuiz">
    //                   <Button
                      
    //                     htmlType="submit"
    //                     style={{  height: "5em",display:"flex",justifyContent:"center",alignItems:"center" }}
    //                   >
    //                     <h3 class="font-medium text-white text-lg">Ongoing Quizzes</h3>
    //                   </Button>
    //                 </Link>
    //               </div>
    //               <div class="  w-wk items-center flex justify-center" >
    //                 <Link to="/quizLibrary">
    //                   <Button
                     
    //                     htmlType="submit"
    //                     style={{  height: "5em",display:"flex",justifyContent:"center",alignItems:"center" }}
    //                   >
    //                      <h3 class="font-medium text-white text-lg">Quiz Library </h3>
    //                   </Button>
    //                 </Link>
    //               </div>
    //               <div class=" bg-quizb  w-wk items-center flex justify-center" >
    //                 <Link to="/profile">
    //                   <Button
                       
    //                     htmlType="submit"
    //                     style={{  height: "5em",display:"flex",justifyContent:"center",alignItems:"center" }}
    //                   >
    //                     <h3 class="font-medium text-white text-lg">My Profile</h3>
    //                   </Button>
    //                 </Link>
    //               </div>
    //               <div class="  w-wk items-center flex justify-center" >
    //                 <Link to="/email">
    //                   <Button
                      
    //                     htmlType="submit"
    //                     style={{  height: "5em",display:"flex",justifyContent:"center",alignItems:"center" }}
    //                   >
    //                      <h3 class="font-medium text-white text-lg">Sign Out </h3>
    //                   </Button>
    //                 </Link>
    //               </div>
                  
    //             </div> */}
                
    //           </div>
    //         </Form>
    //       )}
    //     </Formik>
    //   </>
    // );


  return (
   <>
    <nav className=" bg-ShopBlue w-full  ">
      
      <div className="flex items-center justify-between h-16 px-4 border-b border-solid border-slate-600">
        <div className="flex-shrink-0 font-bold tracking-wider">
        <Link to="/">
        <img
                  className="big-logo"
                  src={FWLogo}
                  style={{ width: 60 }}
                  alt="Tekorero logo"

                />
                </Link>
        </div>
        <button
          type="button"
          className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
          onClick={() => setShowMobileMenu(!showMobileMenu)}>
          <svg
            className="h-6 w-6"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      {showMobileMenu && <Menu />}
    </nav>
    </>
  );
}

  


const mapStateToProps = ({ auth }) => ({
  user: auth.userDetails
});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CreateQuiz)
);
