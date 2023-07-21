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
  console.log(props.selectedCategory);

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
          quizHostId: props.quizHostId,
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
              categoryId: selectedCategory,
              number: count,
            },
            props.showQuiz && props.showQuiz.quizId
          );
          resetForm();
          // setSelectedCategory("");
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
          
            {/* Container */}
            <Form class=" max-sm:w-full flex items-center flex-col  m-auto md:mt-12  w-2/5  h-h50  ">
              <div className="w-full my-2 flex justify-center m-auto ">
                <div class="shadow-2xl border-solid w-11/12 flex justify-center flex-col items-center  p-2 max-sm:m-0 h-max rounded-rounded2.8 md:m-auto">
                  <div class=" flex justify-center flex-col w-full">
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
                          placeholder="Enter your question"
                          name="question"
                          style={{ width: "100%", height: "5rem",borderRadius:"1.25rem",backgroundColor:"white" }}
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
                          placeholder="Enter correct answer"
                          name="option1"
                          style={{ width: "100%", height: "4.2rem",borderRadius:"1.25rem",backgroundColor:"#E4E2E2" }}
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
                          placeholder="Enter alternative"
                          name="option2"
                          style={{ width: "100%", height: "4.2rem",borderRadius:"1.25rem",backgroundColor:"#E4E2E2" }}

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
                          placeholder="Enter alternative"
                          name="option3"
                          style={{ width: "100%", height: "4.2rem",borderRadius:"1.25rem",backgroundColor:"#E4E2E2" }}
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
                          placeholder="Enter alternative"
                          name="option4"
                          component={InputComponent}
                          onChangeText={handleChange("option4")}
                          style={{ width: "100%", height: "4.2rem",borderRadius:"1.25rem",backgroundColor:"#E4E2E2" }}
                        />
                      </div>
                      {/* </TouchableOpacity> */}
                    </div>
                    <div class=" max-sm:flex flex-wrap justify-center mt-2 md:w-full  md:grid grid-cols-3 justify-items-center">
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
                  <div class="bg-black rounded-rounded2.8  mt-8 w-36 items-center flex justify-center" >
                <Button
                   style={{  height: "3rem",backgroundColor:"#565656",borderRadius:'3rem' }}
                  type="primary"
                  
                  onClick={handleSubmit}
                
                >
                 <h3 class="font-medium text-white text-2xl">Add </h3>
                </Button>
              </div>
                </div>
              
              </div>
              <div class="bg-black rounded-rounded3  mt-8 w-52 items-center flex justify-center" >
              {count >= 1 ?

                <Button type="primary"
                style={{  height: "5em",backgroundColor:"black",borderRadius:'3rem' }}
                  onClick={() => {
                    handleSubmit()
                    goToFinalize()
                  }}
                >
                <h3 class="font-medium text-white text-4xl">  Finalize</h3>
                </Button>
                : ""}
            </div>
            </Form>
          
            <div class="max-sm: flex flex-row justify-center items-center mt-4 ">
          
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
  quizHostId: auth.userDetails.userId
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
