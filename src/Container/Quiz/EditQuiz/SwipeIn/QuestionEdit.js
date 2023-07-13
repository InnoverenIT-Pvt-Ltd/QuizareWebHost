import React, { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button, Card } from "antd";
import { Link, useHistory } from "react-router-dom";
import {
  getQuestionList,
  updateQuestionsInQuiz,
  deleteQuestion
} from "../../QuizAction";
import { InputComponent } from "../../../../Components/Forms/Formik/InputComponent";
function QuestionEdit(props) {

  const handleDeleteQuestion = (id) => {
    props.deleteQuestion(id, handleCallBack)
  }
  const history = useHistory();

  const handleCallBack = () => {
    history.push(`/updateQuizName`)
  }
  return (
    <>
      <Formik
        initialValues={{
          quizHostId: props.quizHostId,
          quizId: props.item.quizId,
          categoryId: props.item.categoryId,
          question: props.item.question,
          option1: props.item.option1,
          option2: props.item.option2,
          option3: props.item.option3,
          option4: props.item.option4,
        }}
        onSubmit={(values, { resetForm }) => {
          // alert(JSON.stringify(values))
          props.updateQuestionsInQuiz(
            {
              ...values,
            },
            props.item.id
            //(data)=>handleCallBack(data,resetForm)
          );
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
          <Form class=" max-sm:w-full h-h31  m-auto md:mt-12  w-wk  h-h50  ">
            <div className="w-full my-2 flex justify-center m-auto ">
              <div>
                {/* Container */}
                <div>
                  <div className="bg-white rounded-2xl shadow-2xl border-solid flex justify-center mt-3 flex-col "
                    style={{
                      WebkitBoxShadow: "0 0 10px 2px rgb(46 46 46 / 39%)",
                      // width: "-webkit-fill-available",
                      //height: "max-content"
                    }}
                  >
                    <div class=" w-full flex justify-center flex-col  p-4 max-sm:m-0 h-h31 rounded-2xl md:w-w30 m-auto">
                      <div style={{ fontSize: 22, alignSelf: "center" }}>
                        <h3 class="flex justify-center text-xl">Question {props.number + 1}</h3>
                      </div>
                      <div class="mt-4">
                        <Field
                          name="question"
                          value={`${values.question}`}
                          component={InputComponent}
                          onChangeText={handleChange("question")}
                        />
                      </div>
                      <div class="mt-1">
                        <Field
                          component={InputComponent}
                          value={`${values.option1}`}
                          placeholder="Correct answer"
                          style={{ border: "2px solid #07dd07" }}
                          name="option1"
                          onChangeText={handleChange("option1")}
                        />
                      </div>
                      <div class="mt-1">
                        <Field
                          component={InputComponent}
                          value={`${values.option2}`}
                          placeholder="Option 2"
                          name="option2"
                          onChangeText={handleChange("option2")}
                        />
                      </div>
                      <div class="mt-1">
                        <Field
                          component={InputComponent}
                          value={`${values.option3}`}
                          placeholder="Option 3"
                          name="option3"
                          onChangeText={handleChange("option3")}
                        />
                      </div>
                      <div class="mt-1">
                        <Field
                          component={InputComponent}
                          value={`${values.option4}`}
                          placeholder="Option 4"
                          name="option4"
                          onChangeText={handleChange("option4")}
                        />
                      </div>
                      <div>
                        <div class="flex flex-row mt-4 justify-between">
                          <Button
                            title={""}
                            type="primary"
                            onClick={() => handleSubmit()}
                            style={{ width: "9rem", backgroundColor: "white" }}
                          >
                            <h3>Update Question</h3>
                          </Button>
                          <Button
                            title={""}
                            type="primary"
                            onClick={() => handleDeleteQuestion(props.item.id, handleCallBack)}
                            style={{ width: "9rem", backgroundColor: "white", marginLeft: "0.5rem" }}
                          >
                            <h3> Delete Question</h3>
                          </Button>
                          <Button
                            title={""}
                            type="primary"
                            style={{ width: "7rem" }}
                            onClick={() => props.backTo()}

                          >Back To Quiz</Button>

                        </div>
                        <div class=" flex flex-col h-24 justify-between mt-4">
                          <Link to="/addquizin">
                            <Button
                              title={""}
                              type="primary"
                              onClick={() => handleSubmit()}
                              style={{ backgroundColor: "white" }}
                            >
                              <h3>Add Question</h3>
                            </Button>
                          </Link>
                          <Link to="/finalize">
                            <Button
                              title={""}
                              type="primary"
                              onClick={() => handleSubmit()}
                              style={{ backgroundColor: "white" }}
                            >
                              <h3>Finalize Quiz</h3>
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Buttons */}
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
const mapStateToProps = ({ auth, quiz }) => ({
  fetchingQuizName: quiz.fetchingQuizName,
  fetchingQuizNameError: quiz.fetchingQuizNameError,
  showQuiz: quiz.showQuiz,
  quizId: quiz.showQuiz.quizId,
  category: quiz.category,
  questionList: quiz.questionList,
  quizHostId: auth.userDetails.userId,
  finalizeQuiz: quiz.finalizeQuiz,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getQuestionList,
      updateQuestionsInQuiz,
      deleteQuestion
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(QuestionEdit);
