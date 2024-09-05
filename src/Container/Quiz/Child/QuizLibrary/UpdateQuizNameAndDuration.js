import React from 'react'
import { connect } from 'react-redux';
import { Formik, Form, Field } from "formik";
import { bindActionCreators } from 'redux';
import { useHistory } from "react-router-dom";
import { updateQuizNameByQuizId } from '../../QuizAction';
import { Button } from 'antd';
import FWLogo from "../../../../images/lamp-charge.png";
import FWLogo2 from "../../../../images/linear_background_154 2.jpg";
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
                    <Form class="flex  justify-center flex-col items-center  max-sm:w-11/12 mt-8 m-auto h-[60vh] md:mt-12 w-4/12 md:h-[80vh] ">
                         <div>
              <img
                    className="big-logo"
                    src={FWLogo2}
                    style={{ borderRadius:"0.75rem"}}
                    alt="Tekorero logo"

                  />
              </div>
              <div class="absolute md:bottom-[12rem] w-full flex flex-col justify-center items-center  max-sm:m-0 h-80  md:w-full m-auto">
              <div class="flex flex-col items-center ">
                                <div class="flex justify-center flex-col items-center">
                                <h2 class="text-3xl font-medium text-white">Update quiz</h2>
            
              </div>
                            <div class="mt-4">
                                    <Field
                                        name="quizName"
                                        onChangeText={handleChange('quizName')}
                                        component={InputComponent}
                                        value={`${values.quizName}`}
                                        style={{ width: "100%", height: "2rem",borderRadius:"0.25rem",backgroundColor:"#E4E2E2", }}
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
                            <div class=" rounded  items-center flex justify-center mt-6" >
                                    <Button
                                        type="primary"
                                        style={{  height: "2rem",backgroundColor:"white",borderRadius:'0.25rem',width:"11rem",display:"flex",justifyContent:"center",alignItems:"center" }}
                                        onClick={handleSubmit}
                                    ><h3 class="font-medium text-black text-xl">Update Quiz</h3></Button>
                                </div>
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