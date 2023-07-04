import React, { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getQuestionList, updateQuestionsInQuiz, deleteQuestion } from "../QuizAction";
// import AddModal from "./AddModal";
import { Button, Card } from "antd";
import { useHistory } from "react-router-dom";
import { InputComponent } from '../../../Components/Forms/Formik/InputComponent';

function UpdateQuiz(props) {
  //  useEffect(()=>{
  //     setCount(props.i);
  //     // getQuestionList(props.route.params.quizId);
  //    },[props.i])
  const history = useHistory();


  function handleCallBack(data, resetForm) {

    alert("Question updated successfully")
    history.push(`/create`)
    setSelectedCategory("")
    resetForm()
    // handleCount()

  }

  const [count, setCount] = useState(props.i);
  const [selectedCategory, setSelectedCategory] = useState("");
  // const handleCount = () => setCount(count + 1);
  const handleCategory = (id) => setSelectedCategory(id);
  const [modalVisible, setModalVisible] = useState(false);

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
            props.item.id, (data) => handleCallBack(data, resetForm)
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
                  <Card>
                    <Card style={{ fontSize: 22, alignSelf: "center" }}>
                      <h1>Question{count || null}</h1>
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
                      style={{ textAlign: "center" }}
                      onChangeText={handleChange("option4")}
                    />
                  </Card>
                </div>

                {/* Buttons */}
                <div
                  style={{
                    flexDirection: "row",
                    margin: 5,
                    alignSelf: "center",
                  }}
                >
                  <Button
                    title={''}

                    onClick={() => props.deleteQuestion(props.item.id)}
                  >Delete</Button>
                  <Button
                    title={''}

                    onClick={handleSubmit}
                  >Update</Button>
                  <Button


                    onClick={() => setModalVisible(true)}
                  // onPress={() => props.navigation.navigate('Quiz Addquestions')}
                  >Add</Button>
                </div>
                {/* <AddModal
                setModalVisible={setModalVisible}
                modalVisible={modalVisible}
                item={props.item}
              /> */}
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
  quizHostId: auth.userDetails.userId
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

export default connect(mapStateToProps, mapDispatchToProps)(UpdateQuiz);
