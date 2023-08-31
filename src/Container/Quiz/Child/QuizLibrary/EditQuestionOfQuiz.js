import React from "react";
import { Field, Form, Formik } from "formik";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button, Card } from "antd";
import {
    getQuestionList,
    handleBackToQuiz,
    updateQuestionsInQuiz,
} from "../../../../Container/Quiz/QuizAction";
import { InputComponent } from "../../../../Components/Forms/Formik/InputComponent";


function EditQuestionofQuiz(props) {

    console.log(props.item)
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
                    props.updateQuestionsInQuiz
                        (
                            {
                                ...values,
                            },
                            props.item.id,
                            props.quizId
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
                    <Form class=" max-sm:w-full flex items-center flex-col h-hk  m-auto md:mt-12  w-2/5  h-h50  ">
                        <div className="w-full my-2 flex justify-center m-auto ">
                            <div>
                                {/* Container */}
                                <div>
                                <div class="shadow-2xl border-solid  flex justify-center flex-col items-center  p-2 max-sm:m-0 h-h30 rounded-rounded2.8 md:m-auto"
                                        // style={{
                                        //     WebkitBoxShadow: "0 0 10px 2px rgb(46 46 46 / 39%)",

                                        // }}
                                    >
                                        {/* <Card style={{ fontSize: 22, alignSelf: "center" }}> */}
                                            <h3 class="flex justify-center text-xl">Question {props.questionNo || null}</h3>
                                        {/* </Card> */}
                                        <hr class="h-px bg-black border-2 w-wk mt-4 border-black"/>
                                        <div class="mt-1">
                                            <Field
                                               
                                                name="question"
                                                value={`${values.question}`}
                                                component={InputComponent}
                                                onChangeText={() => handleChange("question")}
                                                style={{ width: "20rem", height: "6rem",borderRadius:"1.25rem",backgroundColor:"white" }}
                                            />
                                        </div>
                                        <div class="mt-1">
                                            <Field
                                                component={InputComponent}
                                                value={`${values.option1}`}
                                                name="option1"
                                                onChangeText={() => handleChange("option1")}
                                                style={{ border: "2px solid #07dd07",width: "20rem", height: "3.5rem",borderRadius:"1.25rem",backgroundColor:"#E4E2E2" }}
                                            />
                                        </div>
                                        <div class="mt-1">
                                            <Field
                                                component={InputComponent}
                                                value={`${values.option2}`}
                                                placeholder="Option 2"
                                                name="option2"
                                                onChangeText={() => handleChange("option2")}
                                                style={{width: "20rem", height: "3.5rem",borderRadius:"1.25rem",backgroundColor:"#E4E2E2" }}
                                            />
                                        </div>
                                        <div class="mt-1">
                                            <Field
                                                component={InputComponent}
                                                value={`${values.option3}`}
                                                placeholder="Option 3"
                                                name="option3"
                                                onChangeText={() => handleChange("option3")}
                                                style={{width: "20rem", height: "3.5rem",borderRadius:"1.25rem",backgroundColor:"#E4E2E2" }}
                                            />
                                        </div>
                                        <div class="mt-1">
                                            <Field
                                                component={InputComponent}
                                                value={`${values.option4}`}
                                                placeholder="Option 4"
                                                name="option4"
                                                onChangeText={handleChange("option4")}
                                                style={{ width: "20rem", height: "3.5rem",borderRadius:"1.25rem",backgroundColor:"#E4E2E2" }}
                                            />
                                        </div>
                                        <div className="flex flex-row justify-between mt-4">
                                        <div class="bg-black rounded-rounded2.8  mt-2 w-36 items-center flex justify-center" >
                                            <Button
                                                title={""}
                                                type="primary"
                                                onClick={() => props.handleDeleteQuestion(props.item.id)}
                                                style={{  height: "3rem",backgroundColor:"#565656",borderRadius:'3rem' }}
                                            >
                                                 <h3 class="font-medium text-white text-2xl">Delete</h3>
                                            </Button>
                                            </div>
                                            <div class="bg-black rounded-rounded2.8 ml-2  mt-2 w-36 items-center flex justify-center" >
                                            <Button
                                                title={""}
                                                type="primary"
                                                onClick={() => handleSubmit()}
                                                style={{  height: "3rem",backgroundColor:"#565656",borderRadius:'3rem' }}
                                            >
                                                 <h3 class="font-medium text-white text-2xl">Update</h3>
                                            </Button>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                {/* Buttons */}
                            </div>
                        </div>
                        <div class="bg-black rounded-rounded2.8  mt-1 w-52 items-center flex justify-center" >
                        <Button
                                                title={""}
                                                type="primary"
                                                style={{  height: "3.5rem",backgroundColor:"black",borderRadius:'3rem',display:"flex",justifyContent:"center",alignItems:"center" }}
                                                onClick={() => props.backTo()}

                                            ><h3 class="font-medium text-white text-3xl">Back To Quiz</h3></Button>
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
            handleBackToQuiz
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(EditQuestionofQuiz);
