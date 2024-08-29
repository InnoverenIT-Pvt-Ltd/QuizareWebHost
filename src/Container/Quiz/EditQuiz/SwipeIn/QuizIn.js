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

function QuizIn(props) {
  const [finalise, setFinalise]= useState(false)
  useEffect(() => {
    props.getCategory();
    props.getQuizName(props.quizDetails.quizId);
    props.getQuestionList(props.showQuiz.quizId);
  }, []);

  useEffect(() => {
    setQuestions(props.showQuiz.noOfQuestions + 1)
  }, [props.showQuiz.noOfQuestions + 1])

  const data = props.showQuiz && props.showQuiz.noOfQuestions

  const [questions, setQuestions] = useState(props.showQuiz.noOfQuestions + 1);


  function handleQuestion() {
    setQuestions(questions + 1);
  }
  console.log(questions);

  const [selectedCategory, setSelectedCategory] = useState("");
  // const handleCount = () => setCount(count + 1);

  const handleCategory = (id) => setSelectedCategory(id);

  console.log(props.category);

  const history = useHistory();

  const goToFinalize = () => {
    history.push(`/finalize`)
  }

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
            <div>
              {/* <div class="flex justify-center mt-2">
                <h2 class="text-2xl">
                  {props.showQuiz && props.showQuiz.quizName}
                </h2>
              </div> */}
              
              {/* Container */}
              <Form class="flex h-hk">
              <div className="w-[20%] bg-[#6245C6]"></div>
              <div class=" max-sm:w-full flex items-center flex-col h-[93vh] w-[80%] ">
              <div className="w-full  flex justify-center flex-col ">
              <div class="w-wk flex justify-center flex-col items-center">
                      <h3 class="flex justify-center text-xl">
                        {" "}
                        Question {questions || null}
                      </h3>
                      <hr class="h-px bg-black border-2 w-wk mt-4 border-black"/>
                      {/* <TouchableOpacity
                  // we can't use perscentge in reactNative
                  
                    > */}
                      <div class="mt-4 w-wk p-4">
                        <div>
                          <Field
                            component={InputComponent}
                            onChangeText={handleChange("question")}
                            placeholder="Question"
                            style={{ width: "100%", height: "3rem",borderRadius:"0.25rem" }}
                            name="question"

                          // onChangeText={handleChange('questionName')}
                          />
                        </div>
                        {/* </TouchableOpacity> */}
                        {/*               
                  <TouchableOpacity
                 
                  
                  > */}
                    <div className="flex justify-between mt-3">
                    <div class="w-[47.5%]">
                          <Field
                            // multiline
                            // value={values.option1}
                            // numberOfLines={5}
                            component={InputComponent}
                            onChangeText={handleChange("option1")}
                            placeholder="A.           Add answer 1"
                            style={{ width: "100%", height: "3rem",borderRadius:"0.25rem" }}
                            name="option1"

                          // onChangeText={handleChange('option1')}
                          />
                        </div>
                        {/* </TouchableOpacity> */}

                        {/* <TouchableOpacity
                    
                    
                    > */}
                        <div class="w-[47.5%]">
                          <Field
                            // multiline
                            // value={values.option2}
                            // numberOfLines={5}
                            component={InputComponent}
                            onChangeText={handleChange("option2")}
                             placeholder="B.           Add answer 2"
                            name="option2"

                          // onChangeText={handleChange('option2')}
                          />
                        </div>
                        </div>
                        {/* </TouchableOpacity>

                  <TouchableOpacity
                  
                
                    > */}
                     <div className="flex justify-between mt-3">
                     <div class="w-[47.5%]">
                          <Field
                            // multiline
                            // value={values.option3}
                            // numberOfLines={5}
                            component={InputComponent}
                            onChangeText={handleChange("option3")}
                          placeholder="C.           Add answer 3 (Optional)"
                          style={{ width: "100%", height: "3rem",borderRadius:"0.25rem" }}
                            name="option3"
                          />
                        </div>
                        {/* </TouchableOpacity> */}

                        {/* <TouchableOpacity
                > */}
                         <div class="w-[47.5%]">
                          <Field
                            // multiline
                            // value={values.option4}
                            // numberOfLines={5}
                           placeholder="D.           Add answer 4 (Optional)"
                           style={{ width: "100%", height: "3rem",borderRadius:"0.25rem" }}
                            name="option4"
                            component={InputComponent}
                            onChangeText={handleChange("option4")}
                          />
                        </div>
                        </div>
                        {/* </TouchableOpacity> */}
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
                    <div class="flex justify-between p-6 w-wk">    
                <div class="">
                  <Button
                    style={{  height: "3rem",backgroundColor:"#3B16B7",borderRadius:'0.25rem' }}
                    type="primary"
                    // title={'Add New Questions'}
                    // titleStyle={externalStyle.titleStyle}
                    // containerStyle={externalStyle.containerStyleBD}
                    // buttonStyle={externalStyle.buttonStyleAdd}
                    onClick={handleSubmit}
                  // Loading={props.addingQuestion}
                  // onPress={() => props.navigation.navigate('Quiz Addquestions')}
                  >
                     <h3 class="font-medium text-white text-base">+ Add question </h3>
                  </Button>
                </div>
                <div class="">
                <Button type="primary"
                   style={{  height: "3rem",backgroundColor:"#3B16B7",borderRadius:'0.25rem' }}
                  onClick={() => {
                    handleSubmit()
                    //goToFinalize()
                    setFinalise(true);
                  }}
                >
                   <h3 class="font-medium text-white text-base">Finalize Quiz</h3>
                </Button>
              </div>
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
              </Form>
            
              {/* Buttons */}
            </div>
          )}
        </Formik>
        <Finalisedrawer 
                showQuiz={props.showQuiz}
                  finalise={finalise}
                  setFinalise={setFinalise}
                />
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
  quizId: quiz.showQuiz.quizId,
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(QuizIn));

