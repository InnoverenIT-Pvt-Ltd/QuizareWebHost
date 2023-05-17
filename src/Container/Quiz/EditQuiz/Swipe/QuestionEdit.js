import React, { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button, Card } from "antd";
import {
  getQuestionList,
  updateQuestionsInQuiz,
  deleteQuestion,
} from "../../QuizAction";
import { InputComponent } from "../../../../Components/Forms/Formik/InputComponent";
function QuestionEdit(props) {
  const { item } = props.item;
  const [count, setCount] = useState(props.item);
  console.log("id", props.item.id);
  return (
    <>
      <Formik
        initialValues={{
          quizHostId: "QH4472404666122022",
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
          <Form>
            <div>
              <div>
                {/* Container */}
                <div>
                  <Card
                    style={{
                      WebkitBoxShadow: "0 0 10px 2px rgb(46 46 46 / 39%)",
                    }}
                  >
                    <Card style={{ fontSize: 22, alignSelf: "center" }}>
                      <h1>Question {count.number || null}</h1>
                    </Card>

                    <Field
                      style={{ textAlign: "center" }}
                      name="question"
                      value={`${values.question}`}
                      component={InputComponent}
                      onChangeText={handleChange("question")}
                    />

                    <Field
                      component={InputComponent}
                      value={`${values.option1}`}
                      placeholder="Correct answer"
                      name="option1"
                      onChangeText={handleChange("option1")}
                    />

                    <Field
                      component={InputComponent}
                      value={`${values.option2}`}
                      placeholder="Option 2"
                      name="option2"
                      onChangeText={handleChange("option2")}
                    />

                    <Field
                      component={InputComponent}
                      value={`${values.option3}`}
                      placeholder="Option 3"
                      name="option3"
                      onChangeText={handleChange("option3")}
                    />

                    <Field
                      component={InputComponent}
                      value={`${values.option4}`}
                      placeholder="Option 4"
                      name="option4"
                      onChangeText={handleChange("option4")}
                    />
                     <div className="flex flex-row justify-center">
                    <Button
                      title={""}
                      type="primary"
                      onClick={() => props.deleteQuestion(props.item.id)}
                    >
                      Delete
                    </Button>
                    <Button
                      title={""}
                      type="primary"
                      onClick={() => handleSubmit()}
                    >
                      Update
                    </Button>
                    {/* <Button


                    onClick={() => setModalVisible(true)}
                  
                  >Add</Button> */}
                  </div>
                  </Card>
                 
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
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getQuestionList,
      updateQuestionsInQuiz,
      deleteQuestion,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(QuestionEdit);
