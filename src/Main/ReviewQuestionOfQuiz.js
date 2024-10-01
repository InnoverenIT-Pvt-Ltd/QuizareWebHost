import React from "react";
import { Field, Form, Formik } from "formik";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button, Card } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import {
    getQuestionList,
    handleBackToQuiz,
    updateQuestionsInQuiz,
} from "../Container/Quiz/QuizAction";
import { InputComponent } from "../Components/Forms/Formik/InputComponent";
import TextArea from "antd/es/input/TextArea";


function ReviewQuestionOfQuiz(props) {

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
                                            <h3 class="flex justify-center text-xl">Question {props.questionNo || null}</h3>
                                            </div>
                                        {/* </Card> */}
                                        <hr class="h-px bg-black border-2 w-wk mt-4 border-black"/>
                                        <div class="mt-4 w-wk p-4">
                                            <Field
                                               
                                                name="question"
                                                value={`${values.question}`}
                                                component={TextArea}
                                                onChangeText={() => handleChange("question")}
                                                style={{ width: "100%", height: "3rem",borderRadius:"0.25rem" }}
                                            />
                                        </div>
                                        <div className="flex justify-between  w-wk p-4">
                                        <div class="w-[47.5%]">
                                            <Field
                                                component={InputComponent}
                                                value={`${values.option1}`}
                                                name="option1"
                                                onChangeText={() => handleChange("option1")}
                                                style={{ width: "100%", height: "3rem",borderRadius:"0.25rem" }}
                                            />
                                        </div>
                                        <div class="w-[47.5%]">
                                            <Field
                                                component={InputComponent}
                                                value={`${values.option2}`}
                                                placeholder="Option 2"
                                                name="option2"
                                                onChangeText={() => handleChange("option2")}
                                                style={{ width: "100%", height: "3rem",borderRadius:"0.25rem" }}
                                            />
                                        </div>
                                        </div>
                                        <div className="flex justify-between  w-wk p-4">
                                        <div class="w-[47.5%]">
                                            <Field
                                                component={InputComponent}
                                                value={`${values.option3}`}
                                                placeholder="Option 3"
                                                name="option3"
                                                onChangeText={() => handleChange("option3")}
                                                style={{ width: "100%", height: "3rem",borderRadius:"0.25rem" }}
                                            />
                                        </div>
                                        <div class="w-[47.5%]">
                                            <Field
                                                component={InputComponent}
                                                value={`${values.option4}`}
                                                placeholder="Option 4"
                                                name="option4"
                                                onChangeText={handleChange("option4")}
                                                style={{ width: "100%", height: "3rem",borderRadius:"0.25rem" }}
                                            />
                                        </div>
                                        </div>
                                      
                                        <div class="mt-4" >
                        <Button
                                                title={""}
                                                type="primary"
                                                style={{  height: "3rem",backgroundColor:"#3B16B7",borderRadius:'0.25rem' }}
                                                onClick={() => props.backTo()}

                                            ><h3 class="font-medium text-white text-xl">Back To Quiz</h3></Button>
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
            handleBackToQuiz
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(ReviewQuestionOfQuiz);
