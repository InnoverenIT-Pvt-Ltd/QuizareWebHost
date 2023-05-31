import React, { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button, Card } from "antd";
import { Link } from "react-router-dom";
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
          <Form class=" max-sm:w-full h-h31  m-auto md:mt-12  w-1/5  h-h50  ">
          <div className="w-full my-2 flex justify-center m-auto ">
              <div>
                {/* Container */}
                <div>
                  <Card
                    style={{
                      WebkitBoxShadow: "0 0 10px 2px rgb(46 46 46 / 39%)",
                      width:"18rem",
                      height:"26rem"
                    }}
                  >
                    <Card style={{ fontSize: 22, alignSelf: "center" }}>
                      <h3 class="flex justify-center text-xl">Question {count.number || null}</h3>
                    </Card>
                    <div class="mt-1">
                    <Field
                      style={{ textAlign: "center" }}
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
                     <div className="flex flex-row justify-center mt-8">
                    <Button
                      title={""}
                      type="primary"
                      onClick={() => props.deleteQuestion(props.item.id)}
                      style={{width:"7rem"}}
                    >
                      Delete
                    </Button>
                    <Button
                      title={""}
                      type="primary"
                      onClick={() => handleSubmit()}
                      style={{width:"7rem"}}
                    >
                      Update
                    </Button>
                    <Link to="/addquizin">
                    <Button
                      title={""}
                      type="primary"
                      onClick={() => handleSubmit()}
                      style={{width:"7rem"}}
                    >
                      Add Question
                    </Button>
                    </Link>
                    <Link to="/finalize">
                    <Button
                      title={""}
                      type="primary"
                      onClick={() => handleSubmit()}
                      style={{width:"7rem"}}
                    >
                      Finalize Quiz
                    </Button>
                    </Link>
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
