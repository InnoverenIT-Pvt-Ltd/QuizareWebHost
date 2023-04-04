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
function UpdateQuizName(props) {
  
  const history = useHistory();
  function handleCallBack(data) {
    history.push(`/editQuizS`);
  }
  return (
    <>
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
            (data)=>handleCallBack(data))
            
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
          <Form>
            <div>
              <Card>
              <Field
                  name="quizName"
                  onChangeText={handleChange('quizName')}
                  component={InputComponent}
                  value={`${values.quizName}`}
                 // placeholder="Enter Quiz Name"
                />
                 <Field
                  name="duration"
                  onChangeText={handleChange('duration')}
                  component={InputComponent}
                  value={`${values.duration}`}
                 // placeholder="Enter Response time per question"
                />
                 <Button
                type="primary"
                onClick={handleSubmit}
                >Update Quiz Name</Button>
              </Card>
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