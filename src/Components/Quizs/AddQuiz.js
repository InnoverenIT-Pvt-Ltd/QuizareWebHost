import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button } from "antd";
import { Formik, Form } from "formik";
import { Link ,withRouter } from "react-router-dom";
import * as Yup from "yup";
import { MainWrapper} from "../UI/Elements";
import JobHeader from "./JobHeader";

const CandidateSchema = Yup.object().shape({
  emailId: Yup.string().email("Enter a valid Email").required("Input needed!"),
  firstName: Yup.string().required("Input needed!"),
});

class AddQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  componentDidMount() {

  }

  render() {
    const {
    } = this.props;

    return (
      <>
      <JobHeader/>
        <Formik
          initialValues={{
          
          }}
          validationSchema={CandidateSchema}
        //   onSubmit={(values, { resetForm }) => {

        //     addCandidate(
        //       {
        //         ...values,
        //       },

        //       () => this.handleReset(resetForm)
        //     );
        //   }}
        >
          {({
          
          }) => (
           
            <Form class=" max-sm:w-11/12 mt-8 m-auto md:mt-12  w-1/5  h-h50  ">
             
            
              <MainWrapper style={{ width: "100%", margin: "auto",height:"35rem" }}>

                <div class="flex justify-center mt-28">
                    <h1 class="text-3xl"></h1></div>
                <hr/>
                <div class="flex justify-center">
                    <h3 class="font-extrabold mt-4">30</h3></div>
                    <hr/>
                    <div class="flex justify-center">
                    <h3 class="font-extrabold mt-4">Standard</h3></div>
                    <hr/>
                <div class="flex items-center flex-col">
<div class="mt-12">
<Link to="/question">
<Button type="primary"  htmlType="submit" style={{width:"15rem",height:"2rem",backgroundColor:"white",borderBlockColor:"#126c5e",borderRadius:"0"}}>
<h3 class="font-extrabold"> </h3></Button>
</Link>  
</div>    
</div>
              </MainWrapper>
                     
            </Form>
          )}
        </Formik>
      </>
    );
  }
}

const mapStateToProps = ({  }) => ({
  
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
    
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(AddQuiz);