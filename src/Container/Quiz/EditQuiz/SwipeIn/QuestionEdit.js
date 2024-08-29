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
import Finalisedrawer from "../../Finalisedrawer";
function QuestionEdit(props) {
  const [finalise, setFinalise]= useState(false)
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
          <Form class="flex h-hk w-wk">
             
             <div class=" max-sm:w-full flex items-center flex-col h-[93vh] w-wk ">
            
                {/* Container */}
              
                  
                    <div class=" w-full flex justify-center flex-col  p-4 max-sm:m-0   md:w-wwk ">
                      <div style={{ fontSize: 22, alignSelf: "center" }}>
                        <h3 class="flex justify-center text-xl">Question {props.number + 1}</h3>
                      </div>
                      <div class="mt-4">
                        <Field
                          name="question"
                          style={{ width: "100%", height: "3rem",borderRadius:"0.25rem" }}
                          value={`${values.question}`}
                          component={InputComponent}
                          onChangeText={handleChange("question")}
                        />
                      </div>
                      <div className="flex justify-between mt-3">
                      <div class="w-[47.5%]">
                        <Field
                          component={InputComponent}
                          value={`${values.option1}`}
                          placeholder="Correct answer"
                          style={{ width: "100%", height: "3rem",borderRadius:"0.25rem" }}
                          name="option1"
                          onChangeText={handleChange("option1")}
                        />
                      </div>
                      <div class="w-[47.5%]">
                        <Field
                          component={InputComponent}
                          value={`${values.option2}`}
                          style={{ width: "100%", height: "3rem",borderRadius:"0.25rem" }}
                          placeholder="Option 2"
                          name="option2"
                          onChangeText={handleChange("option2")}
                        />
                      </div>
                      </div>
                      <div className="flex justify-between mt-3">
                      <div class="w-[47.5%]">
                        <Field
                          component={InputComponent}
                          value={`${values.option3}`}
                          style={{ width: "100%", height: "3rem",borderRadius:"0.25rem" }}
                          placeholder="Option 3"
                          name="option3"
                          onChangeText={handleChange("option3")}
                        />
                      </div>
                      <div class="w-[47.5%]">
                        <Field
                          component={InputComponent}
                          value={`${values.option4}`}
                          style={{ width: "100%", height: "3rem",borderRadius:"0.25rem" }}
                          placeholder="Option 4"
                          name="option4"
                          onChangeText={handleChange("option4")}
                        />
                      </div>
                      </div>
                      <div class="flex flex-row mt-4 justify-between">
                        <div>
                        <Button
                          title={""}
                          type="primary"
                          onClick={() => handleSubmit()}
                          style={{ width: "9rem", backgroundColor: "#3B16B7" }}
                        >
                          <h3 className="text-white">Update Question</h3>
                        </Button>
                        </div>
                        <div>
                        <Button
                          title={""}
                          type="primary"
                          onClick={() => handleDeleteQuestion(props.item.id, handleCallBack)}
                          style={{ width: "9rem", backgroundColor: "#3B16B7" }}
                        >
                          <h3 className="text-white"> Delete Question</h3>
                        </Button>
                        </div>
                        <div>
                        <Link to="/addquizin">
                          <Button
                            title={""}
                            type="primary"
                            onClick={() => handleSubmit()}
                            style={{ width: "9rem", backgroundColor: "#3B16B7" }}
                          >
                            <h3 className="text-white">Add Question</h3>
                          </Button>          
                        </Link>
                        </div>
                        <div>
                        {/* <Link to="/finalize"> */}
                          <Button
                            title={""}
                            type="primary"
                            onClick={() => {
                              handleSubmit()
                              setFinalise(true);
                            }}
                            style={{ width: "9rem", backgroundColor: "#3B16B7" }}
                          >
                            <h3 className="text-white">Finalize Quiz</h3>
                          </Button>
                        {/* </Link> */}
                        </div>
                        <div>
                        <Button
                          title={""}
                          type="primary"
                          style={{ width: "9rem", backgroundColor: "#3B16B7" }}
                          onClick={() => handleCallBack()}

                        ><h3 className="text-white">Back To Quiz</h3></Button>
</div>
                      </div>

                     
                    </div>
                  
               

                {/* Buttons */}
             
            </div>
          </Form>
        )}
      </Formik>
      <Finalisedrawer 
                showQuiz={props.showQuiz}
                  finalise={finalise}
                  setFinalise={setFinalise}
                />
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
