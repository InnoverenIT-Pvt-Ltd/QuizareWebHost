import React from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field } from "formik";
import { bindActionCreators } from 'redux';
// import { withRouter} from "react-router-dom";
import * as Yup from "yup";
import { InputComponent } from "../../Components/Forms/Formik/InputComponent";
import { addQuizName } from './QuizAction';
import { Button } from 'antd';
import FWLogo from "../../../src/images/lamp-charge.png";
import { useHistory } from "react-router-dom";
import { withRouter } from "react-router-dom";
import MainHeader from '../../Components/Mainheader';
import CreateQuiz from '../../Components/Quizs/CreateQuiz';
import Menu from '../../Components/Quizs/Menu';

const QuizSchema = Yup.object().shape({

  quizName: Yup.string().required("Input needed!"),
  // duration: Yup.string().required("Input needed!"),

});
function QuizName(props) {
  const history = useHistory();

  function handleCallBack(data) {
    if (data === "success") {
      history.push(`/addquiz`);
    } else {
      history.push(`/quizzes`);
    }
  }



  return (
    <>
      <Menu/>
      <Formik
        initialValues={{
          duration: "",
          quizName: "",
          quizHostId: props.quizHostId,
        }}
        validationSchema={QuizSchema}
        onSubmit={(values, { resetForm }) => {

          props.addQuizName(
            {
              ...values
            },

            handleCallBack
          );
          //resetForm()
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          errors,
          values,
        }) => (
          <Form class="flex justify-center flex-col items-center  max-sm:w-11/12 mt-8 m-auto md:mt-12  w-2/5 ">


            <div class="shadow-2xl bg-white border-solid w-full flex justify-center items-center  p-1 max-sm:m-0 h-h26 rounded-rounded2.8 md:w-full m-auto">
            
              <div class="flex flex-col items-center ">
              <h2 class="text-3xl font-medium">Create a new quiz</h2>
              <div>
              <img
                    className="big-logo"
                    src={FWLogo}
                    
                    alt="Tekorero logo"

                  />
              </div>
                <div >
                  <h3>Start creating by choosing a name for your quiz</h3>
                  <div class="mt-4">
                    <Field
                      name="quizName"
                      //isColumn
                      component={InputComponent}
                      //onChangeText={handleChange('quizName')}
                      style={{ width: "100%", height: "3rem",borderRadius:"1.25rem",backgroundColor:"#E4E2E2", }}
                      placeholder="Enter quiz name"

                    />
                  </div>
                  {/* <div class="mt-6">
                    <Field
                      name="duration"
                      component={InputComponent}
                      onChangeText={handleChange('duration')}
                      style={{ textAlign: 'center' }}
                      placeholder="Enter Response time per question"

                    />
                  </div> */}
                  {/* <Text                 
                  onChangeText={handleChange('quizName')}
                  style={externalStyle.firstCardText}>
                  Standard                  
                  </Text> */}
                 
                

                </div>
                
              </div>
              
            </div>
            <div class="bg-black rounded-rounded2.8  mt-8 w-52 items-center flex justify-center" >
                   
                   <Button
                     type="primary"
                     htmlType="submit"
                     onClick={handleSubmit}
                     style={{  height: "5em",backgroundColor:"black",borderRadius:'3rem',display:"flex",justifyContent:"center",alignItems:"center" }}
                   > <h3 class="font-medium text-white text-3xl">Create</h3></Button>
                 </div>
          </Form>
        )}

      </Formik>

    </>
  );
}
const mapStateToProps = ({ auth, quiz }) => ({
  addingQuizName: quiz.addingQuizName,
  addingQuizNameError: quiz.addingQuizNameError,
  quizName: quiz.quizName,
  quizHostId: auth.userDetails.userId
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addQuizName,
    },
    dispatch,
  );

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(QuizName));