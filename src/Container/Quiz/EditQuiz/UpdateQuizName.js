import React from 'react'
import { connect } from 'react-redux';
import { Formik, Form, FastField, Field, FieldArray } from "formik";
import { bindActionCreators } from 'redux';
import { useHistory } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { updateQuizNameByQuizId, getQuizName } from '../QuizAction';
import { Card, Button } from 'antd';
import { InputComponent } from '../../../Components/Forms/Formik/InputComponent';
import { useEffect } from 'react';
import MainHeader from '../../../Components/Mainheader';
function UpdateQuizName(props) {

  const history = useHistory();
  function handleCallBack(data) {
    history.push(`/swipeIn`);
  }
  function handleBackHost() {
    history.push(`/finalize`);
  }
  return (
    <>
      <MainHeader />
      <Formik
        initialValues={{
          duration: props.finalizeQuiz && props.finalizeQuiz.duration,
          quizName: props.finalizeQuiz && props.finalizeQuiz.quizName,
          quizHostId: props.quizHostId,
        }}

        onSubmit={(values) => {

          props.updateQuizNameByQuizId(
            {
              ...values
            },
            props.finalizeQuiz && props.finalizeQuiz.quizId,
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
          <Form class="flex justify-center max-sm:w-11/12 mt-8 m-auto md:mt-12  w-2/5 ">
            <div class="shadow-2xl border-solid w-11/12 flex justify-center items-center  p-1 max-sm:m-0 h-h34 rounded-2xl md:m-auto">
              <div class="w-11/12" >
                <div>
                  <label>Quiz name</label>
                  <Field
                    name="quizName"
                    onChangeText={handleChange('quizName')}
                    component={InputComponent}
                    value={`${values.quizName}`}
                  // placeholder="Enter Quiz Name" 
                  />
                </div>
                <div class="mt-6">
                  <label>Response time per Question (Seconds)</label>
                  <Field
                    name="duration"
                    onChangeText={handleChange('duration')}
                    component={InputComponent}
                    value={`${values.duration}`}
                  // placeholder="Enter Response time per question"
                  />
                </div>
                <div class="flex flex-row mt-4 justify-between">
                  <Button
                    type="primary"
                    style={{ width: "10rem", backgroundColor: "white" }}
                    onClick={handleSubmit}
                  >
                    <h3 class="font-extrabold">Update Quiz</h3>
                  </Button>
                  <Button
                    type="primary"
                    style={{ width: "10rem", backgroundColor: "white" }}
                    onClick={() => handleBackHost()}>
                    <h3 class="font-extrabold">Back</h3>
                  </Button>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  )
}

const mapStateToProps = ({ auth, quiz }) => ({
  updateQuizNameQuizId: quiz.updateQuizNameQuizId,
  updateQuizNameQuizIdError: quiz.updateQuizNameQuizIdError,
  showQuiz: quiz.showQuiz,
  finalizeQuiz: quiz.finalizeQuiz,
  fetchingQuizName: quiz.fetchingQuizName,
  quizHostId: auth.userDetails.userId
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