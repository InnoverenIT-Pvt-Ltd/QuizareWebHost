import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link ,withRouter } from "react-router-dom";
import { Button, Select, Icon, Tag, Switch, Checkbox } from "antd";
import { Formik, Form, FastField, Field, FieldArray } from "formik";
import * as Yup from "yup";
import { MainWrapper, Spacer } from "../../Components/UI/Elements";

import moment from "moment";
import JobHeader from "./JobHeader";



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

class SelectQuizname extends Component {

 

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
      <JobHeader/>
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
            <Form class=" max-sm:w-11/12 mt-8 m-auto md:mt-12  w-1/5  h-h50  ">
             
            
              <MainWrapper
              
                style={{ width: "100%", margin: "auto",height:"32rem",borderRadius:"0" }}
              >
                <div>
                    <Select
                    placeholder="Select Quiz Name"
                    />
                </div>
                <h3 class="flex justify-center">You are hosting</h3>
                <MainWrapper style={{height:"26rem"}}>
                <h3 class="flex justify-center mt-4">Share URl for others to access</h3>
                <div class="flex justify-center h-16">
                   <Field
                   placeholder="http://player.quizledge.no"
                   width="13rem"
                   />
                   </div>
                   <div class="flex justify-center">
                   <Button type="primary"  htmlType="submit" style={{width:"14rem",height:"2rem",backgroundColor:"white",borderBlockColor:"blue",borderRadius:"0"}}>
                <h3 class="font-extrabold">Share the Url</h3></Button>
                   </div>
                   <h3 class="flex justify-center mt-4">Who is playing your quiz</h3>
                   <div class="flex justify-center h-28">
                   <Field
                   placeholder="text"
                   width="15rem"
                   />
                   </div>
                <div class="flex items-center flex-row justify-around">
            <div >
            <Link to="/quiz">
            <Button type="primary"  htmlType="submit" style={{width:"7rem",height:"2rem",backgroundColor:"white",borderBlockColor:"blue",borderRadius:"0"}}>
                <h3 class="font-extrabold">Close Quiz</h3></Button>
                </Link>
</div>
<div >
<Button type="primary"  htmlType="submit" style={{width:"7rem",height:"2rem",backgroundColor:"white",borderBlockColor:"#126c5e",borderRadius:"0"}}>
<h3 class="font-extrabold">Edit this Quiz</h3></Button>  
</div>    
</div>
<div class="flex mt-4" >
<Button type="primary"  htmlType="submit" style={{width:"15rem",height:"2rem",backgroundColor:"white",borderBlockColor:"#126c5e",borderRadius:"0"}}>
<h3 class="font-extrabold">Host This Quiz</h3></Button>  
</div>  
<h3 class="flex justify-center">Player Feedback</h3>
</MainWrapper>
              </MainWrapper>
                     
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

  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SelectQuizname));








