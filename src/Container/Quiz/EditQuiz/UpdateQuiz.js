import React, { useEffect, useState } from "react";
import { Field, Formik } from "formik";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  getQuestionList,
  updateQuestionsInQuiz,
  deleteQuestion,
} from "../QuizAction";
import AddModal from "./AddModal";
import { Button, Card } from "antd";
import { useHistory } from "react-router-dom";
import { InputComponent } from "../../Components/Forms/Formik/InputComponent";

function Quiz(props) {

  const history = useHistory();
 
  function handleCallBack(data) {
    history.push(`/updatequiz`);
  }
  const [count, setCount] = useState(props.i);
  const [selectedCategory, setSelectedCategory] = useState("");
  // const handleCount = () => setCount(count + 1);
  const handleCategory = (id) => setSelectedCategory(id);
  const [modalVisible, setModalVisible] = useState(false);
  function handleCallBack(data, resetForm) {
    if (data === "success") {
      //  alert("Question updated successfully")
      // setSelectedCategory("")
      // resetForm()
      //  handleCount()
    } else {
      console.log("Wrong");
    }
  }
  //  useEffect(()=>{
  //   setCount(props.i)
  //  },[props.i])
  return (
    <>
      <Formik
        initialValues={{
          quizHostId: "QH4472404666122022",
          quizId: props.item.quizId,
          // categoryId: props.item.categoryId,
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
            props.item.id,
            (data) => handleCallBack(data, resetForm)
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
                    placeholder="Question"
                    name="question"
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
                  onClick={() => props.deleteQuestion(props.item.id)}
                >Delete</Button>
                <Button  onClick={handleSubmit}>
                  {" "}
                  Update
                </Button>
                <Button  onClick={() => setModalVisible(true)}>Add</Button>
              </div>
              <AddModal
                setModalVisible={setModalVisible}
                modalVisible={modalVisible}
                item={props.item}
              />
            </div>
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
