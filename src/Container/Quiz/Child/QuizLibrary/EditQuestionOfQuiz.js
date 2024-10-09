// import React from "react";
// import { Field, Form, Formik } from "formik";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import { Button, Card } from "antd";
// import { MenuOutlined } from "@ant-design/icons";
// import {
//     getQuestionList,
//     handleBackToQuiz,
//     updateQuestionsInQuiz,
// } from "../../../../Container/Quiz/QuizAction";
// import { InputComponent } from "../../../../Components/Forms/Formik/InputComponent";
// import TextArea from "antd/es/input/TextArea";


// function EditQuestionofQuiz(props) {

//     console.log(props.item)
//     return (
//         <>
//             <Formik
//                 initialValues={{
//                     quizHostId: props.quizHostId,
//                     quizId: props.item.quizId,
//                     categoryId: props.item.categoryId,
//                     question: props.item.question,
//                     option1: props.item.option1,
//                     option2: props.item.option2,
//                     option3: props.item.option3,
//                     option4: props.item.option4,
//                 }}
//                 onSubmit={(values, { resetForm }) => {
//                     props.updateQuestionsInQuiz
//                         (
//                             {
//                                 ...values,
//                             },
//                             props.item.id,
//                             props.quizId
//                             //(data)=>handleCallBack(data,resetForm)
//                         );
//                 }}
//             >
//                 {({
//                     handleChange,
//                     handleBlur,
//                     handleSubmit,
//                     setFieldValue,
//                     errors,
//                     values,
//                 }) => (
//                     <Form class="flex h-hk w-wk">
                         
//                          <div class=" max-sm:w-full flex items-center flex-col h-[93vh] w-wk ">
//                          <div className="w-full  flex justify-center flex-col ">
//                                 {/* Container */}
//                                 <div class="w-wk flex justify-center flex-col items-center">
//                                 <div className="flex items-center justify-center ">
//                                 <Button
//                 className="md:hidden"
//                 icon={<MenuOutlined className="!text-black"/>}
//                 onClick={() => props.setIsDrawerVisible(true)}
//               > 
//               </Button>
//                                         {/* <Card style={{ fontSize: 22, alignSelf: "center" }}> */}
//                                             <h3 class="flex justify-center text-xl">Question {props.questionNo || null}</h3>
//                                             </div>
//                                         {/* </Card> */}
//                                         <hr class="h-px bg-black border-2 w-wk mt-4 border-black"/>
//                                         <div class="mt-4 w-wk p-4">
//                                             <Field
                                               
//                                                 name="question"
//                                                 value={`${values.question}`}
//                                                 component={InputComponent}
//                                                 onChangeText={() => handleChange("question")}
//                                                 style={{ width: "100%", height: "3rem",borderRadius:"0.25rem" }}
//                                             />
//                                         </div>
//                                         <div className="flex justify-between  w-wk p-4">
//                                         <div class="w-[47.5%]">
//                                             <Field
//                                                 component={InputComponent}
//                                                 value={`${values.option1}`}
//                                                 name="option1"
//                                                 onChangeText={() => handleChange("option1")}
//                                                 style={{ width: "100%", height: "3rem",borderRadius:"0.25rem" }}
//                                             />
//                                         </div>
//                                         <div class="w-[47.5%]">
//                                             <Field
//                                                 component={InputComponent}
//                                                 value={`${values.option2}`}
//                                                 placeholder="Option 2"
//                                                 name="option2"
//                                                 onChangeText={() => handleChange("option2")}
//                                                 style={{ width: "100%", height: "3rem",borderRadius:"0.25rem" }}
//                                             />
//                                         </div>
//                                         </div>
//                                         <div className="flex justify-between  w-wk p-4">
//                                         <div class="w-[47.5%]">
//                                             <Field
//                                                 component={InputComponent}
//                                                 value={`${values.option3}`}
//                                                 placeholder="Option 3"
//                                                 name="option3"
//                                                 onChangeText={() => handleChange("option3")}
//                                                 style={{ width: "100%", height: "3rem",borderRadius:"0.25rem" }}
//                                             />
//                                         </div>
//                                         <div class="w-[47.5%]">
//                                             <Field
//                                                 component={InputComponent}
//                                                 value={`${values.option4}`}
//                                                 placeholder="Option 4"
//                                                 name="option4"
//                                                 onChangeText={handleChange("option4")}
//                                                 style={{ width: "100%", height: "3rem",borderRadius:"0.25rem" }}
//                                             />
//                                         </div>
//                                         </div>
//                                         <div class="flex justify-between p-6 w-wk">    
//                                         <div class="" >
//                                             <Button
//                                                 title={""}
//                                                 type="primary"
//                                                 onClick={() => props.handleDeleteQuestion(props.item.id)}
//                                                 style={{  height: "3rem",backgroundColor:"#3B16B7",borderRadius:'0.25rem' }}
//                                             >
//                                                  <h3 class="font-medium text-white text-base">Delete</h3>
//                                             </Button>
//                                             </div>
//                                             <div class="" >
//                                             <Button
//                                                 title={""}
//                                                 type="primary"
//                                                 onClick={() => handleSubmit()}
//                                                 style={{  height: "3rem",backgroundColor:"#3B16B7",borderRadius:'0.25rem' }}
//                                             >
//                                                  <h3 class="font-medium text-white text-base">Update</h3>
//                                             </Button>
//                                             </div>
//                                             <div class="" >
//                         <Button
//                                                 title={""}
//                                                 type="primary"
//                                                 style={{  height: "3rem",backgroundColor:"#3B16B7",borderRadius:'0.25rem' }}
//                                                 onClick={() => props.backTo()}

