import React, { useEffect, useState } from "react";
import { Field, Formik, Form } from "formik";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Yup from "yup";
import { Link, withRouter, useHistory } from "react-router-dom";
import {
  deleteQuestion,
  addQuestion,
  getQuizName,
  getCategory, getQuestionList
} from "../../QuizAction";
import { Button, Card, Input } from "antd";
import { InputComponent } from "../../../../Components/Forms/Formik/InputComponent";
import SubHeader from "../../../../Components/SubHeader";
import MainHeader from "../../../../Components/Mainheader";
import { BundleLoader } from "../../../../Components/Placeholder";
import Finalisedrawer from "../../Finalisedrawer";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const QuizzSchema = Yup.object().shape({
  question: Yup.string().required("Input needed!"),
  option1: Yup.string().required("Input needed!"),
  option2: Yup.string().required("Input needed!"),
});
//import AllQuiz from './AllQuiz';

function QuizinLibrary(props) {
  const [finalise, setFinalise] = useState(false);
  useEffect(() => {
    props.getCategory();
    props.getQuizName(props.match.params.quizId);
    props.getQuestionList(props.match.params.quizId);
  }, []);

  useEffect(() => {
    setQuestions(props.showQuiz.noOfQuestions + 1)
  }, [props.showQuiz.noOfQuestions + 1])

  const data = props.showQuiz && props.showQuiz.noOfQuestions

  const [questions, setQuestions] = useState(props.showQuiz.noOfQuestions + 1);
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  
  const handleQuestionSelect = (index) => {
    setSelectedQuestionIndex(index);
    setSelectedQuestion(props.questionList[index]);
  };

  function handleQuestion() {
    setQuestions(questions + 1);
  }
  console.log(questions);

  const [selectedCategory, setSelectedCategory] = useState("");
  // const handleCount = () => setCount(count + 1);

  const handleCategory = (id) => setSelectedCategory(id);

  console.log(props.category);

  const history = useHistory();

  // const goToFinalize = () => {
  //   history.push(`/finalize`)
  // }

  return (

    <>

      <>
        <MainHeader />
        {/* {props.fetchingQuestionList? */}

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
                categoryId: selectedCategory, number: questions,
              },
              props.showQuiz && props.showQuiz.quizId
            );
            resetForm();
            setSelectedCategory("");
            handleQuestion();
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
            <div className="h-[91vh]">
              <div class="flex justify-center mt-2">
                <h2 class="text-2xl">
                  {props.showQuiz && props.showQuiz.quizName}
                </h2>
              </div>
              <hr className="h-px bg-black border-2 w-wk md:mt-4 border-black" />
              
              <Form class=" max-sm:w-full  m-auto   w-wk  h-h50  ">
            
                <div className="w-wk  flex justify-center m-auto ">
                <div className="w-[20%] bg-[#6245C6] p-4 max-sm:hidden overflow-y-auto h-[84vh]" style={{scrollbarWidth:"thin"}}>
                {props.questionList.map((item, i) => (
                  <Card
                    key={i}
                    className={`cursor-pointer mb-2 ${
                      i === selectedQuestionIndex ? "bg-blue-200" : ""
                    }`}
                   onClick={() => handleQuestionSelect(i)}
                  >
                    <div className="flex flex-col">
                      <div className="text-base font-semibold">
                        Question {i + 1}
                      </div>
                      <div className="text-sm font-semibold">{item.question}</div>
                    </div>
                  </Card>
                ))}
              </div>
                  <div class=" border-solid w-wk flex justify-center flex-col items-center  p-2 max-sm:m-0 h-max rounded-2xl md:m-auto">
                    <div class=" flex justify-center flex-col w-full">
                      <h3 class="flex justify-center text-xl">
                        {" "}
                        Question {questions || null}
                      </h3>
                      
                     
                      <div class="mt-4">
                        <div>
                          <Field
                            component={InputComponent}
                            onChangeText={handleChange("question")}
                            placeholder="Question"
                            name="question"
                            style={{ width: "100%", height: "3rem", borderRadius: "0.25rem" }}
                          // onChangeText={handleChange('questionName')}
                          />
                        </div>
                        <div className="flex justify-between mt-12">
                        <div className="w-[47.5%]">
                          <Field
                            component={InputComponent}
                            onChangeText={handleChange("option1")}
                            placeholder="A. Add Correct Answer"
                            name="option1"
                            style={{ width: "100%", height: "3rem", borderRadius: "0.25rem" }}
                          // onChangeText={handleChange('option1')}
                          />
                        </div>
                       
                        <div className="w-[47.5%]">
                          <Field
                            component={InputComponent}
                            onChangeText={handleChange("option2")}
                            placeholder="B. Add answer 2"
                            name="option2"
                            style={{ width: "100%", height: "3rem", borderRadius: "0.25rem" }}
                          // onChangeText={handleChange('option2')}
                          />
                        </div>
                       </div>
                       <div className="flex justify-between mt-12">
                        <div className="w-[47.5%]">
                          <Field 
                            component={InputComponent}
                            onChangeText={handleChange("option3")}
                           placeholder="B. Add answer 2"
                            name="option3"
                            style={{ width: "100%", height: "3rem", borderRadius: "0.25rem" }}
                          />
                        </div>
                       
                        <div className="w-[47.5%]">
                          <Field
                           placeholder="C. Add answer 3 (Optional)"
                            name="option4"
                            component={InputComponent}
                            onChangeText={handleChange("option4")}
                            style={{ width: "100%", height: "3rem", borderRadius: "0.25rem" }}
                          />
                        </div>
                        </div>
                      </div>
                      {/* <div class=" max-sm:flex flex-wrap justify-center mt-2 md:w-full  md:grid grid-cols-3 justify-items-center">
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

                      
                      </div> */}
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
                    <div class="max-sm: flex flex-row w-wk  justify-between items-center mt-4 ">
                <div class="mr-1 ">
                  <Button
                      style={{ height: "3rem", backgroundColor: "#3B16B7", borderRadius: '0.25rem',width:"9rem" }}
                    type="primary"
                   
                    onClick={handleSubmit}
                 
                  >
                   <h3 className="font-medium text-white text-base">+ Add question</h3>
                  </Button>
                </div>
                <div class="">
                <Button type="primary"
                  style={{ height: "3rem", backgroundColor: "#3B16B7", borderRadius: '0.25rem',width:"9rem" }}
                  onClick={() => {
                    handleSubmit()
                    // goToFinalize()
                    setFinalise(true)
                  }}
                >
               <h3 className="font-medium text-white text-base">Finalize</h3>
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
                  </div>
                </div>
              </Form>
             
              {/* Buttons */}
              <Finalisedrawer
        showQuiz={props.showQuiz}
        finalise={finalise}
        setFinalise={setFinalise}
      />
            </div>
          )}
        </Formik>
      </>
      {/* :null} */}
    </>
  );
}
const mapStateToProps = ({ auth, quiz }) => ({
  fetchingQuizName: quiz.fetchingQuizName,
  fetchingQuizNameError: quiz.fetchingQuizNameError,
  showQuiz: quiz.showQuiz,
  quizDetails: quiz.quizDetails,
  fetchingQuestionList: quiz.fetchingQuestionList,
  //   quizId: quiz.showQuiz.quizId,
  category: quiz.category,
  questionList: quiz.questionList,
  quizHostId: auth.userDetails.userId
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      deleteQuestion,
      addQuestion,
      getQuizName,
      getCategory, getQuestionList
    },
    dispatch
  );

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(QuizinLibrary));


