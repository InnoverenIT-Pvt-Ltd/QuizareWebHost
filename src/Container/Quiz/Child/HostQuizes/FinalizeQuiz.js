import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getFinalizeQuiz, deleteHostQuiz, hostQuiz } from "../../QuizAction";
import { Button, Card } from "antd";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import MainHeader from "../../../../Components/Mainheader";
import { Form, Formik } from "formik";

function FinalizeQuiz(props) {
  const history = useHistory();

  function handleCallBack(data) {
    history.push(`/updateQuizName`);
  }
  useEffect(() => {
    props.getFinalizeQuiz(props.showQuiz && props.showQuiz.quizId);
  }, []);
  return (
    <>
      <MainHeader />
      <Formik>
        <Form class=" max-sm:w-5/6 mt-8 m-auto md:mt-12  w-1/5  h-h50  ">
          <div className="bg-white rounded-rounded2.8 mt-3 ">

            <div class="shadow-2xl border-solid  p-1 max-sm:m-0 h-h34 rounded-rounded2.8 md:m-auto">
              <h1>{`${props.finalizeQuiz.quizName || ""}`}</h1>
              <div class="mt-20">
                <div style={{ boxShadow: "0.01rem 0.01rem 0.12rem 0.01rem" }} className="bg-white rounded-2xl  w-full flex justify-center ">

                  <div class="shadow-2xl border-solid w-full  p-1 max-sm:m-0 h-28 rounded-2xl md:m-auto">
                    <h3>Created:</h3>
                    <h3>Questions:  {`${props.finalizeQuiz.noOfQuestions || ""}`}</h3>
                    <h3>Categories:</h3>
                  </div>
                </div>
              </div>
              <div class="flex justify-center mt-8">

                <h2 class="text-2xl font-bold" >Select quiz rules</h2>
              </div>
              <div >
                <div style={{ boxShadow: "0.01rem 0.01rem 0.12rem 0.01rem" }} className="bg-white rounded-2xl  w-full flex justify-center mt-2 ">

                  <div class="shadow-2xl border-solid w-full  p-1 max-sm:m-0 h-28 rounded-2xl md:m-auto">
                    <div class="flex flex-row">
                      <h2 class="text-base font-bold" >
                        Question response time:
                      </h2>
                      <h2 class="text-base font-bold" >
                        {`${props.finalizeQuiz.duration || ""}`} sec
                      </h2>
                    </div>
                    <div class="flex flex-row">
                      <h2 class="text-base font-bold" >
                        Scoring system:
                      </h2>
                      <h2 class="text-base font-bold" >
                        Standard
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex flex-row mt-8 justify-between">
                <Link to="/create">
                  <Button
                    type="primary"
                    style={{ width: "9rem", backgroundColor: "white" }}
                    onClick={() => props.deleteHostQuiz(props.showQuiz && props.showQuiz.quizId, handleCallBack())}
                  ><h3>Delete This Quiz</h3></Button>
                </Link>
                <Link to="/updateQuizName">
                  <Button
                    style={{ width: "9rem", backgroundColor: "white" }}
                    type="primary"

                  //   onClick={() => props.navigation.navigate('Quiz Invite')}
                  ><h3>Edit This Quiz</h3></Button>
                </Link>

              </div>
              <div class="mt-3">
                <Link to="/hostquiz">
                  <Button
                    type="primary"
                    style={{ backgroundColor: "white" }}
                    onClick={() => props.hostQuiz(props.showQuiz.quizId)}
                  ><h3>Host This Quiz</h3></Button>
                </Link>
              </div>


            </div>
          </div>
        </Form>
      </Formik>

    </>
  );
}

const mapStateToProps = ({ auth, quiz }) => ({
  showQuiz: quiz.showQuiz,
  noOfQuestions: quiz.noOfQuestions,
  quizId: quiz.showQuiz.quizId,
  fetchingFinalizeQuiz: quiz.fetchingFinalizeQuiz,
  fetchingFinalizeQuizError: quiz.fetchingFinalizeQuizError,
  finalizeQuiz: quiz.finalizeQuiz,
  deletingQuizHost: quiz.deletingQuizHost,
  deletingQuizHostError: quiz.deletingQuizHostError,
  hostQuizByQuizId: quiz.hostQuizByQuizId,
  hostQuizByQuizIdError: quiz.hostQuizByQuizIdError,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getFinalizeQuiz,
      deleteHostQuiz,
      hostQuiz,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(FinalizeQuiz);