//                                             ><h3 class="font-medium text-white text-xl">Back To Quiz</h3></Button>
//                                             </div>
//                                         </div>
                                        

//                                 </div>

//                                 {/* Buttons */}
//                             </div>
//                         </div>
                       
//                     </Form>
//                 )}
//             </Formik>
//         </>
//     );
// }
// const mapStateToProps = ({ auth, quiz }) => ({
//     fetchingQuizName: quiz.fetchingQuizName,
//     fetchingQuizNameError: quiz.fetchingQuizNameError,
//     showQuiz: quiz.showQuiz,
//     quizId: quiz.showQuiz.quizId,
//     category: quiz.category,
//     questionList: quiz.questionList,
//     quizHostId: auth.userDetails.userId
// });

// const mapDispatchToProps = (dispatch) =>
//     bindActionCreators(
//         {
//             getQuestionList,
//             updateQuestionsInQuiz,
//             handleBackToQuiz
//         },
//         dispatch
//     );

// export default connect(mapStateToProps, mapDispatchToProps)(EditQuestionofQuiz);


import React, { useState,useEffect } from "react";
import { Field, Form, Formik } from "formik";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button, Card } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import {
    getQuestionList,
    handleBackToQuiz,
    updateQuestionsInQuiz,
    addQuestion ,
    updateQuizNameByQuizId
} from "../../../../Container/Quiz/QuizAction";
import { InputComponent } from "../../../../Components/Forms/Formik/InputComponent";
import TextArea from "antd/es/input/TextArea";