// import React, { useEffect, useState } from "react";
// import { Field, Formik, Form } from "formik";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as Yup from "yup";
// import { withRouter } from "react-router-dom";
// import {
//   deleteQuestion,
//   addQuestion,
//   getQuizName,
//   getCategory,
//   getQuestionList
// } from "../../QuizAction";
// import { Button, Card } from "antd";
// import { InputComponent } from "../../../../Components/Forms/Formik/InputComponent";
// import MainHeader from "../../../../Components/Mainheader";
// import Finalisedrawer from "../../Finalisedrawer";

// const QuizzSchema = Yup.object().shape({
//   question: Yup.string().required("Input needed!"),
//   option1: Yup.string().required("Input needed!"),
//   option2: Yup.string().required("Input needed!"),
// });

// function QuizIn(props) {
//   const [finalise, setFinalise] = useState(false);
//   const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);
//   const [questions, setQuestions] = useState(props.showQuiz.noOfQuestions + 1);

//   useEffect(() => {
//     props.getCategory();
//     props.getQuizName(props.quizDetails.quizId);
//     props.getQuestionList(props.showQuiz.quizId);
//   }, []);

//   useEffect(() => {
//     setQuestions(props.showQuiz.noOfQuestions + 1);
//   }, [props.showQuiz.noOfQuestions]);

//   const handleQuestionSelect = (index) => {
//     setSelectedQuestionIndex(index);
//   };

//   const handleQuestionContent = (index) => {
//     if (props.questionList && props.questionList[index]) {
//       return props.questionList[index];
//     }
//     return null;
//   };

