import React from 'react'
import {connect} from 'react-redux';
import { Formik, Form, FastField, Field, FieldArray } from "formik";
import {bindActionCreators} from 'redux';
import { useHistory } from "react-router-dom";
import {withRouter } from "react-router-dom";
import { updateQuizNameByQuizId, getQuizName} from '../QuizAction';
import { Card,Button } from 'antd';
import { InputComponent } from '../../../Components/Forms/Formik/InputComponent';
import { useEffect } from 'react';
import MainHeader from '../../../Components/Mainheader';
function UpdateQuizName(props) {
  
  const history = useHistory();
  function handleCallBack(data) {
    history.push(`/create`);
  }
  return (
    <>
    <MainHeader/>
     <Formik
        initialValues={{
          duration: props.showQuiz&&props.showQuiz.duration,
          quizName: props.showQuiz&&props.showQuiz.quizName,                
        }}
        
        onSubmit={(values) => {
         
          props.updateQuizNameByQuizId(
            {
              ...values
            },
            props.showQuiz&&props.showQuiz.quizId,
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
          <Form class="flex justify-center max-sm:w-11/12 mt-8 m-auto md:mt-12  w-1/5 ">
           <div class="shadow-2xl border-solid w-11/12 flex justify-center items-center  p-1 max-sm:m-0 h-h34 rounded-2xl md:m-auto">
              <div class="w-11/12" >
                <div>
              <Field
                  name="quizName"
                  onChangeText={handleChange('quizName')}
                  component={InputComponent}
                  value={`${values.quizName}`}
                 // placeholder="Enter Quiz Name" 
                />
                </div>
                <div class="mt-6">
                 <Field
                  name="duration"
                  onChangeText={handleChange('duration')}
                  component={InputComponent}
                  value={`${values.duration}`}
                 // placeholder="Enter Response time per question"
                />
                </div>
                <div class="mt-8">
                 <Button
                type="primary"
                style={{backgroundColor:"white",borderBlockColor:"black",borderRadius:"0",height:"2rem"}}
                onClick={handleSubmit}
                ><h3 class="font-extrabold">Update Quiz</h3></Button>
                </div>
              </div>
            </div>
          </Form>
           )}
          </Formik>
    </>
  )
}

const mapStateToProps = ({auth, quiz}) => ({
  updateQuizNameQuizId:quiz.updateQuizNameQuizId,
  updateQuizNameQuizIdError:quiz.updateQuizNameQuizIdError,
  showQuiz: quiz.showQuiz, 
  fetchingQuizName:quiz.fetchingQuizName,
 // quizId:quiz.showQuiz.quizId
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {      
      updateQuizNameByQuizId,
      getQuizName,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(UpdateQuizName);