function EditQuestionofQuiz(props) {
    const [isNewQuestion, setIsNewQuestion] = useState(false);
    const [quizName, setQuizName] = useState(props.quizName);
    const [isEditingName, setIsEditingName] = useState(false);
    const handleAddQuestion = () => {
        setIsNewQuestion(true);  // Switch to add mode
    };
    const handleUpdateQuestion = (values) => {
       
          const updatedQuestion = {
            ...values,
            id:   props.item.id,
            quizId: props.item.quizId,
          };
          props.updateQuestionsInQuiz(updatedQuestion, props.item.id);
        }
        const handleUpdateName = () => {
            const updatedName = {
                quizHostId:props.quizHostId,
              quizName: quizName, // Use the updated quiz name from local state
            };
            props.updateQuizNameByQuizId(updatedName, props.item.quizId);
            setIsEditingName(false); // Close the input box after updating
          };
    console.log(props.item)
    return (
        <>
            <Formik
             enableReinitialize
                initialValues={{
                    quizHostId: props.quizHostId,
                    quizId: props.item.quizId,
                    categoryId: props.item.categoryId,
                    question: isNewQuestion ? "" : props.item.question || '',
                    option1: isNewQuestion ? "" : props.item.option1 || '',
                    option2: isNewQuestion ? "" : props.item.option2 || '',
                    option3: isNewQuestion ? "" : props.item.option3 || '',
                    option4: isNewQuestion ? "" : props.item.option4 || '',
                }}
                onSubmit={(values, { resetForm }) => {
                    if (isNewQuestion) {
                        // Add new question
                        const newQuestionNo = (props.item.questionNo || 0) + 1;
                        props.addQuestion(
                            {
                                quizId: props.item.quizId,
                                quizHostId: props.quizHostId,
                                questionNo: newQuestionNo,
                                question: values.question,
                                option1: values.option1,
                                option2: values.option2,
                                option3: values.option3,
                                option4: values.option4,
                            },
                            props.item.quizId
                        );
                    } else {
                        // Update existing question
                        props.updateQuestionsInQuiz(
                            { ...values },
                            props.item.id,
                            props.quizId
                        );
                    }
                    resetForm();  // Clear form
                    setIsNewQuestion(false);  // Switch back to update mode
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
                         <div className="w-full  flex justify-center flex-col ">
                                {/* Container */}
                                <div class="w-wk flex justify-center flex-col items-center">
                                <div className="flex items-center justify-center ">
                                <Button
                className="md:hidden"
                icon={<MenuOutlined className="!text-black"/>}
                onClick={() => props.setIsDrawerVisible(true)}
              > 
              </Button>
                                        {/* <Card style={{ fontSize: 22, alignSelf: "center" }}> */}
                                        <div>
      {/* Conditionally show input or name text */}
      {isEditingName ? (
        <input
          type="text"
          value={quizName}
          onChange={(e) => setQuizName(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleUpdateName()} // Trigger update on 'Enter'
          onBlur={handleUpdateName} // Optional: Update on blur as well
          autoFocus // Focus the input automatically when editing
        />
      ) : (
        <div onClick={() => setIsEditingName(true)} className="cursor-pointer text-xl font-[Poppins]">{quizName}</div> // Click to enter edit mode
      )}
    </div>
                                            {/* (<h3 class="flex justify-center text-base ">Question {props.questionNo || null}</h3>) */}
                                            </div>
                                        {/* </Card> */}
                                        <hr class="h-px bg-black border-2 w-wk mt-4 border-black"/>
                                        <div class="mt-4 w-wk p-4">
                                            <Field
                                               
                                                name="question"
                                                value={`${values.question}`}
                                                component={InputComponent}
                                                  placeholder="Add your question"
                                                onChangeText={() => handleChange("question")}
                                                style={{ width: "100%", height: "3rem",borderRadius:"0.25rem" }}
                                                onKeyDown={(e) => e.key === 'Enter' && handleUpdateQuestion(values)}
                                            />
                                        </div>
                                        <div className="flex justify-between  w-wk p-4">
                                        <div class="w-[47.5%]">
                                            <Field
                                                component={InputComponent}
                                                value={`${values.option1}`}
                                                name="option1"
                                                 placeholder="A. Add Correct Answer"
                                                onChangeText={() => handleChange("option1")}
                                                style={{ width: "100%", height: "3rem",borderRadius:"0.25rem" }}
                                                onKeyDown={(e) => e.key === 'Enter' && handleUpdateQuestion(values)}
                                            />
                                        </div>
                                        <div class="w-[47.5%]">
                                            <Field
                                                component={InputComponent}
                                                value={`${values.option2}`}
                                                placeholder="B. Add answer 2"
                                                name="option2"
                                                onChangeText={() => handleChange("option2")}
                                                style={{ width: "100%", height: "3rem",borderRadius:"0.25rem" }}
                                                onKeyDown={(e) => e.key === 'Enter' && handleUpdateQuestion(values)}
                                            />
                                        </div>
                                        </div>
                                        <div className="flex justify-between  w-wk p-4">
                                        <div class="w-[47.5%]">
                                            <Field
                                                component={InputComponent}
                                                value={`${values.option3}`}
                                               placeholder="C. Add answer 3"
                                                name="option3"
                                                onChangeText={() => handleChange("option3")}
                                                style={{ width: "100%", height: "3rem",borderRadius:"0.25rem" }}
                                                onKeyDown={(e) => e.key === 'Enter' && handleUpdateQuestion(values)}
                                            />
                                        </div>
                                        <div class="w-[47.5%]">
                                            <Field
                                                component={InputComponent}
                                                value={`${values.option4}`}
                                                 placeholder="D. Add answer 4"
                                                name="option4"
                                                onChangeText={handleChange("option4")}
                                                style={{ width: "100%", height: "3rem",borderRadius:"0.25rem" }}
                                                onKeyDown={(e) => e.key === 'Enter' && handleUpdateQuestion(values)}
                                            />
                                        </div>
                                        </div>
                                        <div class="flex justify-between p-6 w-wk">    
                                        <div class="" >
                                            <Button
                                                title={""}
                                                type="primary"
                                                onClick={() => props.handleDeleteQuestion(props.item.id)}
                                                style={{  height: "3rem",backgroundColor:"#3B16B7",borderRadius:'0.25rem' }}
                                            >
                                                 <h3 class="font-medium text-white text-base">Delete</h3>
                                            </Button>
                                            </div>
                                            {/* <div>
                                            <Button
                                                title=""
                                                type="primary"
                                                onClick={() => handleSubmit()}
                                                style={{ height: "3rem", backgroundColor: "#3B16B7", borderRadius: '0.25rem' }}
                                            >
                                                <h3 class="font-medium text-white text-base">
                                                Update

                                                </h3>
                                            </Button>
                                        </div> */}
                                        <div>
                                        <Button
                                                title={isNewQuestion ? "Save Question" : "Add New Question"}
                                                type="primary"
                                                onClick={() => {
                                                    if (isNewQuestion) {
                                                        handleSubmit(); // Save the question
                                                    } else {
                                                        handleAddQuestion(); // Enter add mode
                                                    }
                                                }}
                                                style={{ height: "3rem", backgroundColor: "#3B16B7", borderRadius: '0.25rem' }}
                                            >
                                                <h3 className="font-medium text-white text-base">
                                                    {isNewQuestion ? "Save Question" : "Add New Question"}
                                                </h3>
                                            </Button>
                                    </div>    

                                            <div class="" >
                        <Button
                                                title={""}
                                                type="primary"
                                                style={{  height: "3rem",backgroundColor:"#3B16B7",borderRadius:'0.25rem' }}
                                                onClick={() => props.backTo()}

                                            ><h3 class="font-medium text-white text-xl">Back To Quiz</h3></Button>
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
    quizHostId: auth.userDetails.userId
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            getQuestionList,
            updateQuestionsInQuiz,
            addQuestion, 
            handleBackToQuiz,
            updateQuizNameByQuizId
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(EditQuestionofQuiz);