//   return (
//     <>
//       <MainHeader />
//       <Formik
//         initialValues={{
//           quizHostId: props.quizHostId,
//           quizId: props.showQuiz?.quizId,
//           categoryId: "",
//           question: "",
//           option1: "",
//           option2: "",
//           option3: "",
//           option4: "",
//         }}
//         validationSchema={QuizzSchema}
//         onSubmit={(values, { resetForm }) => {
//           props.addQuestion({
//             ...values,
//             quizId: props.showQuiz?.quizId,
//             categoryId: "", // update as needed
//             number: questions,
//           }, props.showQuiz?.quizId);
//           resetForm();
//           setQuestions(questions + 1);
//         }}
//       >
//         {({ handleChange, handleBlur, handleSubmit, errors, values }) => (
//           <Form className="flex h-full">
//             <div className="w-[20%] bg-[#6245C6] p-4">
//               {props.questionList.map((item, i) => (
//                 <Card
//                   key={i}
//                   className={`cursor-pointer mb-2 ${i === selectedQuestionIndex ? 'bg-blue-200' : ''}`}
//                   onClick={() => handleQuestionSelect(i)}
//                 >
//                   Question {i + 1}
//                 </Card>
//               ))}
//             </div>
//             <div className="w-[80%] flex flex-col h-[93vh]">
//               <div className="w-full flex flex-col items-center">
//                 {selectedQuestionIndex !== null && (
//                   <div className="w-full p-4">
//                     <h3 className="text-xl">Question {selectedQuestionIndex + 1}</h3>
//                     <hr className="w-full my-4 border-black" />
//                     <div>
//                       {handleQuestionContent(selectedQuestionIndex) && (
//                         <>
//                           <p><strong>Question:</strong> {handleQuestionContent(selectedQuestionIndex).question}</p>
//                           <p><strong>Option A:</strong> {handleQuestionContent(selectedQuestionIndex).option1}</p>
//                           <p><strong>Option B:</strong> {handleQuestionContent(selectedQuestionIndex).option2}</p>
//                           {handleQuestionContent(selectedQuestionIndex).option3 && (
//                             <p><strong>Option C:</strong> {handleQuestionContent(selectedQuestionIndex).option3}</p>
//                           )}
//                           {handleQuestionContent(selectedQuestionIndex).option4 && (
//                             <p><strong>Option D:</strong> {handleQuestionContent(selectedQuestionIndex).option4}</p>
//                           )}
//                         </>
//                       )}
//                     </div>
//                   </div>
//                 )}
//                 <Formik
//                   initialValues={{
//                     quizHostId: props.quizHostId,
//                     quizId: props.showQuiz?.quizId,
//                     categoryId: "",
//                     question: "",
//                     option1: "",
//                     option2: "",
//                     option3: "",
//                     option4: "",
//                   }}
//                   validationSchema={QuizzSchema}
//                   onSubmit={(values, { resetForm }) => {
//                     props.addQuestion({
//                       ...values,
//                       quizId: props.showQuiz?.quizId,
//                       categoryId: "", // update as needed
//                       number: questions,
//                     }, props.showQuiz?.quizId);
//                     resetForm();
//                     setQuestions(questions + 1);
//                   }}
//                 >
//                   {({ handleChange, handleBlur, handleSubmit, errors, values }) => (
//                     <Form>
//                       <div className="w-full p-4">
//                         <div>
//                           <Field
//                             component={InputComponent}
//                             onChange={handleChange("question")}
//                             placeholder="Question"
//                             className="w-full h-12 rounded-md"
//                             name="question"
//                           />
//                         </div>
//                         <div className="flex justify-between mt-3">
//                           <div className="w-[47.5%]">
//                             <Field
//                               component={InputComponent}
//                               onChange={handleChange("option1")}
//                               placeholder="A. Add answer 1"
//                               className="w-full h-12 rounded-md"
//                               name="option1"
//                             />
//                           </div>
//                           <div className="w-[47.5%]">
//                             <Field
//                               component={InputComponent}
//                               onChange={handleChange("option2")}
//                               placeholder="B. Add answer 2"
//                               className="w-full h-12 rounded-md"
//                               name="option2"
//                             />
//                           </div>
//                         </div>
//                         <div className="flex justify-between mt-3">
//                           <div className="w-[47.5%]">
//                             <Field
//                               component={InputComponent}
//                               onChange={handleChange("option3")}
//                               placeholder="C. Add answer 3 (Optional)"
//                               className="w-full h-12 rounded-md"
//                               name="option3"
//                             />
//                           </div>
//                           <div className="w-[47.5%]">
//                             <Field
//                               component={InputComponent}
//                               onChange={handleChange("option4")}
//                               placeholder="D. Add answer 4 (Optional)"
//                               className="w-full h-12 rounded-md"
//                               name="option4"
//                             />
//                           </div>
//                         </div>
//                       </div>
//                       <div className="flex justify-between p-6">
//                         <Button
//                           style={{ height: "3rem", backgroundColor: "#3B16B7", borderRadius: '0.25rem' }}
//                           type="primary"
//                           onClick={handleSubmit}
//                         >
//                           <h3 className="font-medium text-white text-base">+ Add question</h3>
//                         </Button>
//                         <Button
//                           type="primary"
//                           style={{ height: "3rem", backgroundColor: "#3B16B7", borderRadius: '0.25rem' }}
//                           onClick={() => {
//                             handleSubmit();
//                             setFinalise(true);
//                           }}
//                         >
//                           <h3 className="font-medium text-white text-base">Finalize Quiz</h3>
//                         </Button>
//                       </div>
//                     </Form>
//                   )}
//                 </Formik>
//               </div>
//             </div>
//           </Form>
//         )}
//       </Formik>
//       <Finalisedrawer
//         showQuiz={props.showQuiz}
//         finalise={finalise}
//         setFinalise={setFinalise}
//       />
//     </>
//   );
// }

// const mapStateToProps = ({ auth, quiz }) => ({
//   fetchingQuizName: quiz.fetchingQuizName,
//   fetchingQuizNameError: quiz.fetchingQuizNameError,
//   showQuiz: quiz.showQuiz,
//   quizDetails: quiz.quizDetails,
//   fetchingQuestionList: quiz.fetchingQuestionList,
//   quizId: quiz.showQuiz.quizId,
//   category: quiz.category,
//   questionList: quiz.questionList,
//   quizHostId: auth.userDetails.userId
// });

// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators(
//     {
//       deleteQuestion,
//       addQuestion,
//       getQuizName,
//       getCategory,
//       getQuestionList
//     },
//     dispatch
//   );

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(QuizIn));
