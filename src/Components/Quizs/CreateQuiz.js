import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link ,withRouter } from "react-router-dom";
import { Button, Select, Icon, Tag, Switch, Checkbox } from "antd";
import { Formik, Form, FastField, Field, FieldArray } from "formik";
import * as Yup from "yup";
import { MainWrapper, Spacer } from "../../Components/UI/Elements";

import moment from "moment";
import SubHeader from "../SubHeader";
import MainHeader from "../Mainheader";



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

class CreateQuiz extends Component {

 

  componentDidMount() {
  
  }

  render() {
    const {
      // user: { userId, firstName, lastName,department },
      addCandidate,
      addingCandidate,
      availableDate,
    } = this.props;





 
    
    // console.log("sec",sectorOption)
    return (
      <>
      <MainHeader/>
        <Formik >
          {({
            values,
            errors,
            touched,
            isSubmitting,
            setFieldValue,
            setFieldTouched,
          }) => (
            <Form class=" max-sm:w-4/5 mt-8 m-auto h-h33 md:mt-12  w-1/5  ">
             
            
             
        <div class="shadow-2xl border-solid w-w95 flex justify-center flex-col  p-1 max-sm:m-0 h-full rounded-xl md:m-auto">
                <div class="flex justify-center">
                    <h3 class="font-extrabold ">Welcome Øystein</h3></div>
                <div class="flex items-center flex-col">
            <div class="mt-8">
            <Link to="/quizzes">
            <Button type="primary"
              htmlType="submit" 
              style={{width:"15rem",height:"2rem",backgroundColor:"white",borderBlockColor:"blue",borderRadius:"0"}}>
                <h3 class="font-extrabold">Create a new quiz</h3></Button>
                </Link>
</div>
<div class="mt-4">
<Link to="/ongoingQuiz">
<Button type="primary"  htmlType="submit" style={{width:"15rem",height:"2rem",backgroundColor:"white",borderBlockColor:"#126c5e",borderRadius:"0"}}>
<h3 class="font-extrabold">Ongoing quizzes</h3></Button> 
</Link> 
</div>   
<div class="mt-4">
<Link to="/select">
<Button type="primary"  htmlType="submit" style={{width:"15rem",height:"2rem",backgroundColor:"white",borderBlockColor:"#126c5e",borderRadius:"0"}}>
<h3 class="font-extrabold">My quiz library </h3></Button> 
</Link> 
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

const mapStateToProps = ({ auth, job }) => ({

});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
  
    },
    dispatch
  );

  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateQuiz));