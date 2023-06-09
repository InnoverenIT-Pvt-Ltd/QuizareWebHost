import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link ,withRouter } from "react-router-dom";
import { Button, Select, Icon, Tag, Switch, Checkbox } from "antd";
import { Formik, Form, FastField, Field, FieldArray } from "formik";
import * as Yup from "yup";
import { MainWrapper, Spacer } from "../../Components/UI/Elements";
import JobHeader from "./JobHeader";
import moment from "moment";
import { InputComponent } from "../Forms/Formik/InputComponent";



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

class Question1 extends Component {

 

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
              
                style={{ width: "100%", margin: "auto",height:"35rem" }}
              >

                <div class="flex justify-center">
                    <h3 class="font-extrabold text-lg mt-12">Question1</h3></div>
                <div class="flex items-center flex-col">
            <div class="mt-8">
            <Link to="/quiz">
            <Button type="primary"  htmlType="submit" style={{width:"17rem",height:"4rem",backgroundColor:"white",borderBlockColor:"blue",borderRadius:"0"}}>
                <h3 class="font-extrabold">how many days are there in week?</h3></Button>
                </Link>
</div>
<div class="mt-4">
<Button type="primary"  htmlType="submit" style={{width:"15rem",height:"2rem",backgroundColor:"white",borderBlockColor:"#126c5e",borderRadius:"0"}}>
<h3 class="font-extrabold">7</h3></Button>  
</div> 
<div class="mt-4">
<Button type="primary"  htmlType="submit" style={{width:"15rem",height:"2rem",backgroundColor:"white",borderBlockColor:"#126c5e",borderRadius:"0"}}>
<h3 class="font-extrabold">20</h3></Button>  
</div> 
<div class="mt-4">
<Button type="primary"  htmlType="submit" style={{width:"15rem",height:"2rem",backgroundColor:"white",borderBlockColor:"#126c5e",borderRadius:"0"}}>
<h3 class="font-extrabold">10</h3></Button>  
</div> 
<div class="mt-4">
<Button type="primary"  htmlType="submit" style={{width:"15rem",height:"2rem",backgroundColor:"white",borderBlockColor:"#126c5e",borderRadius:"0"}}>
<h3 class="font-extrabold">15</h3></Button>  
</div> 
</div>
<div class="max-sm: flex flex-row justify-center items-center">
<div class="mt-8 ">
          
            <Button type="primary"  htmlType="submit" style={{width:"5rem",height:"3rem",backgroundColor:"white",borderBlockColor:"blue",borderRadius:"0"}}>
                <h3 class="font-extrabold">History</h3></Button>
</div>
<div class="mt-8 ml-4 ">
          
            <Button type="primary"  htmlType="submit" style={{width:"6rem",height:"3rem",backgroundColor:"white",borderBlockColor:"blue",borderRadius:"0"}}>
                <h3 class="font-extrabold">Geography</h3></Button>
</div>
<div class="mt-8 ml-4">
          
            <Button type="primary"  htmlType="submit" style={{width:"5rem",height:"3rem",backgroundColor:"white",borderBlockColor:"blue",borderRadius:"0"}}>
                <h3 class="font-extrabold">Polity</h3></Button>
</div>

</div>

<div class="max-sm: flex flex-row justify-center items-center">
<div class="mt-8 ">
          
            <Button type="primary"  htmlType="submit" style={{width:"5rem",height:"3rem",backgroundColor:"white",borderBlockColor:"blue",borderRadius:"0"}}>
                <h3 class="font-extrabold">physics</h3></Button>
</div>
<div class="mt-8 ml-4 ">
          
            <Button type="primary"  htmlType="submit" style={{width:"6rem",height:"3rem",backgroundColor:"white",borderBlockColor:"blue",borderRadius:"0"}}>
                <h3 class="font-extrabold">Chemistry</h3></Button>
</div>
<div class="mt-8 ml-4">
          
            <Button type="primary"  htmlType="submit" style={{width:"5rem",height:"3rem",backgroundColor:"white",borderBlockColor:"blue",borderRadius:"0"}}>
                <h3 class="font-extrabold">English</h3></Button>
</div>

</div>
              </MainWrapper>
              <div class="max-sm: flex flex-row justify-center items-center">
<div class="mt-8 ">
          
            <Button type="primary"  htmlType="submit" style={{width:"5rem",height:"3rem",backgroundColor:"white",borderBlockColor:"blue",borderRadius:"0"}}>
                <h3 class="font-extrabold">Delete</h3></Button>
</div>
<div class="mt-8 ml-4 ">
          
            <Button type="primary"  htmlType="submit" style={{width:"6rem",height:"3rem",backgroundColor:"white",borderBlockColor:"blue",borderRadius:"0"}}>
                <h3 class="font-extrabold">Update</h3></Button>
</div>
<div class="mt-8 ml-4">
          
            <Button type="primary"  htmlType="submit" style={{width:"5rem",height:"3rem",backgroundColor:"white",borderBlockColor:"blue",borderRadius:"0"}}>
                <h3 class="font-extrabold">Add</h3></Button>
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

  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Question1));








