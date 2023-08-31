import React from 'react'
import { connect } from 'react-redux';
import { Formik, Form, Field } from "formik";
import { bindActionCreators } from 'redux';
import { useHistory } from "react-router-dom";
import { updateQuizNameByQuizId } from '../../QuizAction';
import { Button } from 'antd';
import FWLogo from "../../../../images/lamp-charge.png";
import { InputComponent } from '../../../../Components/Forms/Formik/InputComponent';
import MainHeader from '../../../../Components/Mainheader';
function UpdateQuizNameAndDuration(props) {

    const history = useHistory();
    function handleCallBack() {
        history.push(`/updateQuizInLibrary/${props.match.params.quizId}`);
    }
    return (
        <>
        <div class="min-h-screen">
            <MainHeader />
            <Formik
                initialValues={{
                    duration: props.match.params.duration,
                    quizName: props.match.params.quizName,
                    quizHostId: props.quizHostId,
                }}

                onSubmit={(values) => {

                    props.updateQuizNameByQuizId(
                        {
                            ...values
                        },
                        props.match.params.quizId,
                        handleCallBack
                    );
                    //resetForm()
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
                    <Form class="flex justify-center flex-col items-center  max-sm:w-11/12 mt-8 m-auto h-hk md:mt-12  w-2/5 ">
                        <div class="shadow-2xl bg-white border-solid w-full flex justify-center items-center  p-1 max-sm:m-0 h-h26 rounded-rounded2.8 md:w-full m-auto">
                            <div class="w-11/12" >
                                <div class="flex justify-center flex-col items-center">
                            <h2 class="text-3xl font-medium">Update quiz</h2>
              <div>
              <img
                    className="big-logo"
                    src={FWLogo}
                    
                    alt="Tekorero logo"

                  />
              </div>  
              </div>
                            <div class="mt-4">
                                    <Field
                                        name="quizName"
                                        onChangeText={handleChange('quizName')}
                                        component={InputComponent}
                                        value={`${values.quizName}`}
                                        style={{ width: "100%", height: "3rem",borderRadius:"1.25rem",backgroundColor:"#E4E2E2", }}
                                    // placeholder="Enter Quiz Name" 
                                    />
                                </div>
                                {/* <div class="mt-6">
                                    <Field
                                        name="duration"
                                        onChangeText={handleChange('duration')}
                                        component={InputComponent}
                                        value={`${values.duration}`}
                                    // placeholder="Enter Response time per question"
                                    />
                                </div> */}
                             
                            </div>
                        </div>
                        <div class="bg-black rounded-rounded2.8  mt-8 w-52 items-center flex justify-center" >
                                    <Button
                                        type="primary"
                                        style={{  height: "5em",backgroundColor:"black",borderRadius:'3rem',display:"flex",justifyContent:"center",alignItems:"center" }}
                                        onClick={handleSubmit}
                                    ><h3 class="font-medium text-white text-3xl">Update Quiz</h3></Button>
                                </div>
                    </Form>
                )}
            </Formik>
            </div>
        </>
    )
}

const mapStateToProps = ({ auth, quiz }) => ({
    //   updateQuizNameQuizId:quiz.updateQuizNameQuizId,
    //   updateQuizNameQuizIdError:quiz.updateQuizNameQuizIdError,
    //   showQuiz: quiz.showQuiz,
    //   fetchingQuizName:quiz.fetchingQuizName,
    // quizId:quiz.showQuiz.quizId
    quizHostId: auth.userDetails.userId
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            updateQuizNameByQuizId,
            //   getQuizName,
        },
        dispatch,
    );

export default connect(mapStateToProps, mapDispatchToProps)(UpdateQuizNameAndDuration);