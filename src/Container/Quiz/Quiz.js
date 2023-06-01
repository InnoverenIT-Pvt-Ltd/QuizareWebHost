import React, { useEffect, useState } from "react";
import { Field, Formik, Form } from "formik";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Yup from "yup";
import { Link, withRouter, useHistory } from "react-router-dom";
// import MainHeader from '../../Navigation/MainHeader';
import {
  deleteQuestion,
  addQuestion,
  getQuizName,
  getCategory,
} from "./QuizAction";
import { Button, Card, Input } from "antd";
import { InputComponent } from "../../Components/Forms/Formik/InputComponent";
import SubHeader from "../../Components/SubHeader";
import MainHeader from "../../Components/Mainheader";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const QuizzSchema = Yup.object().shape({
  question: Yup.string().required("Input needed!"),
  option1: Yup.string().required("Input needed!"),
  option2: Yup.string().required("Input needed!"),
});
//import AllQuiz from './AllQuiz';

function Quiz(props) {
  const [count, setCount] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");
  const handleCount = () => setCount(count + 1);
  const handleCategory = (id) => setSelectedCategory(id);

  // function handleCallBack(data,resetForm) {
  //   //alert(data);
  //    if(data==="success"){
  //    setSelectedCategory("")
  //     resetForm(),
  //     handleCount()
  //    }
  //    else{console.log("Wrong")}
  // };

  useEffect(() => {
    props.getCategory();
  }, []);
  console.log(props.category);

  const history = useHistory();

  const goToFinalize = () => {
    history.push(`/finalize`)
  }
  return (
    <>
      <MainHeader />
      <Formik
        initialValues={{
          // duration: "",
          // quizName: props.showQuiz.quizName,
          quizHostId: "QH4472404666122022",
          quizId: props.showQuiz && props.showQuiz.quizId,
          categoryId: selectedCategory,
          //categoryId:"CAT33389270105262022",
          question: "",
          option1: "",
          option2: "",
          option3: "",
          option4: "",
        }}
        validationSchema={QuizzSchema}
        onSubmit={(values, { resetForm }) => {
          //alert(JSON.stringify(values));
          props.addQuestion(
            {
              ...values,
              quizId: props.showQuiz && props.showQuiz.quizId,
              categoryId: selectedCategory, number: count,
            },
            props.showQuiz && props.showQuiz.quizId
          );
          resetForm();
          setSelectedCategory("");
          handleCount();
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
            <div class="flex justify-center mt-2">
              <h2 class="text-2xl">
                {props.showQuiz && props.showQuiz.quizName}
              </h2>
            </div>
            <div class="flex justify-center mt-3">
              {count >= 2 ?

                <Button type="primary"
                  onClick={() => {
                    handleSubmit()
                    goToFinalize()
                  }}
                >
                  Finalize Quiz
                </Button>
                : ""}
            </div>
            {/* Container */}
            <Form class=" max-sm:w-11/12  m-auto md:mt-12  w-1/5  h-h50  ">
              <div className="w-11/12 my-2 flex justify-center m-auto ">
                <div class="shadow-2xl border-solid w-11/12 flex justify-center flex-col items-center  p-2 max-sm:m-0 h-max rounded-2xl md:m-auto">
                  <div class=" flex justify-center flex-col">
                    <h3 class="flex justify-center text-xl">
                      {" "}
                      Question {count || null}
                    </h3>

                    {/* <TouchableOpacity
                  // we can't use perscentge in reactNative
                  
                    > */}
                    <div class="mt-4">
                      <div>
                        <Field
                          component={InputComponent}
                          onChangeText={handleChange("question")}
                          placeholder="Question"
                          name="question"

                        // onChangeText={handleChange('questionName')}
                        />
                      </div>
                      {/* </TouchableOpacity> */}
                      {/*               
                  <TouchableOpacity
                 
                  
                  > */}
                      <div class="mt-1">
                        <Field
                          // multiline
                          // value={values.option1}
                          // numberOfLines={5}
                          component={InputComponent}
                          onChangeText={handleChange("option1")}
                          placeholder="Correct answer"
                          name="option1"

                        // onChangeText={handleChange('option1')}
                        />
                      </div>
                      {/* </TouchableOpacity> */}

                      {/* <TouchableOpacity
                    
                    
                    > */}
                      <div class="mt-1">
                        <Field
                          // multiline
                          // value={values.option2}
                          // numberOfLines={5}
                          component={InputComponent}
                          onChangeText={handleChange("option2")}
                          placeholder="Option 2"
                          name="option2"

                        // onChangeText={handleChange('option2')}
                        />
                      </div>
                      {/* </TouchableOpacity>

                  <TouchableOpacity
                  
                
                    > */}
                      <div class="mt-1">
                        <Field
                          // multiline
                          // value={values.option3}
                          // numberOfLines={5}
                          component={InputComponent}
                          onChangeText={handleChange("option3")}
                          placeholder="Option 3"
                          name="option3"
                        />
                      </div>
                      {/* </TouchableOpacity> */}

                      {/* <TouchableOpacity
                > */}
                      <div class="mt-1">
                        <Field
                          // multiline
                          // value={values.option4}
                          // numberOfLines={5}
                          placeholder="Option 4"
                          name="option4"
                          component={InputComponent}
                          onChangeText={handleChange("option4")}
                        />
                      </div>
                      {/* </TouchableOpacity> */}
                    </div>
                    <div class="flex flex-wrap justify-center mt-2">
                      {!!props.category.length &&
                        props.category.map((item) => {
                          return (
                            <div class="m-1">
                              <Button style={{ borderColor: "black" }}>
                                <p
                                  style={{
                                    textAlign: "center",
                                    //color: '#6949FD',
                                    //fontSize:16,
                                    color:
                                      item.categoryId === selectedCategory
                                        ? "red"
                                        : "#6949FD",
                                  }}
                                  onClick={() =>
                                    handleCategory(item.categoryId)
                                  }
                                >
                                  {item.categoryName}
                                </p>
                              </Button>
                            </div>
                          );
                        })}

                      {/* <Card containerStyle={externalStyle.containerStyleC}>
                                <Text
                                    style={{
                                        textAlign: 'center',
                                        color: '#6949FD'
                                    }}
                                    onPress={() => alert('Nature')}
                                >
                                    Nature
                                </Text>
                            </Card>
                            <Card containerStyle={externalStyle.containerStyleC}>
                                <Text style={{ textAlign: 'center', color: '#6949FD' }}>Geography</Text>
                            </Card>
                            <Card containerStyle={externalStyle.containerStyleC}>
                                <Text
                                    style={{
                                        textAlign: 'center',
                                        color: '#6949FD'
                                    }}
                                    onPress={() => props.navigation.navigate('Quiz History')}
                                >
                                    History
                                </Text>
                            </Card> */}
                    </div>
                    {/* <View style={{ flexDirection: 'row' }}>
                        <Card containerStyle={externalStyle.containerStyleC}>
                                <Text style={{ textAlign: 'center', color: '#6949FD' }}>Sports</Text>
                            </Card>
                            <Card containerStyle={externalStyle.containerStyleC}>
                                <Text style={{ textAlign: 'center', color: '#6949FD' }}>Culture</Text>
                            </Card>
                            <Card containerStyle={externalStyle.containerStyleC}>
                                <Text style={{ textAlign: 'center', color: '#6949FD' }}>Mixed</Text>
                            </Card>
                        </View>           */}
                  </div>
                </div>
              </div>
            </Form>
            <div class="max-sm: flex flex-row justify-center items-center mt-4 ">
              <div class="mr-1 ">
                <Button
                  style={{
                    backgroundColor: "white",
                    borderColor: "black",
                    borderRadius: "0.75rem",
                    width: "5rem",
                    height: "2.2rem",
                  }}
                  type="primary"
                  // title={'Add New Questions'}
                  // titleStyle={externalStyle.titleStyle}
                  // containerStyle={externalStyle.containerStyleBD}
                  // buttonStyle={externalStyle.buttonStyleAdd}
                  onClick={handleSubmit}
                // Loading={props.addingQuestion}
                // onPress={() => props.navigation.navigate('Quiz Addquestions')}
                >
                  <h4 class="">Add </h4>
                </Button>
              </div>
              {/* <div class="mr-1">
                <Button
                  style={{
                    backgroundColor: "white",
                    borderColor: "black",
                    borderRadius: "0.75rem",
                    width: "5rem",
                    height: "2.2rem",
                  }}
                  type="primary"
                  // title={'Add New Questions'}
                  // titleStyle={externalStyle.titleStyle}
                  // containerStyle={externalStyle.containerStyleBD}
                  // buttonStyle={externalStyle.buttonStyleAdd}
                  onClick={handleSubmit}
                  Loading={props.addingQuestion}
                  // onPress={() => props.navigation.navigate('Quiz Addquestions')}
                >
                  <h4>Update</h4>
                </Button>
              </div>
              <div class="mr-1">
                <Button
                  style={{
                    backgroundColor: "white",
                    borderColor: "black",
                    borderRadius: "0.75rem",
                    width: "5rem",
                    height: "2.2rem",
                  }}
                  type="primary"
                  // title={'Add New Questions'}
                  // titleStyle={externalStyle.titleStyle}
                  // containerStyle={externalStyle.containerStyleBD}
                  // buttonStyle={externalStyle.buttonStyleAdd}
                  onClick={handleSubmit}
                  Loading={props.addingQuestion}
                  // onPress={() => props.navigation.navigate('Quiz Addquestions')}
                >
                  <h4>Delete </h4>
                </Button>
              </div> */}
            </div>
            {/* Buttons */}
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
      deleteQuestion,
      addQuestion,
      getQuizName,
      getCategory,
    },
    dispatch
  );

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Quiz));

// import React from 'react';
// import { Link ,withRouter} from "react-router-dom";
// import CreateQuiz from '../../Components/Quizs/CreateQuiz';
// import QuizHost from './QuizHost';

// function Quiz() {
//   return (
//     <div>
//       <QuizHost/>
//     </div>
//   )
// }

// export default withRouter (Quiz);
